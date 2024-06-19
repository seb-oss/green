import './modal.globals'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// import { NgvI18nModule } from '@sebgroup/ngv-i18n'

import { DialogComponent } from './dialog/dialog.component'
import { FoldOutComponent } from './fold-out/fold-out.component'
import { FoldOutOptionDirective } from './fold-out/fold-out.directive'
import { SlideOutComponent } from './slide-out/slide-out.component'

@NgModule({
  imports: [CommonModule /*NgvI18nModule*/],
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
})
export class NgvModalModule {}
