import {
  Component,
  Input,
  forwardRef,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewChecked,
} from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { IRadioGroupItem, randomId } from '@sebgroup/extract'

@Component({
  selector: 'ngg-radio-group',
  templateUrl: './radio-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NggRadioGroupComponent),
      multi: true,
    },
  ],
})
export class NggRadioGroupComponent
  implements ControlValueAccessor, AfterViewChecked
{
  private _list: Array<IRadioGroupItem> = []
  private _selectedItem: IRadioGroupItem | null = null
  private isItemFocused = false

  displayList: Array<IRadioGroupItem> = []

  @ViewChildren('radioRefs') radioRefs: QueryList<ElementRef> | undefined =
    undefined
  /** Radio button group name */
  @Input() name: string = randomId()
  /** Container class name */
  @Input() classNames?: string
  /** Flag whether the component is disabled. Default is `false`. */
  @Input() disabled?: boolean = false
  /** Flag whether the component is condensed. Default is `false`. */
  @Input() condensed?: boolean = false
  /** Flag whether the component is inline. Default is `false`. */
  @Input() inline?: boolean = false
  /** List of option items */
  @Input()
  set list(value: Array<IRadioGroupItem>) {
    this._list = value
    this.generateDisplayList()
  }
  get list(): Array<IRadioGroupItem> {
    return this._list
  }

  set selectedItem(item: IRadioGroupItem | null) {
    if (item?.value !== this._selectedItem?.value) {
      this._selectedItem = item

      this.onChangeCallback && this.onChangeCallback(item)
      this.onTouchedCallback && this.onTouchedCallback()

      this.generateDisplayList()
    }
  }
  get selectedItem(): IRadioGroupItem | null {
    return this._selectedItem
  }

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback?: () => void
  private onChangeCallback?: (_: any) => void

  ngAfterViewChecked(): void {
    this.focusCurrentItem()
  }

  writeValue(value: IRadioGroupItem): void {
    this.selectedItem = value
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn
  }

  handleItemOnClick(item: IRadioGroupItem): void {
    this.isItemFocused = false
    this.selectedItem = item
  }

  private focusCurrentItem(): void {
    if (this.isItemFocused || this.list?.length === 0) return

    const currentFocused: number = this.list.findIndex(
      (item: IRadioGroupItem) => item.value === this.selectedItem?.value
    )

    if (currentFocused > -1 && this.radioRefs?.toArray()[currentFocused]) {
      setTimeout(() => {
        this.radioRefs?.toArray()[currentFocused].nativeElement.focus()
        this.isItemFocused = true
      }, 0)
    }
  }

  private generateDisplayList(): void {
    this.displayList = this.list
      ?.filter((item: IRadioGroupItem) => item.label && item.value)
      .map((item: IRadioGroupItem) => {
        const id: string = randomId()
        const selected: boolean = item.value === this.selectedItem?.value
        const customClassNames: Array<string> = ['radio-group-item']

        if (selected) {
          customClassNames.push('selected')
        }

        return { ...item, id, selected, customClassNames }
      })
  }
}
