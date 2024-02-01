import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NggButtonComponent } from './button.component'

@NgModule({
  declarations: [NggButtonComponent],
  imports: [CommonModule],
  exports: [NggButtonComponent],
})
export class NggButtonModule {}
