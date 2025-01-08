import { DisableDateConfig } from '../datepicker.models'
import { IsDisabledPipe } from './is-disabled.pipe'

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // IsDisabledPipe - constructor()
  // ----------------------------------------------------------------------------
  describe('IsDisabledPipe - constructor()', () => {
    it('create an instance', () => {
      const pipe = new IsDisabledPipe()
      expect(pipe).toBeTruthy()
    })

    const firstOfJanuary = new Date()
    firstOfJanuary.setMonth(0)
    firstOfJanuary.setDate(1)
    const lastOfDecember = new Date()
    lastOfDecember.setMonth(11)
    lastOfDecember.setDate(31)

    // test first valid
    describe.each`
      firstValid        | firstValidStr
      ${firstOfJanuary} | ${firstOfJanuary.toISOString().substring(0, 10)}
      ${lastOfDecember} | ${lastOfDecember.toISOString().substring(0, 10)}
    `(
      `firstValid set to $firstValidStr`,
      ({ firstValid }: { firstValid: Date }) => {
        let pipe: IsDisabledPipe
        let config: DisableDateConfig

        beforeEach(() => {
          pipe = new IsDisabledPipe()
          config = {
            fromDate: firstValid,
          }
        })

        describe('returns disabled when', () => {
          it('date occurs a year before', () => {
            const yearBefore = new Date(firstValid)
            yearBefore.setFullYear(yearBefore.getFullYear() - 1)
            const isDisabled = pipe.transform(yearBefore, config)
            expect(isDisabled).toBeTruthy()
          })

          it('date occurs a month before', () => {
            const monthBefore = new Date(firstValid)
            monthBefore.setMonth(monthBefore.getMonth() - 1)
            const isDisabled = pipe.transform(monthBefore, config)
            expect(isDisabled).toBeTruthy()
          })

          it('date occurs a day before', () => {
            const dayBefore = new Date(firstValid)
            dayBefore.setDate(dayBefore.getDate() - 1)
            const isDisabled = pipe.transform(dayBefore, config)
            expect(isDisabled).toBeTruthy()
          })
        })

        describe('returns enabled when', () => {
          it('date occurs a year after', () => {
            const yearAfter = new Date(firstValid)
            yearAfter.setFullYear(yearAfter.getFullYear() + 1)
            const isDisabled = pipe.transform(yearAfter, config)
            expect(isDisabled).toBeFalsy()
          })

          it('date occurs a month after', () => {
            const monthAfter = new Date(firstValid)
            monthAfter.setMonth(monthAfter.getMonth() + 1)
            const isDisabled = pipe.transform(monthAfter, config)
            expect(isDisabled).toBeFalsy()
          })

          it('date occurs a day after', () => {
            const dayAfter = new Date(firstValid)
            dayAfter.setDate(dayAfter.getDate() + 1)
            const isDisabled = pipe.transform(dayAfter, config)
            expect(isDisabled).toBeFalsy()
          })

          it('date occurs the same day', () => {
            const sameDay = new Date(firstValid)
            const isDisabled = pipe.transform(sameDay, config)
            expect(isDisabled).toBeFalsy()
          })
        })
      },
    )

    // test last valid
    describe.each`
      lastValid         | lastValidStr
      ${firstOfJanuary} | ${firstOfJanuary.toISOString().substring(0, 10)}
      ${lastOfDecember} | ${lastOfDecember.toISOString().substring(0, 10)}
    `(
      `lastValid set to $lastValidStr`,
      ({ lastValid }: { lastValid: Date }) => {
        let pipe: IsDisabledPipe
        let config: DisableDateConfig

        beforeEach(() => {
          pipe = new IsDisabledPipe()
          config = {
            toDate: lastValid,
          }
        })

        describe('returns disabled when', () => {
          it('date occurs a year after', () => {
            const yearAfter = new Date(lastValid)
            yearAfter.setFullYear(yearAfter.getFullYear() + 1)
            const isDisabled = pipe.transform(yearAfter, config)
            expect(isDisabled).toBeTruthy()
          })

          it('date occurs a month after', () => {
            const monthAfter = new Date(lastValid)
            monthAfter.setMonth(monthAfter.getMonth() + 1)
            const isDisabled = pipe.transform(monthAfter, config)
            expect(isDisabled).toBeTruthy()
          })

          it('date occurs a day after', () => {
            const dayAfter = new Date(lastValid)
            dayAfter.setDate(dayAfter.getDate() + 1)
            const isDisabled = pipe.transform(dayAfter, config)
            expect(isDisabled).toBeTruthy()
          })
        })

        describe('returns enabled when', () => {
          it('date occurs a year before', () => {
            const yearBefore = new Date(lastValid)
            yearBefore.setFullYear(yearBefore.getFullYear() - 1)
            const isDisabled = pipe.transform(yearBefore, config)
            expect(isDisabled).toBeFalsy()
          })

          it('date occurs a month before', () => {
            const monthBefore = new Date(lastValid)
            monthBefore.setMonth(monthBefore.getMonth() - 1)
            const isDisabled = pipe.transform(monthBefore, config)
            expect(isDisabled).toBeFalsy()
          })

          it('date occurs a day before', () => {
            const dayBefore = new Date(lastValid)
            dayBefore.setDate(dayBefore.getDate() - 1)
            const isDisabled = pipe.transform(dayBefore, config)
            expect(isDisabled).toBeFalsy()
          })

          it('date occurs the same day', () => {
            const sameDay = new Date(lastValid)
            const isDisabled = pipe.transform(sameDay, config)
            expect(isDisabled).toBeFalsy()
          })
        })
      },
    )

    const morning = new Date()
    morning.setHours(7, 30, 0, 0)
    const evening = new Date()
    evening.setHours(19, 30, 0, 0)

    // test closing time
    describe.each`
      closingTime | closingTimeStr
      ${morning}  | ${morning.toISOString()}
      ${evening}  | ${evening.toISOString()}
    `(
      `closingTime set to '$closingTimeStr'`,
      ({ closingTime }: { closingTime: Date }) => {
        let pipe: IsDisabledPipe
        let config: DisableDateConfig

        beforeEach(() => {
          pipe = new IsDisabledPipe()
          config = {
            closingTime,
          }
        })

        describe('returns disabled when', () => {
          it('closingTime has passed', () => {
            const after = new Date(closingTime)
            after.setHours(closingTime.getHours() + 1)
            Date.now = jest.fn(() => after.getTime())
            const isDisabled = pipe.transform(after, config)
            expect(isDisabled).toBeTruthy()
          })
        })

        describe('returns enabled when', () => {
          it('closingTime has not passed', () => {
            const before = new Date(closingTime)
            before.setHours(closingTime.getHours() - 1)
            Date.now = jest.fn(() => before.getTime())
            const isDisabled = pipe.transform(before, config)
            expect(isDisabled).toBeFalsy()
          })

          it('for tomorrow', () => {
            const tomorrow = new Date(closingTime)
            tomorrow.setDate(closingTime.getDate() + 1)
            Date.now = jest.fn(() => tomorrow.getTime())
            const isDisabled = pipe.transform(tomorrow, config)
            expect(isDisabled).toBeFalsy()
          })
        })
      },
    )
  })
})
