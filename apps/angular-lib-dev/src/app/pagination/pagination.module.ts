import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NggPaginationModule } from '@sebgroup/green-angular'

import { PaginationRoutingModule } from './pagination-routing.module'
import { PaginationComponent } from './pagination.component'

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, NggPaginationModule, PaginationRoutingModule],
  exports: [],
})
export class PaginationModule {}
