import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core'
import { Chart, ChartArgs, ChartSettings, create } from '@sebgroup/green-charts'

@Component({
  selector: 'ngg-chart',
  template: ` <div #chart></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chart') _chartElementRef: ElementRef | undefined

  get chart(): Chart | undefined {
    return this._chart
  }

  set chart(value: Chart | undefined) {
    this._chart = value
  }
  get settings() {
    return this._settings
  }

  @Input() set settings(value) {
    this._settings = value
    if (this.settings && this.settings.data && this._chartElementRef) {
      this.setChart({
        settings: this.settings,
        chartElement: this._chartElementRef?.nativeElement,
      })
    }
  }
  private _settings: ChartSettings | undefined
  private _chart: Chart | undefined

  ngAfterViewInit() {
    if (this.settings && this._chartElementRef) {
      this.setChart({
        settings: this.settings,
        chartElement: this._chartElementRef?.nativeElement,
      })
    }
  }

  setChart(args: ChartArgs) {
    this.chart ? this.chart?.update(args) : (this.chart = create(args))
  }
}
