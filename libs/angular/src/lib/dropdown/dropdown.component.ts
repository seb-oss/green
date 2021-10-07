import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'ngg-dropdown',
  template: `
    <div nggPopover [config]='config'>
      <button type='button' nggPopoverTrigger [control]='control'>
        {{control.value}}
      </button>
      <ul nggPopoverElement tabindex='-1' autofocus>
        <li *ngFor='let option of options; let i = index'
            [nggPopoverOption]='option.value'
            [index]='i'
        >{{option.key}}</li>
      </ul>
    </div>
  `,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreenDropdownComponent {
  get control(): AbstractControl {
    return <AbstractControl>this._control;
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

  private _options: Array<any> = [];

  private _control?: AbstractControl;

  private _config?: any = {};
}
