import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, aTimeout } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { clickOnElement } from '../../utils/testing/index.js'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/menu-button'
import type { GdsMenuButton } from '@sebgroup/green-core/components/menu-button'
import '@sebgroup/green-core/components/icon'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-menu-button>', () => {
  describe('Rendering', () => {
    it('should render menu button', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button>Button</gds-menu-button>`,
      )

      await el.updateComplete

      const innerButton = el.shadowRoot?.querySelector('button')

      expect(innerButton).to.exist
    })

    it('should render link', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button href="https://github.com/seb-oss/green"
          >Link</gds-menu-button
        >`,
      )

      await el.updateComplete

      const innerButton = el.shadowRoot?.querySelector('a')

      expect(innerButton).to.exist
    })

    it('should render lead slot', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button
          ><gds-icon-arrow-right slot="lead" />Button</gds-menu-button
        >`,
      )

      const slot = el.shadowRoot?.querySelector('slot[name="lead"]')

      expect(slot).to.exist
    })

    it('should render trail slot', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button
          >Button<gds-icon-arrow-right slot="trail"
        /></gds-menu-button>`,
      )

      const slot = el.shadowRoot?.querySelector('slot[name="trail"]')

      expect(slot).to.exist
    })
  })

  describe('API', () => {
    it('should fire click event', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button>Button</gds-menu-button>`,
      )
      const spy = sinon.spy()
      el.addEventListener('click', spy)

      await clickOnElement(el)

      expect(spy.calledOnce).to.be.true
    })

    it('should support disabled attribute', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button disabled>Button</gds-menu-button>`,
      )

      const spy = sinon.spy()
      el.addEventListener('click', spy)
      el.focus()

      await sendKeys({ press: 'Enter' })

      await aTimeout(1)

      expect(spy.notCalled).to.be.true
      expect(el.disabled).to.be.true
    })

    it('should support compact attribute', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button compact>Button</gds-menu-button>`,
      )

      const shadowButton = el.shadowRoot?.querySelector('button')

      expect(shadowButton?.classList.contains('compact')).to.equal(true)
      expect(el.compact).to.equal(true)
    })

    it('should support link attributes', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_self"
          rel="noopener"
          download
          >Link</gds-menu-button
        >`,
      )

      const shadowButton = el.shadowRoot?.querySelector('a')

      expect(shadowButton?.getAttribute('href')).to.equal(
        'https://github.com/seb-oss/green',
      )
      expect(shadowButton?.getAttribute('rel')).to.equal('noopener')
      expect(shadowButton?.getAttribute('target')).to.equal('_self')
      expect(shadowButton?.hasAttribute('download')).to.equal(true)
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest for button', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button variant="positive" value="Not empty">
          Test button
        </gds-menu-button>`,
      )

      await expect(el).to.be.accessible()
    })
    it('should pass axe smoketest for button link', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button href="https://github.com/seb-oss/green">
          Test link
        </gds-menu-button>`,
      )

      await expect(el).to.be.accessible()
    })
    it('should fire click event when pressing enter', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button>Button</gds-menu-button>`,
      )
      const spy = sinon.spy()
      el.addEventListener('click', spy)
      el.focus()

      await sendKeys({ press: 'Enter' })

      await aTimeout(1)

      expect(spy.calledOnce).to.be.true
    })

    it('should be possible to tab to the button', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<div><input /><gds-menu-button>Button</gds-menu-button></div>`,
      )
      const input = el.querySelector('input') as HTMLInputElement
      const button = el.querySelector(
        getScopedTagName('gds-menu-button'),
      ) as GdsMenuButton

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
  describe('Security', () => {
    it('should apply a secure rel attribute by default', async () => {
      const el = await fixture<GdsMenuButton>(
        html`<gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          Test link
        </gds-menu-button>`,
      )

      const shadowButton = el.shadowRoot?.querySelector('a')

      expect(shadowButton?.getAttribute('rel')).to.equal('noreferrer noopener')
    })
  })
})
