import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { NggCoreCheckboxDirective } from './core-checkbox.directive'
import { NggCoreControlDirective } from './core-control.directive'

@NgModule({
  declarations: [NggCoreControlDirective, NggCoreCheckboxDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NggCoreControlDirective, NggCoreCheckboxDirective],
})
export class NggCoreFormsModule {}
