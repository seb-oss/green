import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NggContextMenuComponent } from './context-menu.component'

@NgModule({
  declarations: [NggContextMenuComponent],
  imports: [CommonModule],
  exports: [NggContextMenuComponent],
})
export class NggContextMenuModule {}
