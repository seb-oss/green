import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Self,
  SimpleChanges,
  TemplateRef,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'
import { fromEvent, Subscription } from 'rxjs'

import { NggvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'
import {
  DropdownUtils,
  Option,
  OptionBase,
  OptionGroup,
} from '@sebgroup/green-angular/src/v-angular/core'

/**
 * A dropdown allows the user to select an option from a list.
 * Dropdowns enables users to make a quick selection of the available options for a specific entry.
 * https://designlibrary.sebgroup.com/components/component-dropdown
 */
@Component({
    selector: 'nggv-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    standalone: false
})
export class NggvDropdownComponent<
    K = string | null | undefined,
    V = string | null | undefined,
    T extends Option<K, V> = Option<K, V>,
  >
  extends NggvBaseControlValueAccessorComponent
  implements OnDestroy, OnChanges
{
  /** Custom template for displaying options and groups. */
  @ContentChild('selectedTpl', { read: TemplateRef }) selectedContentTpl:
    | TemplateRef<OptionBase<T>>
    | undefined
  @ContentChild('optionTpl', { read: TemplateRef }) optionContentTpl:
    | TemplateRef<OptionBase<any>>
    | undefined
  @ContentChild('groupLabelTpl', { read: TemplateRef }) groupLabelTpl:
    | TemplateRef<OptionBase<any>>
    | undefined

  /**
   * Special property used for selecting DOM elements during automated UI testing.
   */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'dropdown'

  @HostBinding('class.small') get isSmall(): boolean {
    return this.size === 'small'
  }

  @HostBinding('class.large') get isLarge(): boolean {
    return this.size === 'large'
  }

  /**
   * Sets the displayed size of the dropdown.
   */
  @Input() size: 'small' | 'large' = 'large'

  /** Text shown before an option is selected. */
  @Input() placeholder?: string
  /** Specific value for aria-label. If not provided, label/labelTpl will be used. */
  @Input() ariaLabel?: string
  /** If the dropdown should close when scrolling the viewport. Default: false */
  @Input() closeOnScroll = false
  /** List of {@link Option} and {@link OptionGroup} listed when dropdown is expanded. */
  @Input() set options(value: OptionBase<T>[]) {
    // update options
    this._options = value
    // already has a null/undefined key
    const nullishOption = this.dropdownUtils
      .flattenOptions(value, false)
      .find((option) => option.key == null)
    // if the dropdown is optional, add a null value to deselect option
    if (!this.required && !nullishOption && this.allowControlNullishOption) {
      this._options = [this.defaultNullishOption].concat(this._options)
    }

    // set default value and emit if there is only one option
    if (value.length === 1 && this.required && this.selectOnSingleOption) {
      const onlyOption = this.dropdownUtils.flattenOptions(value, false)[0]
      this.updateModel(onlyOption)
      return
    }

    // don't update local state if we shouldn't control nullish value and we cant find the selected value amongst the options
    const matchingOption = this.dropdownUtils
      .flattenOptions(value, false)
      .find((option) => option.key == this.ngControl?.value)
    if (!this.allowControlNullishOption && !matchingOption) return

    // Update local state
    this.writeValue(this.ngControl?.value)
  }

  get options(): OptionBase<T>[] {
    return this._options
  }

  /** The additional amount to show when option is scrolled into view. */
  @Input() scrollOffset = 24

  /**
   * Allow this component to add/ remove nullish options based on wether the control is required or not
   * Defaults to true.
   */
  @Input() allowControlNullishOption = true

  /** Text to highlight in option */
  @Input() textToHighlight?: string

  /**
   * If only one option exists in options[], default is to select it.
   * This input can be used to alter that behaviour so it doesn't automatically
   * select a value if it's the only one.
   * Defaults to true.
   */
  @Input() selectOnSingleOption = true

  /**
   * Used to control if the dropdown list should select the current active element, when Space is pressed on the keyboard.
   * Primary usage is for typeahead, where the should be able to write a filter query containing spaces,
   * but not select the current active element with Space.
   */
  @Input() selectWithSpace = true

  /**
   * Used to determine which changes should be handled by the dropdown.
   * If set to false, all changes will be handled by the dropdown.
   * If set to true, only changes that are distinct from the current value will be handled.
   * Defaults to true.
   */
  @Input() onlyHandleDistinctChanges = true

  /**
   * Emits changes of the expanded state of the dropdown
   */
  @Output() expandedChange = new EventEmitter<boolean>()

  /** @internal nullish option. */
  get defaultNullishOption(): OptionBase<any> {
    return { key: null, label: this.placeholder ?? '\u00A0' }
  }

  /** The current expanded state of the dropdown options. */
  public expanded = false
  /** The current option selected based on numeric index. */
  public activeIndex = -1
  /** Subscribe if dropdown expanded to listen to click outside to close dropdown. */
  private onClickSubscription: Subscription | undefined
  /** Subscribe if dropdown expanded to listen to scroll outside to close dropdown. */
  private onScrollSubscription: Subscription | undefined

  public keyEvent: KeyboardEvent = {} as KeyboardEvent
  private _options: OptionBase<T>[] = []

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
    protected dropdownUtils: DropdownUtils<K, V, T>,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.required?.currentValue !== undefined) {
      const isRequired = changes.required.currentValue
      // remove nullish option
      const hasNullishOption =
        this.dropdownUtils.flattenOptions(this._options, false)[0]?.key == null
      // if required, remove nullish option
      if (isRequired && hasNullishOption && this.allowControlNullishOption) {
        this._options = this._options.slice(1)
        return
      }
      // if not required, add nullish option
      if (!isRequired && !hasNullishOption && this.allowControlNullishOption) {
        this._options = [this.defaultNullishOption].concat(this._options)
        return
      }
    }
  }

  ngOnDestroy(): void {
    this.onClickSubscription?.unsubscribe()
    this.onScrollSubscription?.unsubscribe()
  }

  /** @internal override to correctly set state from form value */
  writeValue(value: any): void {
    const options = this.dropdownUtils.flattenOptions(this._options, false)
    this.state = options.find((option) => option.key === value)
  }

  // ----------------------------------------------------------------------------
  // EVENTS
  // ----------------------------------------------------------------------------

  /** @internal */
  onSelectChange(option: T) {
    if (option.disabled) return
    this.updateModel(option)
    this.setExpanded(false)
  }

  // /**
  //  * @internal
  //  * Enter toggles the dropdown, home, end, and, arrows change the index.
  //  * @param event fired containing which key was released.
  //  */
  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.keyEvent = event
  }

  /**
   * Closes the dropdown on click outside.
   */
  subscribeToOutsideClickEvent() {
    this.onClickSubscription = fromEvent(document, 'click').subscribe({
      next: (event: Event) => {
        if (
          this.expanded &&
          !this.inputRef?.nativeElement.contains(event.target)
        ) {
          this.toggleDropdown()
          this.onClickSubscription?.unsubscribe()
        }
      },
    })
  }
  subscribeToOutsideScrollEvent() {
    this.onScrollSubscription = fromEvent(document, 'scroll').subscribe({
      next: (event: Event) => {
        if (
          this.expanded &&
          !this.inputRef?.nativeElement.contains(event.target)
        ) {
          this.toggleDropdown()
          this.onScrollSubscription?.unsubscribe()
        }
      },
    })
  }

  // ----------------------------------------------------------------------------
  // HELPERS
  // ----------------------------------------------------------------------------

  /**
   * Set the dropdown value to given option.
   * @param value the dropdown option to select.
   */
  private updateModel(value: T) {
    this.state = value
    this.onChange(value.key)
  }

  /** Toggle the expanded state of the dropdown options. */
  toggleDropdown() {
    this.setExpanded(!this.expanded)
    this.cdr.detectChanges()
  }

  /**
   * Set the expanded state of the dropdown options. If true the options are shown below the field.
   * Activate on click event to be able to close dropdown on click outside.
   * @param state the expanded state which to set.
   */
  setExpanded(state = true) {
    this.expanded = state
    this.expandedChange.emit(this.expanded)
    if (this.expanded) {
      this.subscribeToOutsideClickEvent()
      if (this.closeOnScroll) {
        this.subscribeToOutsideScrollEvent()
      }
    }
    if (!this.expanded) this.onTouched()
  }

  /* TYPE CASTS */

  /**
   * Typecast anything to an {@link Option}.
   * @param option the object to typecast.
   */
  castOption(option: any): T {
    return option
  }

  /**
   * Typecast anything to an {@link OptionGroup}.
   * @param group the object to typecast.
   */
  castGroup(group: any): OptionGroup<T> {
    return group
  }

  /* TYPE CHECKS */

  /**
   * Returns true if argument is an {@link Option}.
   * @param option the object to check.
   */
  isOption(option: OptionBase<T>): option is OptionGroup<T> {
    return !('options' in option)
  }
}
