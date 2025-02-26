import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AccountNumberPipe } from './account-number.pipe'

@NgModule({
  declarations: [],
  imports: [CommonModule, AccountNumberPipe],
  exports: [AccountNumberPipe],
})
export class NggvAccountNumberPipeModule {}
