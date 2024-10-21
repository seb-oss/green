import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDatepickerComponent } from './datepicker.component'
import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'

@NgModule({
  declarations: [NggDatepickerComponent],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [NggDatepickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggDatepickerModule {}
