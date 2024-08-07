import { NgModule } from '@angular/core'
import { NgvI18nModule } from '../i18n/i18n.module'
import { TooltipDirective } from './tooltip.directive'

@NgModule({
  declarations: [TooltipDirective],
  exports: [TooltipDirective],
  imports: [NgvI18nModule],
})
export class NggTooltipModule {}
