import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggButtonComponent } from './button.component'

@NgModule({
  declarations: [NggButtonComponent],
  imports: [CommonModule],
  exports: [NggButtonComponent],
})
export class NggButtonModule {}
