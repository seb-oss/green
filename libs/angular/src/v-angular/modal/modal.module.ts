import './modal.globals'
import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NggCoreWrapperModule } from '../../lib/shared'
import { DialogComponent } from './dialog/dialog.component'
import { FoldOutComponent } from './fold-out/fold-out.component'
import { FoldOutOptionDirective } from './fold-out/fold-out.directive'
import { SlideOutComponent } from './slide-out/slide-out.component'

@NgModule({
  imports: [CommonModule, NggCoreWrapperModule],
  declarations: [
    DialogComponent,
    SlideOutComponent,
    FoldOutComponent,
    FoldOutOptionDirective,
  ],
  exports: [
    DialogComponent,
    SlideOutComponent,
    FoldOutComponent,
    FoldOutOptionDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvModalModule {}
