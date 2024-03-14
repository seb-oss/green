import './modal.globals';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { NgvI18nModule } from '@sebgroup/ngv-i18n';

import { DialogComponent } from './dialog/dialog.component';
import { FoldOutComponent } from './fold-out/fold-out.component';
import { FoldOutOptionDirective } from './fold-out/fold-out.directive';
import { SlideOutComponent } from './slide-out/slide-out.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, NgvI18nModule],
  declarations: [DialogComponent, SlideOutComponent, FoldOutComponent, FoldOutOptionDirective],
  exports: [DialogComponent, SlideOutComponent, FoldOutComponent, FoldOutOptionDirective],
})
export class NgvModalModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes, faEllipsisH);
  }
}
