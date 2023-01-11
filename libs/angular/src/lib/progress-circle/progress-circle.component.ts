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
  @Input() id?: string = `progress-circle-${randomId()}`
  /** theme of the progress circle */
  @Input() theme: ProgressCircleThemes = 'warning'
  /** progress circle value in percentage */
  @Input() set value(percent: number) {
    const degrees = this.calculateDegrees(percent)
    this._endValue = `${degrees}deg`
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
