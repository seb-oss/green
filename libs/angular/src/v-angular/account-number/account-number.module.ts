import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AccountNumberPipe } from './account-number.pipe'

@NgModule({
  declarations: [AccountNumberPipe],
  imports: [CommonModule],
  exports: [AccountNumberPipe],
})
export class NggvAccountNumberPipeModule {}
