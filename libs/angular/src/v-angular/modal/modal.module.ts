import './modal.globals'

import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvButtonModule } from '@sebgroup/green-angular/src/v-angular/button'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvDialogComponent } from './dialog/dialog.component'
import { NgvFoldOutComponent } from './fold-out/fold-out.component'
import { NgvFoldOutOptionDirective } from './fold-out/fold-out.directive'
import { NgvSlideOutComponent } from './slide-out/slide-out.component'

@NgModule({
  imports: [CommonModule, NgvButtonModule,NgvI18nModule, NggCoreWrapperModule],
  declarations: [
    NgvDialogComponent,
    NgvSlideOutComponent,
    NgvFoldOutComponent,
    NgvFoldOutOptionDirective,
  ],
  exports: [
    NgvDialogComponent,
    NgvSlideOutComponent,
    NgvFoldOutComponent,
    NgvFoldOutOptionDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvModalModule {}
