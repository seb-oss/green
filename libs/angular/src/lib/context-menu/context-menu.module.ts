import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggContextMenuComponent } from './context-menu.component'

@NgModule({
  declarations: [NggContextMenuComponent],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [NggContextMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggContextMenuModule {}
