import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NggAlertComponent } from './alert.component'

@NgModule({
  declarations: [NggAlertComponent],
  imports: [CommonModule],
  exports: [NggAlertComponent],
})
export class NggAlertModule {}
