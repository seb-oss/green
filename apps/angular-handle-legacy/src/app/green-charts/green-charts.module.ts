import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggChartsModule } from '@sebgroup/green-angular-charts'
import { GreenChartsRoutingModule } from './green-charts-routing.module'
import { GreenChartsComponent } from './green-charts.component'

@NgModule({
  declarations: [GreenChartsComponent],
  imports: [CommonModule, NggChartsModule, GreenChartsRoutingModule],
})
export class GreenChartsModule {}
