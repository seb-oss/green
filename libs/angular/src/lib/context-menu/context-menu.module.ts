import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggContextMenuComponent } from './context-menu.component'

@NgModule({
  declarations: [NggContextMenuComponent],
  imports: [CommonModule],
  exports: [NggContextMenuComponent],
})
export class NggContextMenuModule {}
