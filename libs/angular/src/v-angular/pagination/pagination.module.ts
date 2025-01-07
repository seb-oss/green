import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { PaginationComponent } from './pagination.component'

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgvI18nModule,
    TranslocoModule,
    NggCoreWrapperModule,
  ],
  exports: [PaginationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvPaginationModule {}
