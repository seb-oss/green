import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NggRadioGroupComponent } from './radio-group.component'
import { NggRadioGroupSafeHtmlPipe } from './pipes/radio-group-safe-html.pipe'

@NgModule({
  declarations: [NggRadioGroupComponent, NggRadioGroupSafeHtmlPipe],
  imports: [CommonModule, FormsModule],
  exports: [NggRadioGroupComponent],
})
export class NggRadioGroupModule {}
