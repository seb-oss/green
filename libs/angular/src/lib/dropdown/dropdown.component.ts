import { Component, Input } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ngg-dropdown',
  template: `
    <div nggPopover [config]="config">
      <button type="button" nggPopoverTrigger>
        {{ value }}
      </button>
      <div nggPopoverElement tabindex="-1" autofocus>
        <button class="close m-4 m-sm-2 d-block d-sm-none ">
          <span class="sr-only">Close</span>
        </button>
        <ul role="listbox">
          <li
            *ngFor="let option of options; let i = index"
            [nggPopoverOption]="option.value"
            [index]="i"
            [selected]="value === option.value"
            (selectedChanged)="select($event)"
          >
            {{ option.key }}
          </li>
        </ul>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NggDropdownComponent,
      multi: true,
    },
  ],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NggDropdownComponent implements ControlValueAccessor {
  get options(): Array<any> {
    return this._options
  }

  @Input() set options(value: Array<any>) {
    this._options = value
  }
  get config(): any {
    return this._config
  }
  @Input() set config(value: any) {
    this._config = value
  }

  value: any
  onChangeFn: any
  onTouchedFn: any

  private _options: Array<any> = []

  private _config?: any = {}

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  select(value: any) {
    this.onChangeFn(value)
    this.value = value
  }
}
