import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { ToastComponent } from './toast.component'

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, TranslocoModule, NggCoreWrapperModule],
  exports: [ToastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvToastModule {}
