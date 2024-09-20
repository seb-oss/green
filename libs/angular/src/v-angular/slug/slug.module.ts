import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SlugPipe } from './slug.pipe'

@NgModule({
  declarations: [SlugPipe],
  imports: [CommonModule],
  exports: [SlugPipe],
})
export class NggSlugPipeModule {}
