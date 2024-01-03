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
import exp from 'constants'
import { GdsDropdown } from '../dropdown/dropdown'

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
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

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
        '[aria-controls="calendar-popover"]'
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      await clickOnElement(button)
      await el.updateComplete

      expect(popover.open).to.be.true
      expect(el.open).to.be.true
    })

    it('should focus the first date part spinner when clicking on the label', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`
      )
      const label = el.shadowRoot!.querySelector<HTMLLabelElement>('#label')!
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!

      const focusHandler = sinon.fake()
      spinners[0].addEventListener('focus', focusHandler)

      await clickOnElement(label)

      expect(focusHandler.calledOnce).to.be.true
    })

    it('should focus the first date part spinner when clicking on the element', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!

      const focusHandler = sinon.fake()
      spinners[0].addEventListener('focus', focusHandler)

      await clickOnElement(el)

      expect(focusHandler.calledOnce).to.be.true
    })

    it('should increment the spinner value when pressing the up arrow', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[0].focus()

      await sendKeys({
        press: 'ArrowUp',
      })

      expect(spinners[0].value).to.equal('2025')
    })

    it('should decrement the spinner value when pressing the down arrow', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[0].focus()

      await sendKeys({
        press: 'ArrowDown',
      })

      expect(spinners[0].value).to.equal('2023')
    })

    it('should focus the next spinner when pressing the right arrow', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[0].focus()

      await sendKeys({
        press: 'ArrowRight',
      })

      expect(spinners[1].value).to.equal('01')
    })

    it('should focus the previous spinner when pressing the left arrow', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[1].focus()

      await sendKeys({
        press: 'ArrowLeft',
      })

      expect(spinners[0].value).to.equal('2024')
    })

    it('should set year to 20 when typing 20 in the year spinner', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[0].focus()

      await sendKeys({
        type: '20',
      })

      expect(spinners[0].value.toString()).to.equal('20')
    })

    it('should set year to min when blurring the year spinner with a value below min', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker min="2022-01-01"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[0].focus()

      await sendKeys({
        type: '1',
      })

      await sendKeys({
        press: 'Tab',
      })

      expect(spinners[0].value).to.equal('2022')
    })

    it('should open the month picker when clicking on the calendar button and then tabbing twice and pressing enter', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )
      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]'
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!
      const monthDropdown = el.shadowRoot!.querySelector<GdsDropdown>(
        `${getScopedTagName('gds-dropdown')}[aria-label="Month"]`
      )!

      await clickOnElement(button)
      await el.updateComplete

      await timeout(10)

      let keyPress = 'Alt+Tab'

      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        // Alt+Tab is required for Webkit and works in Chromium but not Firefox
        keyPress = 'Tab'
      }

      await sendKeys({
        press: keyPress,
      })
      await sendKeys({
        press: keyPress,
      })
      await sendKeys({
        press: 'Enter',
      })

      await timeout(10)

      expect(popover.open).to.be.true
      expect(el.open).to.be.true
      expect(monthDropdown.open).to.be.true
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
