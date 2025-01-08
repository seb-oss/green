import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { TRANSLOCO_SCOPE, TranslocoModule } from '@jsverse/transloco'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvModalModule } from '@sebgroup/green-angular/src/v-angular/modal'
import { NggvDragDropComponent } from './drag-drop.component'
import { ValuePipe } from './drag-drop.pipes'

@NgModule({
  imports: [
    HttpClientModule,
    TranslocoModule,
    NggvModalModule,
    NggCoreWrapperModule,
    CommonModule,
  ],
  declarations: [ValuePipe, NggvDragDropComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'dragDrop',
    },
  ],
  exports: [NggvDragDropComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvDragDropModule {}
