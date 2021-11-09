import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChartComponent } from './chart/chart.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ChartComponent],
  exports: [ChartComponent],
})
export class NggChartsModule {}
