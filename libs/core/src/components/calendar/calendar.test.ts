import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'

import { onlyDate, timeout } from '../../utils/testing'

import '@sebgroup/green-core/components/calendar'
import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsCalendar } from './calendar'
import { addDays, addMonths, subMonths } from 'date-fns'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-calendar>', () => {
  describe('Rendering', () => {
    it('should render', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      expect(el).shadowDom.to.exist
    })
  })

  describe('Interactions', () => {
    it('should increment by 7 days when pressing key down', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'ArrowDown' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(addDays(new Date(), 7)),
      )
    })

    it('should decrement by 7 days when pressing key up', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'ArrowUp' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(addDays(new Date(), -7)),
      )
    })

    it('should increment by 1 day when pressing key right', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'ArrowRight' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(addDays(new Date(), 1)),
      )
    })

    it('should decrement by 1 day when pressing key left', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'ArrowLeft' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(addDays(new Date(), -1)),
      )
    })

    it('should decrement by 1 month when pressing page up', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'PageUp' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(subMonths(new Date(), 1)),
      )
    })

    it('should increment by 1 month when pressing page down', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'PageDown' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(addMonths(new Date(), 1)),
      )
    })

    it('should select first day of month when pressing home', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'Home' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(el.value!.getDate()).to.equal(1)
    })

    it('should select last day of month when pressing end', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'End' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(el.value?.getDate()).to.equal(
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

      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(onlyDate(focusedDate))
    })

    it('should select the focused date when pressing space', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      const focusedDate = addDays(new Date(), 7)

      el.focusedDate = focusedDate

      await timeout(0)
      await sendKeys({ press: ' ' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(onlyDate(focusedDate))
    })

    it('should not select the focused date when pressing enter if it is disabled', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar .max=${new Date('2024-01-01')}></gds-calendar>`,
      )
      el.focus()

      const focusedDate = new Date('2024-02-01')
      el.focusedDate = focusedDate
      await el.updateComplete

      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(el.value).to.equal(undefined)
    })

    it('should update the focused date when value is changed', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)

      el.value = new Date('2024-02-01')
      await el.updateComplete

      await expect(onlyDate(el.focusedDate)).to.equal(
        onlyDate(new Date('2024-02-01')),
      )
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

      await expect(onlyDate(el.focusedDate)).to.equal(
        onlyDate(new Date('2024-02-29')),
      )
    })
  })

  describe('API', () => {
    it('should default to undefined', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      expect(el.value).to.equal(undefined)
    })

    it('respects max date', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar .max=${new Date('2024-01-01')}></gds-calendar>`,
      )

      el.focusedDate = new Date('2024-02-01')
      await el.updateComplete

      const cell = el.getDateCell(1)
      expect(cell).to.have.class('disabled')

      expect(el.value).to.equal(undefined)
    })

    it('respects min date', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar .min=${new Date('2024-01-01')}></gds-calendar>`,
      )

      el.focusedDate = new Date('2023-12-01')
      await el.updateComplete

      const cell = el.getDateCell(1)
      expect(cell).to.have.class('disabled')

      expect(el.value).to.equal(undefined)
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

      expect(cell1).to.have.class('disabled')
      expect(cell2).to.have.class('disabled')
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

      expect(cell1).to.have.class('disabled')
      expect(cell2).to.have.class('disabled')
      expect(cell3).to.have.class('disabled')
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
      ).to.contain('22')
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

      expect(cell1).to.have.class('custom-date')
      expect(
        cell1?.querySelector('span.number')?.getAttribute('style'),
      ).to.equal('--_color: var(--intent-danger-background)')
      expect(cell1).to.not.have.class('disabled')

      expect(cell2).to.have.class('custom-date')
      expect(
        cell2?.querySelector('span.number')?.getAttribute('style'),
      ).to.equal('--_color: var(--intent-danger-background)')
      expect(cell2?.querySelector('span.indicator-dot')).to.exist

      expect(cell3).to.have.class('custom-date')
      expect(cell3).to.have.class('disabled')

      expect(cell4).to.not.have.class('custom-date')
    })
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsCalendar>(
        html`<gds-calendar
          .focusedDate=${new Date('2024-06-03')}
          label="Calendar"
        ></gds-calendar>`,
      )
      await expect(el).to.be.accessible()
    })
  })
})
