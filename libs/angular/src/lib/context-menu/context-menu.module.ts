import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import {
  NggCoreWrapperModule,
  SCOPE_RESOLVER,
} from '@sebgroup/green-angular/src/lib/shared'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { NggContextMenuComponent } from './context-menu.component'

@NgModule({
  declarations: [NggContextMenuComponent],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [NggContextMenuComponent],
  providers: [
    {
      provide: SCOPE_RESOLVER,
      useValue: { getScopedTagName },
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggContextMenuModule {}
