import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core'
import { Chart, ChartArgs, ChartSettings, create } from '@sebgroup/green-charts'

@Component({
  selector: 'ngg-chart',
  template: `<div class="chart" [style]="chart?.info?.style">
    <div #chartRef [class]="theme"></div>
    <div *ngIf="chart?.info?.xAxis as xAxis">
      <ul class="x-axis">
        <li *ngFor="let tick of xAxis.ticks">
          {{ tick.text }}
        </li>
      </ul>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartRef') _chartElementRef: ElementRef | undefined

  get theme(): string {
    return <string>this._theme
  }

  @Input() set theme(value: string) {
    this._theme = value
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
  private _theme: string | undefined
  private _settings: ChartSettings | undefined
  private _chart: Chart | undefined

  constructor(private _cdr: ChangeDetectorRef) {}
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
    this._cdr.detectChanges() // manually trigger change detection since we use OnPush Strategy
  }
}
