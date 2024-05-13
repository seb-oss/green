import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { clickOnElement, timeout } from '../../utils/testing/index.js'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/button'
import type { GdsButton } from '@sebgroup/green-core/components/button'
import '@sebgroup/green-core/components/icon'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-button>', () => {
  describe('Rendering', () => {
    it('should render button', async () => {
      const el = await fixture<GdsButton>(html`<gds-button>Button</gds-button>`)

      await el.updateComplete

      const innerButton = el.shadowRoot?.querySelector('button')

      expect(innerButton).to.exist
    })

    it('should render lead slot', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button
          ><gds-icon name="search" slot="lead"></gds-icon>Button</gds-button
        >`,
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
        </form>`,
      )
      const button = el.querySelector(
        getScopedTagName('gds-button'),
      ) as GdsButton

      expect(button.form).to.equal(el)
    })

    it('should submit form when type is submit', async () => {
      const el = await fixture<GdsButton>(
        html`<form action="javascript:;">
          <gds-button type="submit">Button</gds-button>
        </form>`,
      )
      const button = el.querySelector(
        getScopedTagName('gds-button'),
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
        </form>`,
      )
      const button = el.querySelector(
        getScopedTagName('gds-button'),
      ) as GdsButton

      const spy = sinon.spy()
      el.addEventListener('reset', spy)

      await clickOnElement(button)

      expect(spy.calledOnce).to.be.true
    })

    it('should support value attribute', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button value="value">Button</gds-button>`,
      )

      expect(el.value).to.equal('value')
    })

    it('should support disabled attribute', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button disabled>Button</gds-button>`,
      )

      const spy = sinon.spy()
      el.addEventListener('click', spy)
      el.focus()

      await sendKeys({ press: 'Enter' })

      await timeout(1)

      expect(spy.notCalled).to.be.true
      expect(el.disabled).to.be.true
    })

    it('should support variant attribute', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button variant="positive">Button</gds-button>`,
      )

      const shadowButton = el.shadowRoot?.querySelector('button')

      expect(el.variant).to.equal('positive')
      expect(shadowButton?.classList.contains('positive')).to.equal(true)
    })

    it('should support size attribute', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button size="small">Button</gds-button>`,
      )

      const shadowButton = el.shadowRoot?.querySelector('button')

      expect(el.size).to.equal('small')
      expect(shadowButton?.classList.contains('small')).to.equal(true)
    })

    it('should support rank attribute', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button rank="tertiary">Button</gds-button>`,
      )

      const shadowButton = el.shadowRoot?.querySelector('button')

      expect(shadowButton?.classList.contains('tertiary')).to.equal(true)
      expect(el.rank).to.equal('tertiary')
    })

    it('should not accept custom HTML', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button>
          <main>Not visible</main>
          Visible
        </gds-button>`,
      )

      const main = el.shadowRoot?.querySelector('main')

      expect(main).to.not.exist
      expect(el.innerText).to.equal('Visible')
    })

    it('should render properly with gds-icon', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button><gds-icon name="arrow"></gds-icon></gds-button>`,
      )

      await el.updateComplete

      const button = el.shadowRoot?.querySelector('button')

      expect(button?.classList.contains('circle')).to.equal(true)
      expect(button?.classList.contains('icon')).to.equal(true)
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest', async () => {
      const el = await fixture<GdsButton>(
        html`<gds-button variant="positive" value="Not empty">
          Test button
        </gds-button>`,
      )

      await expect(el).to.be.accessible()
    })
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
        html`<div><input /><gds-button>Button</gds-button></div>`,
      )
      const input = el.querySelector('input') as HTMLInputElement
      const button = el.querySelector(
        getScopedTagName('gds-button'),
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
