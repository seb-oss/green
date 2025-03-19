import { loadavg } from 'os'
import { WeekDay } from '@angular/common'
import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { Month } from '../../datepicker.models'
import { generateDateMatrix } from '../../datepicker.utils'
import { CalendarDateDirective } from '../../directives/calendar-date.directive'
import { IsDisabledPipe } from '../../pipes/is-disabled.pipe'
import { DateThookMockPipe, MatchesMockPipe } from '../../test/stubs'
import { CalendarComponent } from './calendar.component'

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // CalendarComponent - constructor()
  // ----------------------------------------------------------------------------
  const verifyDate = new Date()
  const verifyYear = verifyDate.getFullYear()
  const verifyMonth = verifyDate.getMonth()
  const verifyLocale = 'en'

  describe('CalendarComponent', () => {
    let component: CalendarComponent
    let fixture: ComponentFixture<CalendarComponent>
    let debugElement: DebugElement

    const getDateButtonElement = (date: Date): DebugElement | undefined => {
      const buttons = debugElement.queryAll(
        (e) =>
          (e.nativeElement as HTMLButtonElement).innerHTML.trim() ===
          date.getDate().toString(),
      )

      // Added this check. Test was failing if there were two 31st in one calendar matrix.
      if (buttons.length > 1) {
        return buttons[1]
      }

      return buttons[0]
    }

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          CalendarComponent,
          IsDisabledPipe,
          DateThookMockPipe,
          CalendarDateDirective,
          MatchesMockPipe,
        ],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(CalendarComponent)
      component = fixture.componentInstance
      debugElement = fixture.debugElement
      component.year = verifyYear
      component.month = verifyMonth
      component.locale = verifyLocale
      fixture.detectChanges()
    })

    describe('constructor()', () => {
      it('will be created', () => {
        expect(component).toBeTruthy()
      })
    })

    const firstValid = new Date(verifyDate)
    firstValid.setDate(verifyDate.getDate() + 1)
    const lastValid = new Date(verifyDate)
    lastValid.setDate(verifyDate.getDate() - 1)
    const closingTime = new Date(verifyDate)
    closingTime.setHours(verifyDate.getHours() - 1, 0, 0, 0)

    // describe.each`
    //   inputName            | inputValue
    //   ${'disableDates'}    | ${[verifyDate]}
    //   ${'disableWeekDays'} | ${[verifyDate.getDay()]}
    //   ${'firstValid'}      | ${firstValid}
    //   ${'lastValid'}       | ${lastValid}
    //   ${'closingTime'}     | ${closingTime}
    // `(
    //   `for @Input() $inputName and value $inputValue`,
    //   ({
    //     inputName,
    //     inputValue,
    //   }: {
    //     inputName:
    //       | 'disableDates'
    //       | 'disableWeekDays'
    //       | 'firstValid'
    //       | 'lastValid'
    //       | 'closingTime'
    //     inputValue: any
    //   }) => {
    //     const dateMatrix = generateDateMatrix(verifyMonth, verifyYear, 5, 1)

    //     it(`returns disabled for 'today'`, () => {
    //       component.dateMatrix = dateMatrix
    //       component[inputName] = inputValue
    //       fixture.detectChanges()

    //       const buttonDe = getDateButtonElement(verifyDate) as DebugElement

    //       expect(buttonDe.attributes['ng-reflect-disabled']).toEqual('true')
    //     })
    //   },
    // )

    describe('generateDateMatrix', () => {
      it.each`
        month        | year    | minCalendarRows | firstDayOfWeek    | result
        ${Month.May} | ${2022} | ${5}            | ${WeekDay.Monday} | ${new Date('2022-05-02')}
        ${Month.May} | ${2022} | ${5}            | ${WeekDay.Sunday} | ${new Date('2022-05-08')}
      `(
        `should correctly set second week first date to: $result`,
        ({ month, year, minCalendarRows, firstDayOfWeek, result }) => {
          const dateMatrix = generateDateMatrix(
            month,
            year,
            minCalendarRows,
            firstDayOfWeek,
          )
          const week2 = dateMatrix[1]
          const date = week2[0]
          const testValues = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
          }
          const expectValues = {
            year: result.getFullYear(),
            month: result.getMonth(),
            date: result.getDate(),
          }
          expect(testValues).toEqual(expectValues)
        },
      )

      it.each`
        month              | year    | minCalendarRows | firstDayOfWeek    | date                      | expectedRows
        ${Month.May}       | ${2022} | ${5}            | ${WeekDay.Monday} | ${new Date('2022-05-02')} | ${6}
        ${Month.September} | ${2022} | ${5}            | ${WeekDay.Monday} | ${new Date('2022-09-10')} | ${5}
        ${Month.October}   | ${2022} | ${5}            | ${WeekDay.Monday} | ${new Date('2022-10-31')} | ${6}
        ${Month.February}  | ${2027} | ${5}            | ${WeekDay.Monday} | ${new Date('2027-02-20')} | ${5}
      `(
        `should add correct amount of rows to display the entire month for: $date`,
        ({ month, year, minCalendarRows, firstDayOfWeek, expectedRows }) => {
          const dateMatrix = generateDateMatrix(
            month,
            year,
            minCalendarRows,
            firstDayOfWeek,
          )
          expect(dateMatrix.length).toEqual(expectedRows)
        },
      )
    })
  })
})
