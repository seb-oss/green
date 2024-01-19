import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'

import { onlyDate, timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import { htmlTemplateTagFactory } from '../../../../../dist/libs/core/src/index.js'

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
    it('should default to the current date', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      expect(onlyDate(el.value)).to.equal(onlyDate(new Date()))
    })

    it('should increment by 7 days when pressing key down', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'ArrowDown' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.equal(
        onlyDate(addDays(new Date(), 7))
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
        onlyDate(addDays(new Date(), -7))
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
        onlyDate(addDays(new Date(), 1))
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
        onlyDate(addDays(new Date(), -1))
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
        onlyDate(subMonths(new Date(), 1))
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
        onlyDate(addMonths(new Date(), 1))
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

      await expect(el.value.getDate()).to.equal(1)
    })

    it('should select last day of month when pressing end', async () => {
      const el = await fixture<GdsCalendar>(html`<gds-calendar></gds-calendar>`)
      el.focus()

      await timeout(0)
      await sendKeys({ press: 'End' })
      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(el.value.getDate()).to.equal(
        new Date(el.value.getFullYear(), el.value.getMonth() + 1, 0).getDate()
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
        html`<gds-calendar .max=${new Date('2024-01-01')}></gds-calendar>`
      )
      el.focus()

      const focusedDate = new Date('2024-02-02')
      el.focusedDate = focusedDate
      await el.updateComplete

      await timeout(0)
      await sendKeys({ press: 'Enter' })
      await timeout(0)

      await expect(onlyDate(el.value)).to.not.equal(onlyDate(focusedDate))
    })
  })
})
