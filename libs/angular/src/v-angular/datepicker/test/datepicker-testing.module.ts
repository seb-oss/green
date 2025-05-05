import { NgModule } from '@angular/core'
import { TranslocoTestingModule } from '@jsverse/transloco'

import {
  CalendarDateMockDirective,
  DateCalendarControlMockComponent,
  DateCalendarMockComponent,
  DatepickerMockComponent,
  DateThookMockPipe,
  FontAwesomeMockComponent,
  IsDisabledMockPipe,
  MatchesMockPipe,
} from './stubs'

@NgModule({
  declarations: [
    FontAwesomeMockComponent,
    CalendarDateMockDirective,
    IsDisabledMockPipe,
    DateThookMockPipe,
    MatchesMockPipe,
    DatepickerMockComponent,
    DateCalendarControlMockComponent,
    DateCalendarMockComponent,
  ],
  exports: [
    FontAwesomeMockComponent,
    CalendarDateMockDirective,
    IsDisabledMockPipe,
    DateThookMockPipe,
    MatchesMockPipe,
    DatepickerMockComponent,
    DateCalendarControlMockComponent,
    DateCalendarMockComponent,
    TranslocoTestingModule,
  ],
})
export class NggvDatepickerTestingModule {}
