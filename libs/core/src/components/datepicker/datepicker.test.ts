import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { time } from 'console'

import { clickOnElement, timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

import type { GdsDatepicker } from './datepicker'
import { GdsPopover } from 'src/primitives/popover'
import { GdsDatePartSpinner } from './date-part-spinner'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-datepicker>', () => {
  describe('Rendering', () => {
    it('should render a datepicker', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )
      expect(el).shadowDom.to.exist
    })
  })

  describe('API', () => {
    it('should set the value', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      expect(el.value).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set the min', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker min="2024-01-01"></gds-datepicker>`
      )
      expect(el.min).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set the max', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker max="2024-01-01"></gds-datepicker>`
      )
      expect(el.max).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set open', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker open></gds-datepicker>`
      )

      const popover = el.shadowRoot!.querySelector<GdsPopover>('#calendar')!

      expect(popover.open).to.be.true
      expect(el.open).to.be.true
    })

    it('should set the label', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`
      )
      expect(el.label).to.equal('Date')
    })

    it('should set the date format', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker dateformat="d/m/y"></gds-datepicker>`
      )

      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!

      const separator = el.shadowRoot!.querySelector<HTMLSpanElement>(
        '.field .input > span'
      )!

      expect(spinners[0].getAttribute('aria-label')).to.equal('Day')
      expect(spinners[0].length).to.equal(2)
      expect(spinners[1].getAttribute('aria-label')).to.equal('Month')
      expect(spinners[1].length).to.equal(2)
      expect(spinners[2].getAttribute('aria-label')).to.equal('Year')
      expect(spinners[2].length).to.equal(4)
      expect(separator.textContent).to.equal('/')
      expect(el.dateformat).to.equal('d/m/y')
    })
  })

  describe('Interactions', () => {
    it('should open the calendar when clicking on the calendar button', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )

      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar"]'
      )!
      await clickOnElement(button)

      const popover = el.shadowRoot!.querySelector<GdsPopover>('#calendar')!

      await el.updateComplete

      expect(popover.open).to.be.true
      expect(el.open).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )

      await expect(el).to.be.accessible()
    })
  })
})
