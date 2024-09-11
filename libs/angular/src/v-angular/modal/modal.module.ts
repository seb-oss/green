import './modal.globals'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgvDialogComponent } from './dialog/dialog.component'
import { NgvFoldOutComponent } from './fold-out/fold-out.component'
import { NgvFoldOutOptionDirective } from './fold-out/fold-out.directive'
import { NgvSlideOutComponent } from './slide-out/slide-out.component'
import { NgvButtonModule } from '../button/button.module'

@NgModule({
  imports: [CommonModule, NgvButtonModule],
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
})
export class NgvModalModule {}
