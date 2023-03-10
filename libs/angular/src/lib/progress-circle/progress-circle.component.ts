import { Component, HostBinding, Input } from '@angular/core'
import { ProgressCircleThemes, randomId } from '@sebgroup/extract'

@Component({
  selector: 'ngg-progress-circle',
  templateUrl: './progress-circle.component.html',
})
export class NggProgressCircleComponent {
  @HostBinding('style.--start-value') private _startValue = '0deg'
  @HostBinding('style.--end-value') private _endValue = '0deg'

  /** id of the progress circle */
  @Input() id?: string = `${randomId()}-progress-circle`
  /** theme of the progress circle */
  @Input() theme: ProgressCircleThemes = ProgressCircleThemes.Warning
  /** progress circle value in percentage */
  @Input() set value(val: number) {
    const degrees = `${this.calculateDegrees(val)}deg`
    this._endValue = degrees
    if (this.theme === ProgressCircleThemes.Disabled) {
      this._startValue = degrees
    }
  }

  calculateDegrees(percent: number): number {
    if (percent > 100) {
      return 180
    }

    if (percent < 0) {
      return 0
    }

    /** formula: ((n% * 360deg) / 100% ) / 2 */
    return percent * 1.8
  }
}
