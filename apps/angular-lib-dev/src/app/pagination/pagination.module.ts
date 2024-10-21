import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PaginationComponent } from './pagination.component'
import { PaginationRoutingModule } from './pagination-routing.module'
import { NggPaginationModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, NggPaginationModule, PaginationRoutingModule],
  exports: [],
})
export class PaginationModule {}
