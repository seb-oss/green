import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { NggvDatepickerTestingModule } from '../../test/datepicker-testing.module'
import { CalendarControlComponent } from './calendar-control.component'

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // CalendarControlComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('CalendarControlComponent - constructor()', () => {
    let component: CalendarControlComponent
    let fixture: ComponentFixture<CalendarControlComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CalendarControlComponent],
        imports: [ReactiveFormsModule, NggvDatepickerTestingModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(CalendarControlComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
