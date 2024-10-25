import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggPaginationComponent } from './pagination.component'

@NgModule({
  declarations: [NggPaginationComponent],
  imports: [CommonModule],
  exports: [NggPaginationComponent],
})
export class NggPaginationModule {}
