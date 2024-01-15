import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import {
  clickOnElement,
  conditionToBeTrue,
  isWebKit,
  onlyDate,
  timeout,
} from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

import type { GdsDatepicker } from './datepicker'
import { GdsPopover } from 'src/primitives/popover'
import { GdsDatePartSpinner } from './date-part-spinner'
import { GdsDropdown } from '../dropdown/dropdown'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-datepicker>', () => {
  describe('Rendering', () => {
    it('should render a datepicker', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )
      await expect(el).shadowDom.to.exist
    })
  })

  describe('API', () => {
    it('should set the value', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )
      await expect(el.value).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set the min', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker min="2024-01-01"></gds-datepicker>`
      )
      await expect(el.min).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set the max', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker max="2024-01-01"></gds-datepicker>`
      )
      await expect(el.max).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set open', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker open></gds-datepicker>`
      )
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      await expect(popover.open).to.be.true
      await expect(el.open).to.be.true
    })

    it('should set the label', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`
      )
      await expect(el.label).to.equal('Date')
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

      await expect(spinners[0].getAttribute('aria-label')).to.equal('Day')
      await expect(spinners[0].length).to.equal(2)
      await expect(spinners[1].getAttribute('aria-label')).to.equal('Month')
      await expect(spinners[1].length).to.equal(2)
      await expect(spinners[2].getAttribute('aria-label')).to.equal('Year')
      await expect(spinners[2].length).to.equal(4)
      await expect(separator.textContent).to.equal('/')
      await expect(el.dateformat).to.equal('d/m/y')
    })

    it('should dispatch a change event when the value is changed by the user', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-10"></gds-datepicker>`
      )
      const changeHandler = sinon.fake()
      el.addEventListener('change', changeHandler)

      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!
      spinners[0].focus()

      await sendKeys({
        type: '20',
      })

      await sendKeys({
        press: 'Tab',
      })

      await timeout(0)

      await expect(changeHandler.calledOnce).to.be.true
    })

    it('should reset when setting value to undefined', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-10"></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!

      await expect(spinners[0].value.toString()).to.equal('2024')

      el.value = undefined
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('yyyy')
    })

    it('should reset when form is reset', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<form>
          <gds-datepicker id="datepicker" value="2024-01-10"></gds-datepicker>
          <button type="reset">Reset</button>
        </form>`
      )
      const resetButton = el.querySelector<HTMLButtonElement>('button')!
      const spinners = el
        .querySelector('#datepicker')!
        .shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
          getScopedTagName('gds-date-part-spinner')
        )!

      await expect(spinners[0].value.toString()).to.equal('2024')

      resetButton.click()
      await timeout(0)

      await expect(spinners[0].value.toString()).to.equal('yyyy')
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

      await expect(popover.open).to.be.true
      await expect(el.open).to.be.true
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

      await expect(focusHandler.calledOnce).to.be.true
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

      await timeout(0)
      await el.updateComplete

      await expect(focusHandler.calledOnce).to.be.true
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

      await timeout(0)
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('2025')
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

      await timeout(0)
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('2023')
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

      await timeout(0)
      await el.updateComplete

      await expect(spinners[1].value.toString()).to.equal('01')
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

      await timeout(0)
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('2024')
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

      await timeout(0)
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('20')
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

      await timeout(0)
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('2022')
    })

    it('should open the month picker when clicking on the calendar button and then shift-tabbing three times and pressing enter', async () => {
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
      await conditionToBeTrue(() => popover.open)

      let keyPress = 'Shift+Tab'
      if (isWebKit()) {
        keyPress = 'Shift+Alt+Tab'
      }

      await sendKeys({
        press: keyPress,
      })
      await timeout(0)
      await sendKeys({
        press: keyPress,
      })
      await timeout(0)
      await sendKeys({
        press: keyPress,
      })
      await timeout(0)
      await sendKeys({
        press: 'Enter',
      })

      await conditionToBeTrue(() => monthDropdown.open)

      await expect(monthDropdown.open).to.be.true
    })

    it('should be possible to type out a date without tabbing', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!

      spinners[0].focus()

      await sendKeys({
        type: '2024',
      })

      await sendKeys({
        type: '05',
      })

      await sendKeys({
        type: '10',
      })

      await sendKeys({
        press: 'Tab',
      })

      await timeout(0)
      await el.updateComplete

      await expect(onlyDate(el.value!)).to.equal(
        onlyDate(new Date('2024-05-10'))
      )
    })

    it('should give calendar keyboard focus after opening the popover', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )

      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]'
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      await clickOnElement(button)
      await conditionToBeTrue(() => popover.open)

      await sendKeys({
        press: 'Enter',
      })

      expect(onlyDate(el.value!)).to.equal(onlyDate(new Date()))
    })

    it('should set spinners to yyyy, mm and dd when date is undefined', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`
      )

      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner')
      )!

      el.value = undefined

      await timeout(0)
      await el.updateComplete

      await expect(spinners[0].value.toString()).to.equal('yyyy')
      await expect(spinners[1].value.toString()).to.equal('mm')
      await expect(spinners[2].value.toString()).to.equal('dd')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`
      )

      await expect(el).to.be.accessible()
    })

    it('should be accessible with more options', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker
          label="Datepicker"
          value="2024-01-02"
          min="2022-10-10"
          max="2025-10-10"
          showWeekNumbers
        >
          <span slot="sub-label">A sub-label</span>
          <span slot="message">Instructive message</span>
        </gds-datepicker>`
      )

      await expect(el).to.be.accessible()
    })
  })
})
