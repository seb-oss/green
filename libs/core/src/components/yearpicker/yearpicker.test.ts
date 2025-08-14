import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import { addDays, addYears, subYears } from 'date-fns'

import type { GdsButton } from '@sebgroup/green-core/components/button'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { onlyDate } from '../../utils/testing'

import type { GdsYearpicker } from './yearpicker'

import '@sebgroup/green-core/components/yearpicker'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-yearpicker>', () => {
  describe('Rendering', () => {
    it('should render', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )
      expect(el).shadowDom.to.exist
    })
  })

  describe('Interactions', () => {
    it('should increment by 1 year when pressing key right', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowRight' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(
        addYears(new Date(), 1).getFullYear(),
      )
    })

    it('should decrement by 1 year when pressing key left', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowLeft' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(
        subYears(new Date(), 1).getFullYear(),
      )
    })

    it('should increment by 5 year when pressing key down', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowDown' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(
        addYears(new Date(), 5).getFullYear(),
      )
    })

    it('should decrement by 5 year when pressing key up', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'ArrowUp' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(
        subYears(new Date(), 5).getFullYear(),
      )
    })

    it('should select min year when pressing home', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('2015-01-01')}
          .max=${new Date('2035-01-01')}
        ></gds-yearpicker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'Home' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(2015)
    })

    it('should select max year when pressing end', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('2015-01-01')}
          .max=${new Date('2035-01-01')}
        ></gds-yearpicker>`,
      )
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'End' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(2035)
    })

    it('should select total cells more when pressing Page Upn', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('1900-01-01')}
          .max=${new Date('2100-01-01')}
          focusedDate="2025-01-01"
        ></gds-yearpicker>`,
      )
      const totalCells = el.columns * el.rows
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'PageUp' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(2025 - totalCells)
    })

    it('should select total cells more when pressing Page Down', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('1900-01-01')}
          .max=${new Date('2100-01-01')}
          focusedDate="2025-01-01"
        ></gds-yearpicker>`,
      )
      const totalCells = el.columns * el.rows
      el.focus()

      await aTimeout(0)
      await sendKeys({ press: 'PageDown' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(2025 + totalCells)
    })

    it('should select the focused date when pressing enter', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('2015-01-01')}
          .max=${new Date('2035-01-01')}
        ></gds-yearpicker>`,
      )
      el.focus()

      const focusedDate = new Date('2020-01-01')
      el.focusedDate = focusedDate

      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(2020)
    })

    it('should select the focused date when pressing space', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('2015-01-01')}
          .max=${new Date('2035-01-01')}
        ></gds-yearpicker>`,
      )
      el.focus()

      const focusedDate = new Date('2020-01-01')
      el.focusedDate = focusedDate

      await aTimeout(0)
      await sendKeys({ press: 'Space' })
      await aTimeout(0)

      await expect(el.value?.getFullYear()).to.equal(2020)
    })

    it('should not select the focused date when pressing enter if it is disabled', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker .min=${new Date('2022-01-01')}></gds-yearpicker>`,
      )
      el.focus()

      const focusedDate = new Date('2020-01-01')
      el.focusedDate = focusedDate

      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)

      await expect(el.value).to.equal(undefined)
      //await expect(el.value?.getFullYear()).to.equal(2022)
    })

    it('should update the focused year when value is changed', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )

      el.value = new Date('2023-01-01')
      await el.updateComplete

      await expect(el.focusedYear).to.equal(2023)
    })

    it('should focus step over change year controls', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          change-years-controls
          focusedDate="2025-01-01"
        ></gds-yearpicker>`,
      )
      await sendKeys({ press: 'Tab' })
      await aTimeout(0)
      await sendKeys({ press: 'Tab' })
      await aTimeout(0)
      await sendKeys({ press: 'Tab' })
      await aTimeout(0)
      await sendKeys({ press: 'ArrowDown' })
      await aTimeout(0)

      await expect(el.focusedYear).to.equal(2030)
    })

    /* // Temporarily disabled - doesn't work
    it('should have correct focused year when pressing the previous years button - 9', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .min=${new Date('1900-01-01')}
          .max=${new Date('2100-01-01')}
          focusedDate="2025-01-01"
          change-years-controls
        ></gds-yearpicker>`,
      )

      const totalCells = el.columns * el.rows
      //const controls = el.shadowRoot?.querySelector('controls')
      el.focus()
      await sendKeys({ press: 'Tab' })
      await aTimeout(0)
      await sendKeys({ press: 'Enter' })
      await aTimeout(0)
      await expect(el.focusedYear).to.equal(2025 - totalCells)
    })*/

    /*it('should handle keyboard navigation on buttons', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          change-years-controls
          focusedDate="2025-01-01"
        ></gds-yearpicker>`,
      )

      // Test tab navigation
      await sendKeys({ press: 'Tab' }) // Focus prev button
      await aTimeout(0)

      const prevButton = el.shadowRoot?.querySelector('#prev') as HTMLElement
      expect(document.activeElement).to.equal(prevButton)

      await sendKeys({ press: 'Tab' }) // Focus range
      await aTimeout(0)

      const nextButton = el.shadowRoot?.querySelector('#next') as HTMLElement
      expect(document.activeElement).to.equal(nextButton)
    })*/
  })

  describe('API', () => {
    /* // Temporarily disabled - doesn't work
    it('should handle click on previous years button', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          change-years-controls
          .min=${new Date('1950-01-01')}
          .max=${new Date('2100-01-01')}
          focusedDate="2025-01-01"
        ></gds-yearpicker>`,
      )

      // Get initial range text
      const rangeElement = el.shadowRoot?.querySelector('#range')
      const initialRange = rangeElement?.textContent

      // Click prev button
      const prevButton = el.shadowRoot?.querySelector('#prev') as GdsButton
      prevButton.click()
      await el.updateComplete

      // Check if range changed
      const newRange = rangeElement?.textContent
      expect(newRange).to.not.equal(initialRange)
      expect(newRange).to.include('2000 - 2024') // Previous 25 years
    })

    it('should handle click on next years button', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          change-years-controls
          .min=${new Date('1950-01-01')}
          .max=${new Date('2100-01-01')}
          focusedDate="2025-01-01"
        ></gds-yearpicker>`,
      )

      // Get initial range text
      const rangeElement = el.shadowRoot?.querySelector('#range')
      const initialRange = rangeElement?.textContent

      // Click next button
      const nextButton = el.shadowRoot?.querySelector('#next') as GdsButton
      nextButton.click()
      await el.updateComplete

      // Check if range changed
      const newRange = rangeElement?.textContent
      expect(newRange).to.not.equal(initialRange)
      expect(newRange).to.include('2050 - 2074') // Next 25 years
    })*/

    it('should default to undefined', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker></gds-yearpicker>`,
      )
      expect(el.value).to.equal(undefined)
    })

    it('should respects min date', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker .min=${new Date('2024-01-01')}></gds-yearpicker>`,
      )

      el.focusedDate = new Date('2023-01-01')
      await el.updateComplete

      const cell = el.getYearCell(0)
      expect(cell).to.have.class('disabled')

      expect(el.value).to.equal(undefined)
    })

    it('should respects max date', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker .max=${new Date('2024-01-01')}></gds-yearpicker>`,
      )

      el.focusedDate = new Date('2025-01-01')
      await el.updateComplete

      const cell = el.getYearCell(24)
      expect(cell).to.have.class('disabled')

      expect(el.value).to.equal(undefined)
    })

    it('should not render extraneous years with hide-extraneous-years', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          .hideExtraneousYears=${true}
          .min=${new Date('2023-01-01')}
          .max=${new Date('2025-01-01')}
          .focusedDate=${new Date('2022-01-01')}
        ></gds-yearpicker>`,
      )

      expect(
        el.shadowRoot?.querySelector('tbody td:first-child')?.innerHTML,
      ).to.not.contain('2022')
    })

    it('should not have class today with no-current-year', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker no-current-year></gds-yearpicker>`,
      )
      //el.focusedDate = new Date()
      //await el.updateComplete
      const first = el.getStartYear()
      const cell = el.getYearCell(el.focusedYear - first)
      expect(cell).to.not.have.class('today')
    })

    it('should have less cells if comumns and rows are fewer', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker columns="4" rows="3"></gds-yearpicker>`,
      )
      const totalCells = el.columns * el.rows
      expect(totalCells).to.equal(12)
    })
  })

  // Disable for 2023
  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsYearpicker>(
        html`<gds-yearpicker
          focusedDate="2025-06-03"
          label="Year picker"
        ></gds-yearpicker>`,
      )

      // TODO: Remove ignoredRules when color-contrast issues are resolved
      await expect(el).to.be.accessible({
        ignoredRules: ['color-contrast'],
      })
    })
  })
})
