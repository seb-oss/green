import './modal.globals'

import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvButtonModule } from '@sebgroup/green-angular/src/v-angular/button'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvDialogComponent } from './dialog/dialog.component'
import { NggvFoldOutComponent } from './fold-out/fold-out.component'
import { NggvFoldOutOptionDirective } from './fold-out/fold-out.directive'
import { NggvSlideOutComponent } from './slide-out/slide-out.component'

@NgModule({
  imports: [
    CommonModule,
    NggvButtonModule,
    NggvI18nModule,
    NggCoreWrapperModule,
  ],
  declarations: [
    NggvDialogComponent,
    NggvSlideOutComponent,
    NggvFoldOutComponent,
    NggvFoldOutOptionDirective,
  ],
  exports: [
    NggvDialogComponent,
    NggvSlideOutComponent,
    NggvFoldOutComponent,
    NggvFoldOutOptionDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvModalModule {}
