import { NgModule } from '@angular/core'
import { NgvI18nModule } from '../i18n/i18n.module'
import { NgvTooltipDirective } from './tooltip.directive'

@NgModule({
  declarations: [NgvTooltipDirective],
  exports: [NgvTooltipDirective],
  imports: [NgvI18nModule],
})
export class NgvTooltipModule {}
