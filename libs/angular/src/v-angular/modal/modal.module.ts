import './modal.globals'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DialogComponent } from './dialog/dialog.component'
import { FoldOutComponent } from './fold-out/fold-out.component'
import { FoldOutOptionDirective } from './fold-out/fold-out.directive'
import { SlideOutComponent } from './slide-out/slide-out.component'
import { NggButtonModule } from '../button/button.module'

@NgModule({
  imports: [CommonModule, NggButtonModule],
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
