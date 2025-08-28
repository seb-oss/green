import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggDatepickerComponent } from './datepicker.component'

/**
 * @deprecated
 * NggDatepicker is deprecated in favor of GdsDatepicker found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-datepicker--docs
 */
@NgModule({
  declarations: [NggDatepickerComponent],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [NggDatepickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggDatepickerModule {}
