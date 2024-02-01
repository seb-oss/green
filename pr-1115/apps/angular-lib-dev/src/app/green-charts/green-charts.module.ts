import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GreenChartsRoutingModule } from './green-charts-routing.module'
import { GreenChartsComponent } from './green-charts.component'
import { NggChartsModule } from '@sebgroup/green-angular-charts'

@NgModule({
  declarations: [GreenChartsComponent],
  imports: [CommonModule, NggChartsModule, GreenChartsRoutingModule],
})
export class GreenChartsModule {}
