import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  ViewContainerRef,
} from '@angular/core'
import {
  distinctUntilChanged,
  from,
  OperatorFunction,
  Subject,
  Subscription,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs'

import { Option, OptionBase } from '@sebgroup/green-angular/src/v-angular/core'
import { NggvInputComponent } from '@sebgroup/green-angular/src/v-angular/input'
import { NggvDropdownComponent } from '../dropdown.component'
import { NggvTypeaheadDropdownListComponent } from '../typeahead/typeahead-dropdown-list/typeahead-dropdown-list.component'
import { NggvTypeaheadInputComponent } from './typeahead-input/typeahead-input.component'

@Directive({
  selector: 'nggv-input[nggvTypeahead], nggv-dropdown[nggvTypeahead]',
  standalone: true,
})
export class NggvTypeaheadDirective<
    K = string | null | undefined,
    V = string | null | undefined,
    T extends Option<K, V> = Option<K, V>,
  >
  implements OnInit, OnDestroy
{
  /** Function that filter the inputvalue */
  @Input() set nggvTypeahead(value: OperatorFunction<string, T[]> | undefined) {
    this.typeaheadFunction = value

    // If inputsubscription already exists, unsubscribe and subscribe again
    if (this.inputSubscription$) {
      this.inputSubscription$?.unsubscribe()
      this.inputSubscription$ = undefined
      this.handleInputChanges()
    }
  }

  /** Formats each item that is displayed as an option. Only applies format if the option if it implement Option interface. */
  @Input() resultFormatter?: (option: OptionBase<any>) => string

  /** Formats the selected item in the input when dropdown is opened. If no function is provided, it will display the value of the selected objects label property */
  @Input() selectedFormatter?: (selected: OptionBase<any>) => string

  /** Allow option to be unselected in the dropdown even if it is required. Defaults to true */
  @Input() allowUnselect = true

  /** Custom label for the unselect option */
  @Input() unselectLabel?: string

  /** Custom label for the empty option */
  @Input() emptyOptionLabel?: string

  /** Emits the entered string the user has written in the input */
  @Output() filterPhraseChange = new EventEmitter<string>()

  /** Forward text inputs to apply the filter function*/
  @HostListener('nggvInput', ['$event']) onNggvInput(event: any) {
    this.inputValue$.next(event)
  }

  /** Helper to the determine if the host is nggv-drodpown or nggv-input*/
  get hostIsDropdown() {
    return !!this.hostDropdown
  }

  /** Predefined options */
  get defaultNullishOption(): OptionBase<any> {
    return { key: null, label: this.unselectLabel || '\u00A0' }
  }

  get emptyOption(): OptionBase<any> {
    return {
      key: null,
      label: this.emptyOptionLabel || 'label.nomatchingoptions',
      disabled: true,
    }
  }

  /** Name of the component. nggv-dropdown if NggvDropdownComponent or nggv-input if NggvInputComponent */
  get localName() {
    return this.element.nativeElement.localName
  }

  dropdownListComponent!: ComponentRef<NggvTypeaheadDropdownListComponent>
  inputComponent!: ComponentRef<NggvTypeaheadInputComponent>

  private typeaheadFunction?: OperatorFunction<string, T[]>
  private inputValue$ = new Subject<any>()
  private inputSubscription$?: Subscription
  private onDestroy$ = new Subject<boolean>()

  constructor(
    private viewContainerRef: ViewContainerRef,
    private element: ElementRef,
    @Optional() @Host() private hostDropdown: NggvDropdownComponent,
    @Optional() @Host() private hostInput: NggvInputComponent,
  ) {}

  ngOnInit() {
    this.handleInputChanges()

    if (this.hostIsDropdown) this.createInput()
    else this.createDropdownList()
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
  }

  /**
   * @internal
   * Core functionality of typeahead. Emits input, then filters the result based on the supplied function
   * If directive is applied on nggv-input, manually show or hide options in the list.
   * If directive is applied on nggv-dropdown, let the dropdown itself choose when to open or close
   */
  private handleInputChanges() {
    this.inputSubscription$ = this.inputValue$
      .pipe(
        takeUntil(this.onDestroy$),
        distinctUntilChanged(),
        tap((inputValue) => this.filterPhraseChange.emit(inputValue)),
        this.typeaheadFunction ? this.typeaheadFunction : () => from([]),
        withLatestFrom(this.inputValue$),
      )
      .subscribe(([filteredValues, input]) =>
        this.setOptions(filteredValues, input),
      )

    // Trigger the pipe when this function have been called
    this.inputValue$.next('')
  }

  /**
   * @internal
   * Creates a nggv-input if the host itself is not a text-input
   * Set styles to not display the input when closed
   * Trigger filtering when changes occur in the field
   * */
  private createInput() {
    // Create the input component
    this.inputComponent = this.viewContainerRef.createComponent(
      NggvTypeaheadInputComponent,
    )
    // Forward necessary info to component
    this.inputComponent.setInput('hostComponent', this.hostDropdown)
    this.inputComponent.setInput('selectedFormatter', this.selectedFormatter)
    this.inputComponent.setInput('resultFormatter', this.resultFormatter)
    // Listen to value changes
    this.inputComponent.instance.nggvInput
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((inputValue) => this.inputValue$.next(inputValue))
  }

  /** @internal Creates a nggv-dropdown-list if the host itself is a nggv-input */
  private createDropdownList() {
    this.dropdownListComponent = this.viewContainerRef.createComponent(
      NggvTypeaheadDropdownListComponent,
    )
    this.dropdownListComponent.setInput('hostComponent', this.hostInput)
  }

  /**
   * @internal Sets the options the user can select.
   * If the host is a nggv-dropdown, utilize the dropdown itself to display the options
   * If the host is a nggv-input, use the created nggv-dropdown-list to displaye the options
   * @param filteredValues The options to display in the dropdown
   * @param emptyInput If the input is empty
   */
  private setOptions(filteredValues: T[], input: string) {
    if (!filteredValues) return
    // Conditionally add empty or nullish option if it's allowed, the input is empty and does not already contain nullish
    const allowNullish =
      this.allowUnselect &&
      !input &&
      !(
        Object.keys(filteredValues[0] ?? {}).includes('key') &&
        filteredValues[0]?.key == null
      )
    if (filteredValues.length === 0) {
      filteredValues = [this.emptyOption]
    } else if (allowNullish) {
      filteredValues = [this.defaultNullishOption].concat(filteredValues)
    }

    if (this.hostIsDropdown) {
      // Add nullish option when no input is written (or when dropdown is epanded and has a selection)
      this.hostDropdown.allowControlNullishOption = false
      this.hostDropdown.options = this.formatOptions(filteredValues)
      this.hostDropdown.textToHighlight = `${input || ''}`
      this.hostDropdown.onlyHandleDistinctChanges = false
      this.hostDropdown.selectWithSpace = false
      this.hostDropdown.detectChanges()
      return
    }

    if (!this.hostIsDropdown) {
      this.dropdownListComponent.setInput(
        'options',
        this.formatOptions(filteredValues),
      )
      this.dropdownListComponent.setInput('textToHighlight', `${input || ''}`)
    }
  }

  /**
   * @internal Formats the available options to display in the dropdown list
   * @param options The selected value
   * @returns The formatted value
   */
  private formatOptions(options: T[]): OptionBase<any>[] {
    if (!options) return []
    if (!this.resultFormatter) return options
    return options.map((value) =>
      value?.label ? this.resultFormatter?.(value) : value,
    )
  }
}
