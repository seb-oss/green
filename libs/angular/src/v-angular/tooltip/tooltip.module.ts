import { NgModule } from '@angular/core';
import { NgvI18nModule } from '@sebgroup/ngv-i18n';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective
  ],
  exports: [
    TooltipDirective
  ],
  imports: [NgvI18nModule]
})
export class NgvTooltipModule { }
