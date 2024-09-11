import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgvI18nModule } from '../i18n/i18n.module'
import { NgvInputComponent } from './input.component'
import { TranslocoModule } from '@ngneat/transloco'

@NgModule({
  declarations: [NgvInputComponent],
  imports: [CommonModule, NgvI18nModule, TranslocoModule],
  exports: [NgvInputComponent],
})
export class NgvInputModule {}
