import { CommonModule } from '@angular/common'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CalendarMonth } from '../../datepicker.models'
import { NggvDatepickerTestingModule } from '../../test/datepicker-testing.module'
import { DatepickerComponent } from './datepicker.component'

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // CalendarControlComponent
  // ----------------------------------------------------------------------------
  describe('DatepickerComponent', () => {
    let component: DatepickerComponent
    let fixture: ComponentFixture<DatepickerComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DatepickerComponent],
        imports: [CommonModule, NggvDatepickerTestingModule],
        providers: [],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(DatepickerComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    describe('constructor()', () => {
      it('should create', () => {
        expect(component).toBeTruthy()
      })
    })

    describe('getDisabledDatesFor()', () => {
      // generate dataset for disabled dates with excactly one date for each month
      // starting 12 months back, continuing 22 months in the future
      const generateDisabledDates = (): Date[] => {
        const today = new Date()
        const arr = new Array(33).fill('')
        let lastGeneratedDate = new Date(
          `${today.getFullYear() - 1}-${today.getMonth() + 1}-1`,
        )
        lastGeneratedDate.setHours(11)
        const startDate = new Date(lastGeneratedDate)

        return [startDate].concat(
          arr.map((_) => {
            const date = new Date(lastGeneratedDate)
            date.setMonth(lastGeneratedDate.getMonth() + 1)
            lastGeneratedDate = date
            return date
          }),
        )
      }

      const disableDatesArr = generateDisabledDates()
      const dateFormat = new Intl.DateTimeFormat('en', { month: 'long' }).format

      const currentYear = new Date().getFullYear()
      const january = new Date(`${currentYear}-01-01`)
      january.setHours(11)

      const december = new Date(`${currentYear}-12-01`)
      december.setHours(11)

      const june = new Date(`${currentYear}-06-01`)
      june.setHours(11)

      describe.each`
        targetDate  | previous | next | targetStr
        ${january}  | ${11}    | ${1} | ${dateFormat(january)}
        ${june}     | ${4}     | ${6} | ${dateFormat(june)}
        ${december} | ${10}    | ${0} | ${dateFormat(december)}
      `(
        `for calendar month $targetStr`,
        ({
          targetDate,
          previous,
          next,
        }: {
          targetDate: Date
          previous: number
          next: number
        }) => {
          const prevDt = new Date(targetDate)
          prevDt.setDate(-1)
          const nextDt = new Date(targetDate)
          nextDt.setDate(33)
          it(`returns disabled dates for ${dateFormat(prevDt)}, ${dateFormat(targetDate)} and ${dateFormat(nextDt)}`, () => {
            const disabledDateInterval = component.getDisabledDatesFor(
              new CalendarMonth(targetDate),
              disableDatesArr,
            )
            // expect to return dates only for these three months
            disabledDateInterval.forEach((disableDate) => {
              expect(
                [previous, targetDate.getMonth(), next].includes(
                  disableDate.getMonth(),
                ),
              )
            })
            const intervalForMonth = (month: number) =>
              disabledDateInterval.filter(
                (disableDate) => disableDate.getMonth() === month,
              )
            // expect to return one date for each month
            expect(intervalForMonth(targetDate.getMonth()).length).toEqual(1)
            expect(intervalForMonth(previous).length).toEqual(1)
            expect(intervalForMonth(next).length).toEqual(1)
          })
        },
      )
    })
  })
})
