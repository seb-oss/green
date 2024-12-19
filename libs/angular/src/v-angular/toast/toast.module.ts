import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslocoModule } from '@jsverse/transloco'

import { NggCoreWrapperModule } from '../../lib/shared'
import { ToastComponent } from './toast.component'

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    BrowserAnimationsModule,
    NggCoreWrapperModule,
  ],
  exports: [ToastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvToastModule {}
