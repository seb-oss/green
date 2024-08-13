import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgvI18nModule } from '../i18n/i18n.module'
import { InputComponent } from './input.component'
import { TranslocoModule } from '@ngneat/transloco'

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, NgvI18nModule, TranslocoModule],
  exports: [InputComponent],
})
export class NggInputModule {}
