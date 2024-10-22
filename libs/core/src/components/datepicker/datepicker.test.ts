import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type { GdsDatepicker } from '@sebgroup/green-core/components/datepicker'

import { GdsPopover } from '@sebgroup/green-core/components/popover'
import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { clickOnElement, onlyDate } from '../../utils/testing'
import { GdsDatePartSpinner } from './date-part-spinner'

import '@sebgroup/green-core/components/datepicker'
import '@sebgroup/green-core/components/icon/icons/calendar'

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

      await aTimeout(0)

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
          <button type="reset">Reset</button>
        </form>`,
      )
      const resetButton = el.querySelector<HTMLButtonElement>(
        'button[type="reset"]',
      )!
      const spinners = el
        .querySelector('#datepicker')!
        .shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
          getScopedTagName('gds-date-part-spinner'),
        )!

      await expect(spinners[0].value.toString()).to.equal('2024')

      // Trigger reset
      resetButton.click()
      await aTimeout(0)

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
    // Temporarily disabled
    // TODO: Re-enable once we've found a solution to the ResizeObserver error that  cause the test to fail in CI
    // it('should open the calendar when clicking on the calendar button', async () => {
    //   const el = await fixture<GdsDatepicker>(
    //     html`<gds-datepicker></gds-datepicker>`,
    //   )
    //   const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
    //     '[aria-controls="calendar-popover"]',
    //   )!
    //   const popover =
    //     el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

    //   await clickOnElement(button)
    //   await el.updateComplete
    //   await popover.updateComplete

    //   await expect(popover.open).to.be.true
    //   await expect(el.open).to.be.true
    // })

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
      await aTimeout(0)
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
      await aTimeout(0)
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
      await aTimeout(0)
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
      await aTimeout(0)
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
      await aTimeout(0)
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
      await aTimeout(0)
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
      await aTimeout(0)
      await el.updateComplete
      await expect(spinners[0].value.toString()).to.equal('1900')
    })

    // Temporarily disabled
    // TODO: Re-enable once we've found a solution to the ResizeObserver error that  cause the test to fail in CI
    // it('should open the month picker when clicking on the calendar button and then shift-tabbing three times and pressing enter', async () => {
    //   const el = await fixture<GdsDatepicker>(
    //     html`<gds-datepicker></gds-datepicker>`,
    //   )

    //   const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
    //     '[aria-controls="calendar-popover"]',
    //   )!
    //   const popover =
    //     el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!
    //   const monthDropdown = el.shadowRoot!.querySelector<GdsDropdown>(
    //     `${getScopedTagName('gds-dropdown')}[label="Month"]`,
    //   )!

    //   await clickOnElement(button)
    //   await popover.updateComplete

    //   let keyPress = 'Shift+Tab'
    //   if (isWebKit()) {
    //     keyPress = 'Shift+Alt+Tab'
    //   }

    //   await sendKeys({
    //     press: keyPress,
    //   })
    //   await sendKeys({
    //     press: keyPress,
    //   })
    //   await sendKeys({
    //     press: keyPress,
    //   })
    //   await sendKeys({
    //     press: 'Enter',
    //   })

    //   await monthDropdown.updateComplete
    //   await waitUntil(() => monthDropdown.open)

    //   await expect(monthDropdown.open).to.be.true
    // })

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

      await el.updateComplete

      await expect(onlyDate(el.value!)).to.equal(
        onlyDate(new Date('2024-05-10')),
      )
    })

    // Temporarily disabled
    // TODO: Re-enable once we've found a solution to the ResizeObserver error that  cause the test to fail in CI
    // it('should give calendar keyboard focus after opening the popover', async () => {
    //   const el = await fixture<GdsDatepicker>(
    //     html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
    //   )

    //   const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
    //     '[aria-controls="calendar-popover"]',
    //   )!
    //   const popover =
    //     el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

    //   await clickOnElement(button)
    //   await waitUntil(() => popover.open)

    //   await sendKeys({
    //     press: 'Enter',
    //   })

    //   expect(onlyDate(el.value!)).to.equal(onlyDate(new Date('2024-01-01')))
    // })

    it('should set spinners to yyyy, mm and dd when date is undefined', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const spinners = el.shadowRoot!.querySelectorAll<GdsDatePartSpinner>(
        getScopedTagName('gds-date-part-spinner'),
      )!
      el.value = undefined
      await aTimeout(0)
      await el.updateComplete
      await expect(spinners[0].value.toString()).to.equal('yyyy')
      await expect(spinners[1].value.toString()).to.equal('mm')
      await expect(spinners[2].value.toString()).to.equal('dd')
    })

    // Temporarily disabled
    // TODO: Re-enable once we've found a solution to the ResizeObserver error that  cause the test to fail in CI
    // it('should emit input event when navigating with arrow keys in calendar popover', async () => {
    //   const el = await fixture<GdsDatepicker>(
    //     html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
    //   )
    //   const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
    //     '[aria-controls="calendar-popover"]',
    //   )!
    //   const popover =
    //     el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!
    //   const inputHandler = sinon.fake()
    //   el.addEventListener('input', inputHandler)
    //   button.click()
    //   await waitUntil(() => popover.open)
    //   await sendKeys({
    //     press: 'ArrowRight',
    //   })
    //   await aTimeout(0)
    //   await el.updateComplete
    //   await expect(inputHandler.calledOnce).to.be.true
    // })

    it('should reset to initial value when pressing escape in the popover', async () => {
      const el = await fixture<GdsDatepicker>(
        html`<gds-datepicker value="2024-01-01"></gds-datepicker>`,
      )
      const button = el.shadowRoot!.querySelector<HTMLButtonElement>(
        '[aria-controls="calendar-popover"]',
      )!
      const popover =
        el.shadowRoot!.querySelector<GdsPopover>('#calendar-popover')!

      button.click()

      await popover.updateComplete

      await sendKeys({
        press: 'ArrowRight',
      })
      await el.updateComplete

      await sendKeys({
        press: 'Escape',
      })

      await aTimeout(0)
      await el.updateComplete

      await expect(onlyDate(el.value!)).to.equal(
        onlyDate(new Date('2024-01-01')),
      )
    })
  })
})
