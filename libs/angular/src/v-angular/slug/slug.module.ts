import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SlugPipe } from './slug.pipe'

@NgModule({
  declarations: [SlugPipe],
  imports: [CommonModule],
  exports: [SlugPipe],
})
export class NggvSlugPipeModule {}
