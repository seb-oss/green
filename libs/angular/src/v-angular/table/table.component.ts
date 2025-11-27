import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
} from '@angular/core'
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

import {
  TableAppendableRowsTemplateDirective,
  TableFooterTemplateDirective,
  TableTemplateDirective,
} from './table.directive'
import {
  ariaLabelsOrderBy,
  OrderBy,
  TableColumn,
  TableRow,
} from './table.models'
import { orderByAscending, orderByDescending, pick } from './table.tools'

let staticInitId = 0

function objectFromEntries(entryMap: Map<any, any>): { [key: string]: any } {
  const fromEntries: { [key: string]: any } = {}
  for (const [key, value] of entryMap) {
    fromEntries[key] = value
  }
  return fromEntries
}

/**
 * A table component with built-in sorting and selecting functionality.
 * By default, table cells (i.e. `<td>` elements) and table headers (i.e. `<th>` elements) are populated with text only values.
 *
 * To customize the contents of either the `<td>` or `<th>` elements (like adding color, icons, form fields, extra padding etc.), provide
 * the customized content within a `<ng-template>`-tag, and place the ng-template in the html between the start and ending tag of
 * the `<nggv-table>`. Add a `tableColumn`-attribute to the `<ng-template>`-element, and set the value to the specific column property.
 * Set `tableColumnTarget` to either `th`, `td` or `both` (default) depending on target element type.
 * The entire row from the `@Input() tableData` is available from the context `$implicit` variable.
 *
 * @example
 * <!-- for table cells i.e. td-elements -->
 * <ng-template tableColumn="status" tableColumnTarget="td" let-myDataVar="$implicit" let-status="$implicit.status">
 *  <!-- my custom status element -->
 * </ng-template>
 *
 * @example
 * <!-- for table headers i.e. th-elements -->
 * <ng-template tableColumn="status" tableColumnTarget="th" let-myDataVar="$implicit" let-status="$implicit.status">
 *  <!-- my custom status element -->
 * </ng-template>
 *
 * It is possible to add custom rows that are appended below data row. Use `<ng-template>`-tag and place the ng-template in the html between the start and ending tag of
 * the `<nggv-table>`. Add a `tableAppendableRows`-attribute to the `<ng-template>`-element. Any `tr` elements that exist within `<ng-template tableAppendableRows>` and `</ng-template>` tags will be put below data row's `tr` element in the table.
 *
 * @example
 * <!-- custom appended rows -->
 * <ng-template tableAppendableRows let-myDataVar="$implicit" let-status="$implicit.status">
 *  <tr>
 *   <!-- first row's columns -->
 *  </tr>
 *  <!-- more rows if needed -->
 * </ng-template>
 *
 * If custom styling is needed for data row that has appended rows, you can use data attribute `data-hasrowspan` to distinguish it from data row without appended rows.
 * You can pass your own custom method with conditional logic to define what value will be passed to data-hasrowspan.
 * In addition, hasRowSpan function accepts item from `@Input() tableData` as argument which is of the same type as value passed to context `$implicit` variable.
 * IMPORTANT: use arrow function style for defining function inside component, i.e. `hasRowSpan = (value) => output;`. If regular function will be defined, i.e. `hasRowSpan(value) { return output; }`, binding will not work.
 *
 * @example
 * <!-- inside component
 * class CustomComponent {
 *  customHasRowSpanFunction = (item: CustomDataType) => item.appendedRowsData.length > 0 ? true : false;
 * }
 * -->
 * <!-- inside stylesheets
 * [data-hasrowspan="true"] {
 *  color: blue;
 * }
 * .appended-row {
 *  color: blue;
 * }
 * -->
 * <nggv-table [hasRowSpan]="customHasRowSpanFunction">
 *  <!-- custom appended rows -->
 *  <ng-template tableAppendableRows let-appendedRowsData="$implicit.appendedRowsData">
 *   <tr *ngFor="let appendedRowItem of appendedRowsData" class="appended-row">
 *    <td>{{ appendedRowItem }}</td>
 *    <!-- other row's columns -->
 *   </tr>
 *  </ng-template>
 * </nggv-table>
 *
 * In addition, it is possible to add footer for the table. Similarly to adding custom columns, use `<ng-template>`-tag and place the ng-template in the html between the start and ending tag of
 * the `<nggv-table>`. Add a `tableFooter`-attribute to the `<ng-template>`-element. Any elements that exist within `<ng-template tableFooter>` and `</ng-template>` tags will be put to tfoot element inside the table.
 *
 * @example
 * <!-- for table footer i.e. tfoot-element -->
 * <ng-template tableFooter>
 *  <tr>
 *   <!-- first row's columns -->
 *  </tr>
 *  <!-- more rows if needed -->
 * </ng-template>
 *
 */
@Component({
    selector: 'nggv-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    standalone: false
})
export class TableComponent<T extends TableRow>
  implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  /**
   * @internal
   * Custom templates defined in the html.
   */
  @ContentChildren(TableTemplateDirective, { descendants: true })
  customTemplates!: QueryList<TableTemplateDirective<keyof T>>

  /**
   * @internal
   * Custom appended rows template defined in the html.
   */
  @ContentChild(TableAppendableRowsTemplateDirective)
  appendedRowsTemplate!: TableAppendableRowsTemplateDirective

  /**
   * @internal
   * Custom footer template defined in the html.
   */
  @ContentChild(TableFooterTemplateDirective)
  customFooterTemplate!: TableFooterTemplateDirective

  /** Emits the table row that was clicked. Works on all columns if not preventDefaultEmit is set for that column. */
  @Output() ngvRowClick = new EventEmitter<T | any>()

  /**
   * Emits currently selected and deselected items in the table as key-value pairs.
   * Uses each item`s itemId as key, and a boolean value to describe selected status.
   */
  @Output() ngvRowSelect = new EventEmitter<string[]>()

  /**
   * Emits event to signal that the table should be reordered.
   */
  @Output() ngvOrderBy = new EventEmitter<OrderBy<T>>()

  /**
   * An array of items describing how the table header should be rendered,
   * together with instructions for how each row should be displayed in that column.
   */
  @Input() tableColumns!: TableColumn<T>[]

  /** Data array to display data in the table. Each item <T> in the array represents a row in the table. */
  @Input() tableData!: T[]

  /**
   * Property name used to uniquely describe each item (i.e. row) in the data table.
   * Defaults to \'id\'.
   * Is required if selectable is true.
   */
  @Input() rowId = 'id'

  /**
   * Function's return value is used for data attribute \'data-hasrowspan\'.
   * If custom hasRowSpan function is not passed to the table,
   * then this function returns undefined value by default which results in \'data-hasrowspan\' attribute being omitted in html
   * (angular omits attributes that contain null or undefined value).
   * IMPORTANT: use arrow function style for defining function inside component, i.e. `hasRowSpan = (value) => output;`. If regular function will be defined, i.e. `hasRowSpan(value) { return output; }`, binding will not work.
   */
  @Input() hasRowSpan: (item: T) => any = (_) => undefined

  /**
   * Used to enable/disable the left-side checkbox column.
   * Defaults to true.
   */
  @Input() selectable = true

  /**
   * Array of row id's (as defined by rowId property) that should not have a checkbox even if selectable is true.
   */
  @Input() hiddenCheckboxRowIds: string[] = []

  /**
   * Used to enable/disable expandable rows.
   * Defaults to false.
   */
  @Input() expandable = false

  /**
   * Used to enable/disable the right-side expand icon column.
   * Defaults to true.
   */
  @Input() expandedByDefault = true

  /**
   * Property name used to describe the subItems in the data table.
   */
  @Input() subItemsProp = 'subItems'

  /**
   * Allow nggv-table to attempt sorting the data in the table. Not recommended if only a subset is loaded or if the dataset is very large.
   * Disabled by default.
   */
  @Input() allowLocalSort = false

  /** Special property used for selecting DOM elements during automated UI testing. */
  @Input() thook = 'table-select-all'

  /** Function to overwrite generated thook for each row. */
  @Input() trThookFn?: (item: T) => string

  /** Aria label for the checkbox in the table header */
  @Input() ariaLabelCheckboxTh?: string

  /** Aria label for the checkbox in the table header */
  @Input() ariaLabelCheckboxTr?: string

  /** Aria labels for sorting in the table header */
  @Input() ariaLabelsOrderBy?: ariaLabelsOrderBy

  /**
   * @internal
   * Internal data structure used to keep track of added content templates used in td elements.
   */
  customRowTemplates = new Map<keyof T, TemplateRef<any>>()

  /**
   * @internal
   * Internal data structure used to keep track of added content templates used in th elements.
   */
  customHeaderTemplates = new Map<keyof T, TemplateRef<any>>()

  /**
   * @internal
   * Internal data structure used to hold custom appended rows i.e. tr elements (rows).
   */
  appendedRowsTemplateRef!: TemplateRef<any>

  /**
   * @internal
   * Internal data structure used to hold tfoot element children i.e. tr elements (rows).
   */
  customFooterTemplateRef!: TemplateRef<any>

  /**
   * @internal
   * Incremental id.
   */
  initId!: number

  /**
   * @internal
   * FormGroup containing all row id\'s as controls, and whether these are selected or not as values.
   */
  rowSelectors: UntypedFormGroup = new UntypedFormGroup({})

  /**
   * @internal
   * Master selector for selecting or deselecting all row selectors.
   */
  groupSelector: UntypedFormControl = new UntypedFormControl(false)

  private selected: string[] = []
  private subs: Subscription[] = []

  ngOnChanges(changes: SimpleChanges) {
    // Update selectable or expandable rows if table data or settings change
    if (
      (this.selectable || this.expandable) && changes.tableData?.currentValue ||
      (changes.selectable?.currentValue || changes.expandable?.currentValue) && this.tableData
    ) {
      const wasChanged = this.registerSelectableRows(
        changes.tableData.currentValue,
      )
      if (wasChanged && !this.subs.length) {
        // first time this is run
        const groupSelectorSub = this.groupValueSubscription
        const rowSelectorSub = this.rowValueSubscription
        this.subs.push(groupSelectorSub, rowSelectorSub)
      } else if (wasChanged) {
        this.rowSelectors.updateValueAndValidity()
      }
    }

    // sort any incoming data
    if (
      this.allowLocalSort &&
      (changes.tableData?.currentValue || changes.tableColumns?.currentValue)
    ) {
      const orderedByColumn: TableColumn<T> | undefined =
        this.tableColumns?.find((el) => el.order !== undefined)
      if (orderedByColumn) this.sortItemsBy(orderedByColumn)
    }
  }

  ngOnInit(): void {
    this.initId = staticInitId++
  }

  ngAfterContentInit() {
    // if any custom templates were defined in the template
    if (this.customTemplates.length) {
      // for each template found
      this.customTemplates.map((tableTemplate) => {
        // if target is either 'td' or 'both'
        if (
          ['td', 'both'].includes(tableTemplate.tableColumnTarget as string)
        ) {
          // add to custom row templates
          this.customRowTemplates.set(
            tableTemplate.tableColumn,
            tableTemplate.templateRef,
          )
        }
        // if target is either 'th' or 'both'
        if (
          ['th', 'both'].includes(tableTemplate.tableColumnTarget as string)
        ) {
          // add to custom header templates
          this.customHeaderTemplates.set(
            tableTemplate.tableColumn,
            tableTemplate.templateRef,
          )
        }
      })
    }

    // if appended rows' template is defined in the template
    if (this.appendedRowsTemplate) {
      // set templateRef of appended rows' template to variable
      this.appendedRowsTemplateRef = this.appendedRowsTemplate.templateRef
    }

    // if custom footer template is defined in the template
    if (this.customFooterTemplate) {
      // set templateRef of table footer to variable
      this.customFooterTemplateRef = this.customFooterTemplate.templateRef
    }

    // if expandedByDefault is true, then expand all rows
    if (this.expandedByDefault && this.expandable && this.tableData) {
      this.tableData.forEach((item) => {
        this.toggleRowToExpand(item[this.rowId])
      })
    }
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe())
  }

  /**
   * @internal
   * Returns a subscription to the master selector control that either selects or deselects all row controls.
   */
  get groupValueSubscription(): Subscription {
    return this.groupSelector.valueChanges.subscribe({
      next: (value: boolean) => {
        const selectMap = new Map(Object.entries(this.rowSelectorsValue))
        selectMap.forEach((_, key) => selectMap.set(key, value))
        const patchValue = objectFromEntries(selectMap)
        this.rowSelectors.patchValue(patchValue)
      },
    })
  }

  /**
   * @internal
   * Returns a subscription to all individual row selectors and update the master selector if all are selected.
   */
  get rowValueSubscription(): Subscription {
    return this.rowSelectors.valueChanges
      .pipe(
        debounceTime(0), // to limit the number of events and to wait for all sub controls to update
        map((val: { [key: string]: boolean }) => {
          // get a filtered array of keys for all rows that are selected
          const selected = Object.keys(val).filter((key) => {
            return val[key] === true && this.rowSelectors.get(key)?.enabled
          })
          // returns an object containing only the filtered keys
          return pick(selected, val)
        }),
      )
      .subscribe({
        next: (value: object) => {
          // the number of selected keys compared to the total number of keys available
          const numberOfSelected = Object.keys(value).length
          const allSelected: boolean =
            numberOfSelected > 0
              ? numberOfSelected === Object.keys(this.rowSelectorsValue).length
              : false
          // update the master selector control
          this.groupSelector.setValue(allSelected, { emitEvent: false })
          // update the array of currently selected id's
          this.selected = Object.keys(value)
          // and emit the updated value
          this.ngvRowSelect.emit(this.selected)
        },
      })
  }

  /**
   * @internal
   * Registers or disables row controls for new or removed rows.
   */
  registerSelectableRows(tableData: any[]): boolean {
    if (!tableData) return false
    // Array containing only the id's for each row
    const dataRowIds: string[] = tableData.map((data: any) => data[this.rowId])

    // Array containing the id's that have registered controls
    const currentIds: string[] = Object.keys(this.rowSelectorsValue)

    // Array containing all ids that lacks a corresponding control (i.e. new rows)
    const newIds: string[] = dataRowIds.filter(
      (id) => currentIds.indexOf(id) === -1,
    )

    // Array containing all ids that has a control but is no longer in the data set (i.e. removed rows)
    const removedIds: string[] = currentIds.filter(
      (id) => dataRowIds.indexOf(id) === -1,
    )

    // Register new controls for added rows
    if (newIds.length) {
      newIds.forEach((id) => {
        const ctrl = this.rowSelectors.registerControl(
          id,
          new UntypedFormControl(false),
        )
        if (ctrl.disabled) ctrl.enable()
      })
    }

    // Set already registered controls to disabled for removed rows
    if (removedIds.length)
      removedIds.forEach((id) => this.rowSelectors.get(id)?.disable())

    return newIds.length > 0 || removedIds.length > 0
  }

  /**
   * @internal
   * Returns all enabled values unless all rows are disabled.
   */
  get rowSelectorsValue(): any {
    return this.rowSelectors.enabled ? this.rowSelectors.value : {}
  }

  toggleSortOrderWithSpace(event: any, column: TableColumn<T>) {
    if (column.sortable) {
      event.preventDefault()
      this.toggleSortOrder(column)
    }
  }

  /**
   * @internal
   * Switches sorting order between ascending and descending order for a column.
   * @param column the column to sort rows after.
   */
  toggleSortOrder(column: TableColumn<T>) {
    // check if the table is already sorted by another column than the one provided
    const currentlyOrderedBy = this.tableColumns?.find(
      (el) => el !== column && el.order !== undefined,
    )
    if (currentlyOrderedBy) delete currentlyOrderedBy.order
    column.order = column.order === 'desc' ? 'asc' : 'desc'
    this.sortItemsBy(column)
  }

  /** If sortable, reorders the table data using the specified column as ordering attribute. */
  sortItemsBy(column: TableColumn<T>): TableRow[] | undefined {
    if (!column.sortable) return
    // emit re-order event
    this.ngvOrderBy.emit({ property: column.property, order: column.order })
    // if local sort is allowed, reorder data
    if (!this.allowLocalSort || !this.tableData) return
    return this.tableData.sort(
      column.order === 'desc'
        ? orderByDescending(column.property)
        : orderByAscending(column.property),
    )
  }

  /**
   * @internal
   * Emits row data for what row was clicked if defaultEmit is allowed.
   */
  propagateItemClick(item: any, preventDefaultEmit?: boolean) {
    if (!preventDefaultEmit) this.ngvRowClick.emit(item)

    if (this.expandable && item[this.subItemsProp]) {
      this.toggleRowToExpand(item[this.rowId])
    }
  }

  getAriaLabel(column: TableColumn<T>): string | undefined {
    const sortOrder =
      column.order === 'asc'
        ? this.ariaLabelsOrderBy?.desc
        : this.ariaLabelsOrderBy?.asc
    if (!sortOrder) return // no aria labels defined
    return column.ariaLabelSortable?.replace('{{sortOrder}}', sortOrder)
  }

  private toggleRowToExpand(id: string): void {
    const row = this.rowSelectors.get(id)
    row?.setValue(!row.value)
  }
}
