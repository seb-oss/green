import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GreenChartsComponent } from './green-charts.component'

const routes: Routes = [{ path: '', component: GreenChartsComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreenChartsRoutingModule {}
