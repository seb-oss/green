import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggProgressCircleComponent } from './progress-circle.component'

@NgModule({
  declarations: [NggProgressCircleComponent],
  imports: [CommonModule],
  exports: [NggProgressCircleComponent],
})
export class NggProgressCircleModule {}
