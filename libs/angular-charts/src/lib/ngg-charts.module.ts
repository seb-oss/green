import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggChartComponent } from './chart/ngg-chart.component'

@NgModule({
  imports: [CommonModule],
  declarations: [NggChartComponent],
  exports: [NggChartComponent],
})
export class NggChartsModule {}
