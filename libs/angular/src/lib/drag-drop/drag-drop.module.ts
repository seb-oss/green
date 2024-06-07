import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome'
import { faTimes } from '@fortawesome/pro-light-svg-icons'
import { faCheck, faCloudUpload } from '@fortawesome/pro-regular-svg-icons'
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { NgvModalModule } from '@sebgroup/ngv-modal'

import { DragDropComponent } from './drag-drop.component.ts_'
import { ValuePipe } from './drag-drop.pipes'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslocoModule,
    FontAwesomeModule,
    NgvModalModule,
  ],
  declarations: [ValuePipe, DragDropComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'dragDrop',
    },
  ],
  exports: [DragDropComponent],
})
export class NgvDragDropModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes, faCheck, faCloudUpload)
  }
}
