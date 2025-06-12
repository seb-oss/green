import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import { addDays, addMonths, subMonths } from 'date-fns'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { onlyDate } from '../../utils/testing'

import type { GdsMonthPicker } from './month-picker'

import '@sebgroup/green-core/components/month-picker'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-month-picker>', () => {
  describe('Rendering', () => {
    it('should render', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      expect(el).shadowDom.to.exist
    })
  })

  describe('Interactions', () => {
    it('should increment by 3 months when pressing key down if september or earlier, else stay the same', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowDown' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      if (new Date().getMonth() < 9) {
        await expect(el.value?.getMonth()).to.equal(
          addMonths(new Date(), 3).getMonth(),
        )
      } else {
        await expect(el.value?.getMonth()).to.equal(new Date().getMonth())
      }
    })

    it('should decrement by 3 months when pressing key down if april or later, else stay the same', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowUp' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      if (new Date().getMonth() > 2) {
        await expect(el.value?.getMonth()).to.equal(
          subMonths(new Date(), 3).getMonth(),
        )
      } else {
        await expect(el.value?.getMonth()).to.equal(new Date().getMonth())
      }
    })

    it('should increment by 1 month when pressing key right if november or earlier, else stay the same', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowRight' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      if (new Date().getMonth() < 11) {
        await expect(el.value?.getMonth()).to.equal(
          addMonths(new Date(), 1).getMonth(),
        )
      } else {
        await expect(el.value?.getMonth()).to.equal(new Date().getMonth())
      }
    })

    it('should decrement by 1 month when pressing key left if february or later, else stay the same', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowLeft' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      if (new Date().getMonth() > 2) {
        await expect(el.value?.getMonth()).to.equal(
          subMonths(new Date(), 1).getMonth(),
        )
      } else {
        await expect(el.value?.getMonth()).to.equal(new Date().getMonth())
      }
    })

    it('should select january when pressing home', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'Home' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getMonth()).to.equal(0)
    })

    it('should select december when pressing end', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'End' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getMonth()).to.equal(11)
    })

    it('should select the focused date when pressing enter', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          min="2025-01-01"
          max="2025-12-31"
        ></gds-month-picker>`,
      )
      el.focus()

      const focusedDate = new Date('2025-06-01')
      el.focusedDate = focusedDate
      //const focusedDate = addDays(new Date(), 7)

      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(onlyDate(el.value)).to.equal(onlyDate(focusedDate))
    })

    it('should select the focused date when pressing space', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          min="2025-01-01"
          max="2025-12-31"
        ></gds-month-picker>`,
      )
      el.focus()

      const focusedDate = new Date('2025-06-01')
      el.focusedDate = focusedDate
      //const focusedDate = addDays(new Date(), 7)

      await aTimeout(0)
      await sendKeys({ press: ' ' })
      await aTimeout(0)

      await expect(onlyDate(el.value)).to.equal(onlyDate(focusedDate))
    })

    it('should not select the focused date when pressing enter if it is disabled', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          min="2024-01-01"
          max="2024-06-30"
        ></gds-month-picker>`,
      )
      el.focus()

      const focusedDate = new Date('2024-12-01')
      el.focusedDate = focusedDate

      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value).to.equal(undefined)
    })

    it('should update the focused date when value is changed', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )

      el.value = new Date('2023-02-01')
      await el.updateComplete

      await expect(onlyDate(el.focusedDate)).to.equal(
        onlyDate(new Date('2023-02-01')),
      )
    })
  })

  describe('API', () => {
    it('should default to undefined', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      expect(el.value).to.equal(undefined)
    })

    it('should respects min date', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          .min=${new Date('2024-01-01')}
        ></gds-month-picker>`,
      )

      el.focusedDate = new Date('2023-12-01')
      await el.updateComplete

      const cell = el.getMonthCell(1)
      expect(cell).to.have.class('disabled')

      expect(el.value).to.equal(undefined)
    })

    it('should respects max date', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          .max=${new Date('2024-01-01')}
        ></gds-month-picker>`,
      )

      el.focusedDate = new Date('2024-02-01')
      await el.updateComplete

      const cell = el.getMonthCell(1)
      expect(cell).to.have.class('disabled')

      expect(el.value).to.equal(undefined)
    })

    it('should show short name', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          .min=${new Date('2024-01-01')}
          .max=${new Date('2024-12-31')}
          month-number
        ></gds-month-picker>`,
      )

      el.focusedDate = new Date('2024-02-01')
      await el.updateComplete

      expect(
        el.shadowRoot?.querySelector('#monthCell-1')?.innerHTML,
      ).to.contain('(2)')
    })

    it('should show month number', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          .min=${new Date('2024-01-01')}
          .max=${new Date('2024-12-31')}
          short-month-text
        ></gds-month-picker>`,
      )

      el.focusedDate = new Date('2024-02-01')
      await el.updateComplete

      expect(
        el.shadowRoot?.querySelector('#monthCell-1')?.textContent?.trim(),
      ).to.equal('Feb')
    })

    it('should not render extraneous months with hide-extraneous-months', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          .hideExtraneousMonths=${true}
          .min=${new Date('2024-04-01')}
          .max=${new Date('2024-08-01')}
          .focusedDate=${new Date('2024-01-01')}
        ></gds-month-picker>`,
      )

      expect(
        el.shadowRoot?.querySelector('tbody td:first-child')?.innerHTML,
      ).to.not.contain('January')
    })

    it('should not have class today with no-current-month', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker no-current-month></gds-month-picker>`,
      )
      //el.focusedDate = new Date()
      //await el.updateComplete
      const cell = el.getMonthCell(el.focusedMonth)
      expect(cell).to.not.have.class('today')
    })
  })

  // Disable for 2023
  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          focusedDate="2025-06-03"
          label="Month picker"
        ></gds-month-picker>`,
      )

      // TODO: Remove ignoredRules when color-contrast issues are resolved
      await expect(el).to.be.accessible({
        ignoredRules: ['color-contrast'],
      })
    })
  })
})
