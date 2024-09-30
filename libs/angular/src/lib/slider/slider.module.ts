import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NggSliderComponent } from './slider.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [NggSliderComponent],
  declarations: [NggSliderComponent],
})
export class NggSliderModule {}
