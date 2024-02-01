import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggChartComponent } from './chart/ngg-chart.component'

@NgModule({
  imports: [CommonModule],
  declarations: [NggChartComponent],
  exports: [NggChartComponent],
})
export class NggChartsModule {}
