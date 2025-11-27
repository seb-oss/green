import { Component, HostBinding, Input } from '@angular/core'

import {
  calculateDegrees,
  ProgressCircleThemes,
  randomId,
} from '@sebgroup/extract'

@Component({
    selector: 'ngg-progress-circle',
    templateUrl: './progress-circle.component.html',
    standalone: false
})
export class NggProgressCircleComponent {
  @HostBinding('style.--start-value') private _startValue = '0deg'
  @HostBinding('style.--end-value') private _endValue = '0deg'

  /** id of the progress circle */
  @Input() id?: string = `${randomId()}-progress-circle`
  /** theme of the progress circle */
  @Input() theme: ProgressCircleThemes = 'warning'
  /** progress circle value in percentage */
  @Input() set value(val: number) {
    const degrees = `${calculateDegrees(val)}deg`
    this._endValue = degrees
    if (this.theme === 'disabled') {
      this._startValue = degrees
    }
  }
}
