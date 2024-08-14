import { expect } from '@esm-bundle/chai'
import {
  aTimeout,
  fixture,
  html as testingHtml,
  waitUntil,
} from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import {
  clickOnElement,
  conditionToBeTrue,
  isWebKit,
  onlyDate,
  timeout,
} from '../../utils/testing'

import '@sebgroup/green-core/components/datepicker'
import type { GdsDatepicker } from '@sebgroup/green-core/components/datepicker'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

import { GdsPopover } from '@sebgroup/green-core/components/popover'
import { GdsDatePartSpinner } from './date-part-spinner'
import { GdsDropdown } from '@sebgroup/green-core/components/dropdown'
import { GdsButton } from '@sebgroup/green-core/components/button'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-datepicker>', () => {
  describe('Rendering', () => {
    it('should render a datepicker', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`,
      )
      await expect(el).shadowDom.to.exist
    })
  })

  describe('API', () => {
    it('should set the value', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      await expect(el.value).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set the min', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker min="2024-01-01"></gds-datepicker>`,
      )
      await expect(el.min).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set the max', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker max="2024-01-01"></gds-datepicker>`,
      )
      await expect(el.max).to.deep.equal(new Date('2024-01-01'))
    })

    it('should set open', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker open></gds-datepicker>`,
      )
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      await expect(popover.open).to.be.true
      await expect(el.open).to.be.true
    })

    it('should set the label', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`,
      )
      await expect(el.label).to.equal('Date')
    })

    it('should set the date format', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker dateformat="d/m/y"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
      )!
      const separator = el.shadowRoot!.querySelector<HTMLSpanElement>(
        '.field .input > span',
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
        html`<gds-datepicker value="2024-01-10"></gds-datepicker>`,
      )
      const changeHandler = sinon.fake()
      el.addEventListener('change', changeHandler)

      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        html`<gds-datepicker value="2024-01-10"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
          <gds-button type="reset">Reset</gds-button>
        </form>`,
      )
      const resetButton = el.querySelector<GdsButton>(
        getScopedTagName('gds-button'),
      )!
      const spinners = el
        .querySelector('#datepicker')!
        .shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
          getScopedTagName('gds-date-part-spinner'),
        )!

      await expect(spinners[0].value.toString()).to.equal('2024')

      resetButton.click()
      await timeout(0)

      await expect(spinners[0].value.toString()).to.equal('yyyy')
    })

    it('should return a focused date', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-10" open></gds-datepicker>`,
      )
      const focusedDate = await el.getFocusedDate()

      await expect(onlyDate(focusedDate!)).to.equal(
        onlyDate(new Date('2024-01-10')),
      )
    })

    it('should not return a focused date if the popover is closed', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-10"></gds-datepicker>`,
      )
      const focusedDate = await el.getFocusedDate()

      await expect(focusedDate).to.be.undefined
    })

    it('Setting `disabled-weekends` should disable weekends', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker
          value="2024-01-10"
          disabled-weekends
          open
        ></gds-datepicker>`,
      )

      await el.updateComplete

      const disabledDatecell = await el.test_getDateCell(13)

      await expect(disabledDatecell).to.have.attribute('disabled')
    })

    it('Setting `disabled-dates` should disable dates', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker
          value="2024-01-10"
          disabled-dates="2024-01-13"
          open
        ></gds-datepicker>`,
      )

      await el.updateComplete

      const disabledDatecell = await el.test_getDateCell(13)

      await expect(disabledDatecell).to.have.attribute('disabled')
    })
  })

  describe('Interactions', () => {
    it('should open the calendar when clicking on the calendar button', async function () {
      // Increase the timeout for this test
      this.timeout(5000)

      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`,
      )

      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]',
      )!

      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      // Click the button
      await clickOnElement(button)

      // Wait for a short time to allow for initial layout changes
      await aTimeout(50)

      // Wait for the popover to open
      await waitUntil(() => popover.open, 'Popover did not open')

      // Wait for any remaining updates to complete
      await el.updateComplete

      // Add another small delay to ensure stability
      await aTimeout(50)

      // Check the open states
      expect(popover.open).to.be.true
      expect(el.open).to.be.true
    })
    it('should focus the first date part spinner when clicking on the label', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`,
      )
      const label = el.shadowRoot!.querySelector<HTMLLabelElement>('#label')!
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
      )!
      const focusHandler = sinon.fake()
      spinners[0].addEventListener('focus', focusHandler)
      await clickOnElement(label)
      await expect(focusHandler.calledOnce).to.be.true
    })
    it('should focus the first date part spinner when clicking on the element', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker label="Date"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
      )!
      spinners[0].focus()
      await sendKeys({
        type: '20',
      })
      await timeout(0)
      await el.updateComplete
      await expect(spinners[0].value.toString()).to.equal('20')
    })
    it('should set year to 1900 when blurring the year spinner with a value below 1900', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker min="2022-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
      await expect(spinners[0].value.toString()).to.equal('1900')
    })

    it('should open the month picker when clicking on the calendar button and then shift-tabbing three times and pressing enter', async function () {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`,
      )

      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]',
      )!

      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      const monthDropdown = el.shadowRoot!.querySelector<GdsDropdown>(
        `${getScopedTagName('gds-dropdown')}[label="Month"]`,
      )!

      // Click the button and wait for the popover to open
      await clickOnElement(button)
      await waitUntil(() => popover.open, 'Popover did not open')

      // Determine the key press based on the browser
      const keyPress = isWebKit() ? 'Shift+Alt+Tab' : 'Shift+Tab'

      // Function to send a key and wait for a short time
      const sendKeyAndWait = async (key: string) => {
        await sendKeys({ press: key })
        await el.updateComplete
        await aTimeout(100) // Wait a bit for any animations or state updates
      }

      // Send the Shift+Tab keys three times
      for (let i = 0; i < 3; i++) {
        await sendKeyAndWait(keyPress)
      }

      // Send Enter key
      await sendKeyAndWait('Enter')

      // Wait for the month dropdown to open
      await waitUntil(() => monthDropdown.open, 'Month dropdown did not open')

      // Final check
      expect(monthDropdown.open).to.be.true
    })
    it('should be possible to type out a date without tabbing', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
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
        onlyDate(new Date('2024-05-10')),
      )
    })
    it('should give calendar keyboard focus after opening the popover', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )

      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]',
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      // Click the button and wait for the popover to open
      await clickOnElement(button)
      await waitUntil(() => popover.open)

      // Wait for any animations or transitions to complete
      await aTimeout(100)

      // Send the Enter key and wait for any potential state updates
      await sendKeys({ press: 'Enter' })
      await el.updateComplete

      // Check the value
      expect(onlyDate(el.value!)).to.equal(onlyDate(new Date('2024-01-01')))
    }, 5000) // Increase timeout to 5 seconds

    it('should set spinners to yyyy, mm and dd when date is undefined', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
      )!
      el.value = undefined
      await timeout(0)
      await el.updateComplete
      await expect(spinners[0].value.toString()).to.equal('yyyy')
      await expect(spinners[1].value.toString()).to.equal('mm')
      await expect(spinners[2].value.toString()).to.equal('dd')
    })
    it('should emit input event when navigating with arrow keys in calendar popover', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]',
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!
      const inputHandler = sinon.fake()
      el.addEventListener('input', inputHandler)
      await clickOnElement(button)
      await conditionToBeTrue(() => popover.open)
      await sendKeys({
        press: 'ArrowRight',
      })
      await timeout(0)
      await el.updateComplete
      await expect(inputHandler.calledOnce).to.be.true
    })
    it('should reset to initial value when pressing escape in the popover', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const button = el.shadowRoot!.querySelector<GdsButton>(
        '[aria-controls="calendar-popover"]',
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!
      await clickOnElement(button)
      await conditionToBeTrue(() => popover.open)
      await sendKeys({
        press: 'ArrowRight',
      })
      await el.updateComplete
      await sendKeys({
        press: 'Escape',
      })
      await timeout(0)
      await el.updateComplete
      await expect(onlyDate(el.value!)).to.equal(
        onlyDate(new Date('2024-01-01')),
      )
    })
  })

  // describe('Accessibility', () => {
  //   it('should be accessible', async () => {
  //     const el = await fixture<GdsDatepicker>(
  //       html`<gds-datepicker></gds-datepicker>`,
  //     )

  //     await expect(el).to.be.accessible()
  //   })

  //   it('should be accessible with more options', async () => {
  //     const el = await fixture<GdsDatepicker>(
  //       html`<gds-datepicker
  //         label="Datepicker"
  //         value="2024-01-02"
  //         min="2022-10-10"
  //         max="2025-10-10"
  //         showWeekNumbers
  //       >
  //         <span slot="sub-label">A sub-label</span>
  //         <span slot="message">Instructive message</span>
  //       </gds-datepicker>`,
  //     )

  //     await expect(el).to.be.accessible()
  //   })
  // })
})
