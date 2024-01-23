import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDatepickerComponent } from './datepicker.component'
import { NggDropdownModule } from '../dropdown/dropdown.module'
import { NggCoreWrapperModule } from '../shared/core-element/core-element.module'

@NgModule({
  declarations: [NggDatepickerComponent],
  imports: [CommonModule, NggDropdownModule, NggCoreWrapperModule],
  exports: [NggDatepickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggDatepickerModule {}
