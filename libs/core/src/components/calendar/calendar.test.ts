import { userEvent } from '@vitest/browser/context'
import { addDays, addMonths, subMonths } from 'date-fns'
import { describe, expect, it } from 'vitest'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import {
  aTimeout,
  fixture,
  onlyDate,
  html as testingHtml,
} from '../../utils/testing'

import type { GdsCalendar } from './calendar'

import '@sebgroup/green-core/components/calendar'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-calendar>', () => {
  describe('Rendering', () => {
    it('should render', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      expect(el.shadowRoot).toBeDefined()
    })
  })

  describe('Interactions', () => {
    it('should increment by 7 days when pressing key down', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{ArrowDown}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(addDays(new Date(), 7)))
    })

    it('should decrement by 7 days when pressing key up', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{ArrowUp}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(addDays(new Date(), -7)))
    })

    it('should increment by 1 day when pressing key right', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{ArrowRight}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(addDays(new Date(), 1)))
    })

    it('should decrement by 1 day when pressing key left', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{ArrowLeft}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(addDays(new Date(), -1)))
    })

    it('should decrement by 1 month when pressing page up', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{PageUp}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(subMonths(new Date(), 1)))
    })

    it('should increment by 1 month when pressing page down', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{PageDown}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(addMonths(new Date(), 1)))
    })

    it('should select first day of month when pressing home', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{Home}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(el.value!.getDate()).toBe(1)
    })

    it('should select last day of month when pressing end', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{End}')
      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(el.value?.getDate()).toBe(
        new Date(
          el.value!.getFullYear(),
          el.value!.getMonth() + 1,
          0,
        ).getDate(),
      )
    })

    it('should select the focused date when pressing enter', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      const focusedDate = addDays(new Date(), 7)

      el.focusedDate = focusedDate

      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(focusedDate))
    })

    it('should select the focused date when pressing space', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      const focusedDate = addDays(new Date(), 7)

      el.focusedDate = focusedDate

      await aTimeout(0)
      await userEvent.keyboard(' ')
      await aTimeout(0)

      expect(onlyDate(el.value)).toBe(onlyDate(focusedDate))
    })

    it('should not select the focused date when pressing enter if it is disabled', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar .max=${new Date('2024-01-01')}></gds-calendar>`,
      )
      el.focus()

      const focusedDate = new Date('2024-02-01')
      el.focusedDate = focusedDate
      await el.updateComplete

      await aTimeout(0)
      await userEvent.keyboard('{Enter}')
      await aTimeout(0)

      expect(el.value).toBe(undefined)
    })

    it('should update the focused date when value is changed', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)

      el.value = new Date('2024-02-01')
      await el.updateComplete

      expect(onlyDate(el.focusedDate)).toBe(onlyDate(new Date('2024-02-01')))
    })

    it('should focus last day of month if focused date is beyond last day of current month when changing month', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedDate=${new Date('2024-05-31')}
        ></gds-calendar>`,
      )
      await el.updateComplete

      el.focusedMonth = 1
      await el.updateComplete

      expect(onlyDate(el.focusedDate)).toBe(onlyDate(new Date('2024-02-29')))
    })
  })

  describe('API', () => {
    it('should default to undefined', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      expect(el.value).toBe(undefined)
    })

    it('respects max date', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar .max=${new Date('2024-01-01')}></gds-calendar>`,
      )

      el.focusedDate = new Date('2024-02-01')
      await el.updateComplete

      const cell = el.getDateCell(1)
      expect(cell?.classList.contains('disabled')).toBe(true)

      expect(el.value).toBe(undefined)
    })

    it('respects min date', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar .min=${new Date('2024-01-01')}></gds-calendar>`,
      )

      el.focusedDate = new Date('2023-12-01')
      await el.updateComplete

      const cell = el.getDateCell(1)
      expect(cell?.classList.contains('disabled')).toBe(true)

      expect(el.value).toBe(undefined)
    })

    it('should disable weekends when setting disabledWeekends to true', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .disabledWeekends=${true}
          .focusedDate=${new Date('2024-06-03')}
        ></gds-calendar>`,
      )
      await el.updateComplete

      const cell1 = el.getDateCell(1)
      const cell2 = el.getDateCell(9)

      expect(cell1?.classList.contains('disabled')).toBe(true)
      expect(cell2?.classList.contains('disabled')).toBe(true)
    })

    it('should disable specific dates set in disabledDates', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedYear=${2024}
          .focusedMonth=${5}
          .disabledDates=${[
            new Date('2024-06-04'),
            new Date('2024-06-06'),
            new Date('2024-06-08'),
          ]}
        ></gds-calendar>`,
      )

      const cell1 = el.getDateCell(4)
      const cell2 = el.getDateCell(6)
      const cell3 = el.getDateCell(8)

      expect(cell1?.classList.contains('disabled')).toBe(true)
      expect(cell2?.classList.contains('disabled')).toBe(true)
      expect(cell3?.classList.contains('disabled')).toBe(true)
    })

    it('should show week numbers when setting showWeekNumbers to true', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .showWeekNumbers=${true}
          .focusedDate=${new Date('2024-06-01')}
        ></gds-calendar>`,
      )

      expect(
        el.shadowRoot?.querySelector('tbody td:first-child')?.innerHTML,
      ).toContain('22')
    })

    it('should correctly render customizedDates', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedYear=${2024}
          .focusedMonth=${5}
          .customizedDates=${[
            {
              date: new Date('2024-06-04'),
              color: 'var(--intent-danger-background)',
            },
            {
              date: new Date('2024-06-06'),
              color: 'var(--intent-danger-background)',
              indicator: 'dot',
            },
            {
              date: new Date('2024-06-08'),
              disabled: true,
            },
          ]}
        ></gds-calendar>`,
      )
      await el.updateComplete

      const cell1 = el.getDateCell(4)
      const cell2 = el.getDateCell(6)
      const cell3 = el.getDateCell(8)
      const cell4 = el.getDateCell(5)

      expect(cell1?.classList.contains('custom-date')).toBe(true)
      expect(cell1?.querySelector('span.number')?.getAttribute('style')).toBe(
        '--_color: var(--intent-danger-background)',
      )
      expect(cell1?.classList.contains('disabled')).toBe(false)

      expect(cell2?.classList.contains('custom-date')).toBe(true)
      expect(cell2?.querySelector('span.number')?.getAttribute('style')).toBe(
        '--_color: var(--intent-danger-background)',
      )
      expect(cell2?.querySelector('span.indicator-dot')).toBeDefined()

      expect(cell3?.classList.contains('custom-date')).toBe(true)
      expect(cell3?.classList.contains('disabled')).toBe(true)

      expect(cell4?.classList.contains('custom-date')).toBe(false)
    })

    it('should not render day names when setting hideDayNames to true', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .hideDayNames=${true}
          .focusedDate=${new Date('2024-06-01')}
        ></gds-calendar>`,
      )

      expect(el.shadowRoot?.querySelector('thead')).toBeNull()
    })

    it('should not render extraneous days when setting hideExtraneousDays to true', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .hideExtraneousDays=${true}
          .focusedDate=${new Date('2024-06-01')}
        ></gds-calendar>`,
      )

      expect(
        el.shadowRoot?.querySelector('tbody td:first-child')?.innerHTML,
      ).not.toContain('27')
    })

    it('should cancel focus action when calling `event.preventDefault()` on `gds-date-focused` event', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedDate=${new Date('2024-06-03')}
        ></gds-calendar>`,
      )

      el.addEventListener('gds-date-focused', (e) => {
        e.preventDefault()
      })

      el.focus()

      await aTimeout(0)
      await userEvent.keyboard('{ArrowDown}')
      await aTimeout(0)

      expect(onlyDate(el.focusedDate)).toBe(onlyDate(new Date('2024-06-03')))
    })

    it('should accept a custom date label template', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedDate=${new Date('2024-06-03')}
          .dateLabelTemplate=${(date: Date) => date.getDate().toString()}
        ></gds-calendar>`,
      )

      expect(
        el.shadowRoot?.querySelector('#dateCell-3')?.getAttribute('aria-label'),
      ).toBe('3')
    })
  })

  // Disable for 2023
  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedDate=${new Date('2024-06-03')}
          label="Calendar"
        ></gds-calendar>`,
      )

      // TODO: Remove ignoredRules when color-contrast issues are resolved
      await expect(el).toBeAccessible({
        ignoredRules: ['color-contrast'],
      })
    })
  })
})
