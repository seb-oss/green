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

  describe('API', () => {
    it('should default to undefined', async () => {
      const el = await fixture<GdsMonthPicker>(
        html`<gds-month-picker></gds-month-picker>`,
      )
      expect(el.value).to.equal(undefined)
    })
  })

  //Make more tests here again and again, .. and again.

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
