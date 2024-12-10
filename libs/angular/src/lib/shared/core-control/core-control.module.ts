import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { NggCoreControlDirective } from './core-control.directive'

@NgModule({
  declarations: [NggCoreControlDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NggCoreControlDirective],
})
export class NggCoreFormsModule {}
