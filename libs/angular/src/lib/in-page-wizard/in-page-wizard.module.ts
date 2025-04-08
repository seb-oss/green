import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggButtonModule } from '../button'
import { NggInPageWizardStepCardComponent } from './in-page-wizard-step-card.component'

@NgModule({
  declarations: [NggInPageWizardStepCardComponent],
  imports: [CommonModule, NggButtonModule],
  exports: [NggInPageWizardStepCardComponent],
})
export class NggInPageWizardModule {}
