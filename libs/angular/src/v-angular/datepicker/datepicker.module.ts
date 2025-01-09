import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvInputMaskModule } from '@sebgroup/green-angular/src/v-angular/input-mask'
import { CalendarControlComponent } from './components/calendar-control/calendar-control.component'
import { CalendarComponent } from './components/calendar/calendar.component'
import { DateInputComponent } from './components/date-input/date-input.component'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { CalendarDateDirective } from './directives/calendar-date.directive'
import { DateThookPipe } from './pipes/date-thook.pipe'
import { IsDisabledPipe } from './pipes/is-disabled.pipe'
import { MatchesPipe } from './pipes/matches.pipe'

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDateDirective,
    IsDisabledPipe,
    DateThookPipe,
    CalendarControlComponent,
    DatepickerComponent,
    DateInputComponent,
    MatchesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    NggvInputMaskModule,
    NggCoreWrapperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DateInputComponent, DatepickerComponent],
})
export class NggvDatepickerModule {}
