import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnChanges,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import {
  IDisplayToggleSelector,
  IToggleSelector,
  randomName,
  ToggleSelectorInputType,
  ToggleSelectorType,
} from '@sebgroup/extract'

@Component({
  selector: 'ngg-toggle-selector',
  templateUrl: './toggle-selector.component.html',
  styleUrls: ['./toggle-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NggToggleSelectorComponent),
      multi: true,
    },
  ],
})
export class NggToggleSelectorComponent
  implements ControlValueAccessor, OnChanges
{
  /** List of option items for the component */
  @Input() list: Array<IToggleSelector> = []
  /** Option item control name */
  @Input() name?: string = randomName('name')
  /** Flag whether the component is allowed to select multiple options */
  @Input() multi?: boolean = false
  /** Flag whether the component is disabled */
  @Input() disabled?: boolean = false
  /** Error message */
  @Input() errorMessage?: string

  value: ToggleSelectorType = []

  /**
   * Used to append a class to style the container of each input group
   * When the element is focused or remove it when it get's blured
   */
  focusedItem?: number | null

  /**  Array that will be used to render */
  displayList: Array<IDisplayToggleSelector> = []

  /**
   * Placeholders for the callbacks which are later provided
   * by the Control Value Accessor
   */
  private onTouchedCallback?: () => void
  private onChangeCallback?: (_: any) => void

  //eslint-disable-next-line
  constructor() {}

  ngOnChanges(): void {
    this.generateCheckedItems()
  }

  writeValue(value: ToggleSelectorType): void {
    this.value = value
    this.generateCheckedItems()
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn
  }

  /**
   * Click event on the input container
   * @param event Click event
   * @param idx Index of the item clicked
   */
  handleItemOnClick(event: Event, idx: number): void {
    event.preventDefault()

    // return if disabled
    if (this.list[idx].disabled) {
      return
    }

    const item: IToggleSelector = this.list[idx]

    if (!this.multi) {
      if (item && (this.value as IToggleSelector)?.value !== item.value) {
        this.value = item
      }
    } else {
      if (
        Array.isArray(this.value) &&
        this.value.some((x) => x.value === item.value)
      ) {
        this.value.splice(
          this.value.findIndex((x) => x.value === item.value),
          1
        )
      } else {
        if (this.value) {
          if (Array.isArray(this.value)) {
            this.value.push(item)
          } else {
            this.value = [this.value, item]
          }
        } else {
          this.value = [item]
        }
      }
    }

    // call callbacks
    this.onChangeCallback && this.onChangeCallback(this.value)
    this.onTouchedCallback && this.onTouchedCallback()

    // generate checked items to display
    this.generateCheckedItems()
  }

  /** generate list of toggle selector with selected option */
  generateCheckedItems(): void {
    this.displayList =
      this.list &&
      this.list.map((e) => {
        if (this.multi) {
          let selected = false

          if (Array.isArray(this.value)) {
            selected = !!this.value.find(
              (element: IToggleSelector) => element.value === e.value
            )
          }

          return { optionItem: e, selected } as IDisplayToggleSelector
        } else {
          const selected: boolean =
            (this.value as IToggleSelector)?.value === e.value
          return { optionItem: e, selected } as IDisplayToggleSelector
        }
      })
  }

  /** focus input element */
  focus(idx: number) {
    this.focusedItem = idx
  }

  /** blur input element */
  blur() {
    this.focusedItem = null
  }

  /** defines how to track changes for items in the iterable. */
  trackByFn = (index: number): number => index

  /** get the type attribute that needs to be rendered */
  get inputType(): ToggleSelectorInputType {
    return this.multi ? 'checkbox' : 'radio'
  }
}
