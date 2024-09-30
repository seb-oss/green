import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContextMenuRoutingModule } from './context-menu-routing.module'
import { ContextMenuComponent } from './context-menu.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NggContextMenuModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [ContextMenuComponent],
  imports: [
    CommonModule,
    NggContextMenuModule,
    ContextMenuRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class ContextMenuModule {}
