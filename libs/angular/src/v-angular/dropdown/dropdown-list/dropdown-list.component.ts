import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChildren,
} from '@angular/core'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'
import { filter, fromEvent, Subject, Subscription, takeUntil } from 'rxjs'
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
  standalone: false,
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

  @HostBinding('attr.data-position') get positionAttr() {
    return this.dropdownPosition
  }

  @Input() options!: any[]

  @Input() textToHighlight?: string

  /**
   * Used to control if "selectedValueChanged" only should emit distinct changes, or each time a value is selected
   * When true, value is not emitted if there's no distinct change
   * When false, value is emitted every time an option is selected
   * */
  @Input() onlyEmitDistinctChanges = true

  /**
   * Used to control if the dropdown list should select the current active element, when Space is pressed on the keyboard.
   * Primary usage is for typeahead, where the should be able to write a filter query containing spaces,
   * but not select the current active element with Space.
   */
  @Input() selectWithSpace = true

  /**
   * When true, the dropdown will automatically choose to open above or below the input
   * based on available space in the viewport, and will scale its height to fit if needed.
   */
  @Input() dynamicPosition = false

  @Output() selectedValueChanged = new EventEmitter<any>()

  /**
   * Emitted when the dropdown is closed by user interactions (e.g. Escape or Tab) or other immediate close triggers.
   * This notifies external consumers that the dropdown was closed as a result of a user action.
   */
  @Output() closed = new EventEmitter<void>()

  /**
   * Emitted after the dropdown has fully closed and internal cleanup has been performed.
   * Use this for post-close tasks that must run after subscriptions are torn down and resources released.
   */
  @Output() afterClose = new EventEmitter<void>()

  /** The current active option based on numeric index. */
  public activeIndex = -1

  scope: string | undefined

  // Indicates whether the dropdown list should be displayed below ('bottom') or above ('top') the input, based on available space.
  dropdownPosition: 'bottom' | 'top' = 'bottom'

  private dropdownUtils: DropdownUtils<string | null, string, any> =
    new DropdownUtils<string | null, string, any>()
  private _expanded = false
  private closed$ = new Subject<boolean>()
  public selectedValue?: Option<string, any>

  /** Subscribe if dropdown expanded to listen to click outside to close dropdown. */
  protected onClickSubscription: Subscription | undefined
  /** Subscribe to to keyboard events only when list is open. */
  private onKeyDownSubscription: Subscription | undefined
  private onKeyUpSubscription: Subscription | undefined
  private _flattenedOptions: any[] = []

  constructor(
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    private renderer: Renderer2,
    private elRef: ElementRef,
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

    if (expanded) {
      if (this.dynamicPosition) {
        this.setDropdownPosition()
      }
      this.refreshSelectedOption()
      this.subscribeToKeyUpEvents()
      this.subscribeToKeyDownEvents()
    } else {
      this.closed$.next(true)
      this.afterClose.emit()
      this.onClickSubscription?.unsubscribe()
      this.onKeyDownSubscription?.unsubscribe()
      this.onKeyUpSubscription?.unsubscribe()
      // to trigger gc removal
      this.onKeyDownSubscription = undefined
      this.onKeyUpSubscription = undefined
    }
  }

  /**
   * @internal
   */
  refreshSelectedOption() {
    this._flattenedOptions = this.dropdownUtils.flattenOptions(
      this.options,
      !this.optionContentTpl,
    )
    this.activeIndex = this.getActiveIndex()
    this.state = this._flattenedOptions[this.activeIndex]
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
      const selectedIndex = this._flattenedOptions.findIndex(
        (option) =>
          option.key != null && option.key === this.selectedValue?.key,
      )
      if (selectedIndex > -1) return selectedIndex
    }
    return this._flattenedOptions.findIndex((option) => option.key != null)
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
  onKeyDown(event: KeyboardEvent) {
    // If space is pressed but it should not select an option, do nothing
    if (event.key === ' ' && !this.selectWithSpace) return true
    switch (event.key) {
      case ' ': // Space - placed here to ensure the dropdown-list closes after selecting using "Space"
      case 'ArrowUp': // Disable scrolling up
      case 'ArrowDown': // Disable scrolling down
        event.preventDefault()
        event.stopPropagation()
        return false
      case 'Enter': // Disable form submission and select the currently active value
        event.preventDefault()
        event.stopPropagation()
        if (this.expanded) {
          const option = this._flattenedOptions[this.activeIndex]
          this.updateState(option, event)
        }
        return false
      case 'Tab': // trigger dropdown to close (for typeahead)
        event.preventDefault()
        event.stopPropagation()
        if (this.expanded) {
          this.setExpanded(false)
          this.closed.emit()
        }
        return false
    }
    return true
  }

  /**
   * @internal
   * Enter toggles the dropdown, home, end, and, arrows change the index.
   * Space selects the currently active option if `selectWithSpace` is true.
   * @param event fired containing which key was released.
   */
  onKeyUp(event: KeyboardEvent) {
    // If space is pressed but it should not select an option, do nothing
    if (!this.expanded || (event.key === ' ' && !this.selectWithSpace)) return
    let option

    switch (event.key) {
      case 'Escape':
        this.setExpanded(false)
        this.closed.emit()
        break

      case ' ': // Space - select the currently chosen value
        option = this._flattenedOptions[this.activeIndex]
        this.updateState(option, event)
        break

      case 'Home': // Move to the first option
        this.activeIndex = 0

        option = this._flattenedOptions[this.activeIndex]
        this.state = option
        this.scrollToResult(option, true)
        break

      case 'ArrowUp': // Move up one step to the previous option
        if (this.activeIndex > 0) this.activeIndex--
        else if (this.activeIndex === 0)
          this.activeIndex = this._flattenedOptions.length - 1

        option = this._flattenedOptions[this.activeIndex]
        this.state = option
        this.scrollToResult(option, true)
        break

      case 'ArrowDown': // Move down one step to the next option
        if (this._flattenedOptions.length > this.activeIndex + 1)
          this.activeIndex++
        else if (this.activeIndex === this._flattenedOptions.length - 1)
          this.activeIndex = 0

        option = this._flattenedOptions[this.activeIndex]
        this.state = option
        this.scrollToResult(option, true)
        break

      case 'End': // Move to the last options
        this.activeIndex = this._flattenedOptions.length - 1

        option = this._flattenedOptions[this.activeIndex]
        this.state = option
        this.scrollToResult(option, true)
        break
    }
  }

  /** @internal */
  subscribeToKeyUpEvents() {
    this.onKeyUpSubscription = fromEvent<KeyboardEvent>(document, 'keyup')
      .pipe(
        filter(() => this.expanded),
        takeUntil(this.closed$),
      )
      .subscribe((event) => this.onKeyUp(event))
  }

  /** @internal */
  subscribeToKeyDownEvents() {
    this.onKeyDownSubscription = fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        filter(() => this.expanded),
        takeUntil(this.closed$),
      )
      .subscribe((event) => this.onKeyDown(event))
  }

  /**
   * Scrolls focused result into view with a specified offset.
   * @param key the result index which to scroll to.
   */
  scrollToResult(option: any, focusElement?: boolean) {
    if (!this.optionRefs || !option) return
    const optionRef = this.optionRefs.find(
      (li) => li.nativeElement.id === this.id + '-option-' + (option.id ?? option.key),
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
        if (delta) {
          window.scrollBy(0, delta > 0 ? -offset : offset)
        }
        if (focusElement) {
          optionRef.nativeElement.focus()
        }
      }, 0)
    }
  }

  /**
   * Calculates available space above and below the dropdown input,
   * sets dropdownPosition ('top' or 'bottom') accordingly,
   * and dynamically sets the max-height of the dropdown list to fit the viewport.
   */
  setDropdownPosition() {
    const dropdown = this.elRef.nativeElement
    // dropdown trigger
    const dropdownInput = dropdown.parentElement
    const dropdownList = dropdown.querySelector('ul[role="listbox"]')
    const rect = dropdownInput.getBoundingClientRect()

    const viewportHeight = window.innerHeight
    const spaceBelow = viewportHeight - rect.bottom
    const spaceAbove = rect.top

    const MARGIN = 10
    const MIN_HEIGHT = 100
    const DROPDOWN_MAX_HEIGHT = 500
    let maxDropdownHeight

    if (spaceBelow >= DROPDOWN_MAX_HEIGHT) {
      this.dropdownPosition = 'bottom'
      maxDropdownHeight = DROPDOWN_MAX_HEIGHT
    } else if (spaceAbove >= DROPDOWN_MAX_HEIGHT) {
      this.dropdownPosition = 'top'
      maxDropdownHeight = DROPDOWN_MAX_HEIGHT
    } else if (spaceBelow > spaceAbove) {
      this.dropdownPosition = 'bottom'
      maxDropdownHeight = Math.max(spaceBelow - MARGIN, MIN_HEIGHT) // 10px margin, minimum height 100px
    } else {
      this.dropdownPosition = 'top'
      maxDropdownHeight = Math.max(spaceAbove - MARGIN, MIN_HEIGHT) // 10px margin, minimum height 100px
    }

    this.renderer.setStyle(dropdownList, 'max-height', `${maxDropdownHeight}px`)
  }
}
