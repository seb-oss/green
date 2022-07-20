import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NggToggleSelectorComponent } from './toggle-selector.component'
import { NggToggleSelectorSafeHtmlPipe } from './pipes/toggle-selector-safe-html.pipe'

@NgModule({
  declarations: [NggToggleSelectorComponent, NggToggleSelectorSafeHtmlPipe],
  imports: [CommonModule],
  exports: [NggToggleSelectorComponent],
})
export class NggToggleSelectorModule {}
