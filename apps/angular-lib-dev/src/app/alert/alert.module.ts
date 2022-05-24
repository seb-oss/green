import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AlertRoutingModule } from './alert-routing.module'
import { AlertComponent } from './alert.component'
import { NggAlertModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, AlertRoutingModule, NggAlertModule],
})
export class AlertModule {}
