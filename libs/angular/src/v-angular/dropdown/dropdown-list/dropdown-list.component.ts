import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChildren,
} from '@angular/core'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'
import { Subject, Subscription } from 'rxjs'
import scrollIntoView from 'scroll-into-view-if-needed'

import {
  DropdownUtils,
  Option,
  OptionBase,
} from '@sebgroup/green-angular/src/v-angular/core'

@Component({
  selector: 'nggv-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
})
export class NggvDropdownListComponent implements OnInit, OnChanges {
  @Input() set expanded(state: boolean) {
    this.setExpanded(state)
  }
  get expanded(): boolean {
    return this._expanded
  }
  @Input() state: any

  /** The additional amount to show when option is scrolled into view. */
  @Input() scrollOffset = 24

  @Input() optionContentTpl: TemplateRef<OptionBase<any>> | undefined
  @Input() groupLabelTpl: TemplateRef<OptionBase<any>> | undefined

  /** @internal List of references to the option elements. */
  @ViewChildren('optionRefs') optionRefs:
    | QueryList<ElementRef<HTMLLIElement>>
    | undefined

  /** Id of the host element and is accessible by the children, automatically generated if not provided. */
  @HostBinding('attr.id') @Input() id = (window as any).nggv?.nextId()

  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'dropdown'

  @Input() options!: any[]

  @Input() textToHighlight?: string

  /**
   * Used to control if "selectedValueChanged" only should emit distinct changes, or each time a value is selected
   * When true, value is not emitted if there's no distinct change
   * When false, value is emitted every time an option is selected
   * */
  @Input() onlyEmitDistinctChanges = true

  @Output() selectedValueChanged = new EventEmitter<any>()

  @Output() closed = new EventEmitter<void>()

  /** The current active option based on numeric index. */
  public activeIndex = -1

  scope: string | undefined

  private dropdownUtils: DropdownUtils<string | null, string, any> =
    new DropdownUtils<string | null, string, any>()
  private _expanded = false
  private closed$ = new Subject<boolean>()
  public selectedValue?: Option<string, any>

  /** Subscribe if dropdown expanded to listen to click outside to close dropdown. */
  protected onClickSubscription: Subscription | undefined

  constructor(
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
  ) {
    if (this.translocoScope) this.scope = this.translocoScope.toString()
  }

  ngOnInit(): void {
    if (this.state)
      this.activeIndex = this.options.findIndex(
        (option) => option.key === this.state.key,
      )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.state && !changes.state.firstChange)
      this.selectedValue = changes.state.currentValue
    if (!!changes.options?.currentValue?.length && this.expanded)
      this.refreshSelectedOption()
  }

  /**
   * Returns true if argument is an {@link OptionGroup}.
   * @param option the object to check.
   */
  isGroup(option: any): boolean {
    return 'options' in option
  }

  /** @internal */
  updateState(option: any, event: Event) {
    if (option.disabled) return

    if (
      !this.onlyEmitDistinctChanges ||
      !this.dropdownUtils.deepEqual(this.selectedValue, option)
    ) {
      this.selectedValue = option
      this.state = option
      this.selectedValueChanged.emit(option)
    }

    this.setExpanded(false)
    event.stopPropagation()
  }

  /**
   * @internal
   */
  setExpanded(expanded = true) {
    // update expanded state
    this._expanded = expanded

    if (expanded) this.refreshSelectedOption()
    else {
      this.closed$.next(true)
      this.onClickSubscription?.unsubscribe()
    }
  }

  /**
   * @internal
   */
  refreshSelectedOption() {
    const options = this.dropdownUtils.flattenOptions(
      this.options,
      !this.optionContentTpl,
    )
    this.activeIndex = this.getActiveIndex()
    this.state = options[this.activeIndex]
    this.scrollToResult(this.state)
  }

  /**
   * @internal
   * @returns The active index (number) if option is found, -1 otherwise.
   * - If a selectedValue exists that's not nullish and that options is found, return that index
   * - Else, return first non nullish index
   * - If none of the above criterias are met, -1 are returned
   */
  getActiveIndex(): number {
    if (!!this.selectedValue && this.selectedValue?.key != null) {
      const selectedIndex = this.dropdownUtils
        .flattenOptions(this.options, !this.optionContentTpl)
        .findIndex(
          (option) =>
            option.key != null && option.key === this.selectedValue?.key,
        )
      if (selectedIndex > -1) return selectedIndex
    }
    return this.dropdownUtils
      .flattenOptions(this.options, !this.optionContentTpl)
      .findIndex((option) => option.key != null)
  }

  /**
   * @internal
   * evaluates wether the HTML element overflows
   * @param elem The HTMLElement to evaluate
   * */
  isOverflow(elem: HTMLElement) {
    return elem.offsetWidth < elem.scrollWidth
  }

  /**
   * Typecast anything to an {@link OptionGroup}.
   * @param group the object to typecast.
   */
  castGroup(group: any): any {
    return group
  }

  /**
   * @internal
   * Disables default events.
   * @param event fired containing which key was pressed.
   */
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter': //  Disable form submission
      case 'ArrowUp': // Disable scrolling up
      case 'ArrowDown': // Disable scrolling down
        event.preventDefault()
        event.stopPropagation()
        return false
    }
    return true
  }

  /**
   * @internal
   * Enter toggles the dropdown, home, end, and, arrows change the index.
   * @param event fired containing which key was released.
   */
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (!this.expanded) return
    const options = this.dropdownUtils.flattenOptions(
      this.options,
      !this.optionContentTpl,
    )
    let option

    switch (event.key) {
      case 'Tab':
      case 'Escape':
        this.setExpanded(false)
        this.closed.emit()
        break
      case 'Space': // Select the currently chosen value
      case 'Enter': // Select the currently chosen value
        option = options[this.activeIndex]
        this.updateState(option, event)
        break

      case 'Home': // Move to the first option
        this.activeIndex = 0

        option = options[this.activeIndex]
        this.state = option
        this.scrollToResult(option)
        break

      case 'ArrowUp': // Move up one step to the previous option
        if (this.activeIndex > 0) this.activeIndex--
        else if (this.activeIndex === 0) this.activeIndex = options.length - 1

        option = options[this.activeIndex]
        this.state = option
        this.scrollToResult(option)
        break

      case 'ArrowDown': // Move down one step to the next option
        if (options.length > this.activeIndex + 1) this.activeIndex++
        else if (this.activeIndex === options.length - 1) this.activeIndex = 0

        option = options[this.activeIndex]
        this.state = option
        this.scrollToResult(option)
        break

      case 'End': // Move to the last options
        this.activeIndex = options.length - 1

        option = options[this.activeIndex]
        this.state = option
        this.scrollToResult(option)
        break
    }
  }

  /**
   * Scrolls focused result into view with a specified offset.
   * @param key the result index which to scroll to.
   */
  scrollToResult(option: any) {
    if (!this.optionRefs || !option) return
    const optionRef = this.optionRefs.find(
      (li) => li.nativeElement.id === this.id + '-option-' + option.key,
    )
    const offset = this.scrollOffset
    if (optionRef) {
      let delta = window.scrollY || document.documentElement.scrollTop

      // The list seems not to be visible at the time of scrolling, but this setTimeout "hack" makes it work...
      setTimeout(() => {
        scrollIntoView(optionRef.nativeElement, {
          scrollMode: 'if-needed',
          block: 'nearest',
        })

        delta -= window.scrollY || document.documentElement.scrollTop
        if (delta) window.scrollBy(0, delta > 0 ? -offset : offset)
      }, 0)
    }
  }
}
