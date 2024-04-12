import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import { clickOnElement, timeout } from '../../utils/testing/index.js'
import sinon from 'sinon'

import '../../../../../dist/libs/core/src/index.js'
import type { GdsButton } from './button.js'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-button>', () => {
  describe('Rendering', () => {
    it('should render button', async () => {
      const el = await fixture<GdsButton>(html`<gds-button>Button</gds-button>`)

      await el.updateComplete

      console.log('hello')

      console.log(el)
      console.log(el.shadowRoot?.innerHTML)

      const innerButton = el.shadowRoot?.querySelector('button')

      expect(innerButton).to.exist
    })

    it('should render lead slot', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button
          ><gds-icon name="search" slot="lead"></gds-icon>Button</gds-button
        >`
      )

      const slot = el.shadowRoot?.querySelector('slot[name="lead"]')

      expect(slot).to.exist
    })
  })

  describe('API', () => {
    it('should fire click event', async () => {
      const el = await fixture<GdsButton>(html`<gds-button>Button</gds-button>`)
      const spy = sinon.spy()
      el.addEventListener('click', spy)

      await clickOnElement(el)

      expect(spy.calledOnce).to.be.true
    })

    it('should be form associated', async () => {
      const el = await fixture<GdsButton>(
        html`<form action="javascript:;">
          <gds-button>Button</gds-button>
        </form>`
      )
      const button = el.querySelector(
        getScopedTagName('gds-button')
      ) as GdsButton

      expect(button.form).to.equal(el)
    })

    it('should submit form when type is submit', async () => {
      const el = await fixture<GdsButton>(
        html`<form action="javascript:;">
          <gds-button type="submit">Button</gds-button>
        </form>`
      )
      const button = el.querySelector(
        getScopedTagName('gds-button')
      ) as GdsButton

      const spy = sinon.spy()
      el.addEventListener('submit', spy)

      await clickOnElement(button)

      expect(spy.calledOnce).to.be.true
    })

    it('should reset form when type is reset', async () => {
      const el = await fixture<GdsButton>(
        html`<form action="javascript:;">
          <gds-button type="reset">Button</gds-button>
        </form>`
      )
      const button = el.querySelector(
        getScopedTagName('gds-button')
      ) as GdsButton

      const spy = sinon.spy()
      el.addEventListener('reset', spy)

      await clickOnElement(button)

      expect(spy.calledOnce).to.be.true
    })

    it('should support value attribute', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button value="value">Button</gds-button>`
      )

      expect(el.value).to.equal('value')
    })
  })

  describe('Accessibility', () => {
    it('should fire click event when pressing enter', async () => {
      const el = await fixture<GdsButton>(html`<gds-button>Button</gds-button>`)
      const spy = sinon.spy()
      el.addEventListener('click', spy)
      el.focus()

      await sendKeys({ press: 'Enter' })

      await timeout(1)

      expect(spy.calledOnce).to.be.true
    })

    it('should be possible to tab to the button', async () => {
      const el = await fixture<GdsButton>(
        html`<div><input /><gds-button>Button</gds-button></div>`
      )
      const input = el.querySelector('input') as HTMLInputElement
      const button = el.querySelector(
        getScopedTagName('gds-button')
      ) as GdsButton

      input.focus()
      await sendKeys({ press: 'Tab' })

      // skip test in webkit
      if (
        !navigator.userAgent.includes('HeadlessChrome') &&
        !navigator.userAgent.includes('Firefox')
      ) {
        return
      }

      expect(document.activeElement).to.equal(button)
    })
  })
})
