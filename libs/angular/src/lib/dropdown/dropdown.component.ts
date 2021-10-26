import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'ngg-dropdown',
  template: `
    <div nggPopover [config]="config">
      <button
        type="button"
        nggPopoverTrigger
        [control]="control"
        [options]="options"
      >
        {{ control.value }}
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
          >
            {{ option.key }}
          </li>
        </ul>
      </div>
    </div>
  `,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NggDropdownComponent {
  get control(): AbstractControl {
    return <AbstractControl>this._control
  }

  @Input() set control(value: AbstractControl) {
    this._control = value
  }
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

  private _options: Array<any> = []

  private _control?: AbstractControl

  private _config?: any = {}
}
