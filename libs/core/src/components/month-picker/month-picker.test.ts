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
          addMonths(new Date(), -3).getMonth(),
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
          addMonths(new Date(), -3).getMonth(),
        )
      } else {
        await expect(el.value?.getMonth()).to.equal(new Date().getMonth())
      }
    })
  })

  describe('API', () => {
    it('should default to undefined', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      expect(el.value).to.equal(undefined)
    })
  })

  //Make more tests here.

  // Disable for 2023
  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker
          .focusedDate=${new Date('2025-06-03')}
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
