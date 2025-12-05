import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type { GdsLink } from '@sebgroup/green-core/components/link'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing/index.js'

import '@sebgroup/green-core/components/link'
import '@sebgroup/green-core/components/icon'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-link>', () => {
  describe('Rendering', () => {
    it('should render link', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link</gds-link>`,
      )

      await el.updateComplete

      const innerLink = el.shadowRoot?.querySelector('a')

      expect(innerLink).to.exist
    })

    it('should render lead slot', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link
          ><gds-icon-arrow-right slot="lead"></gds-icon-arrow-right
          >Link</gds-link
        >`,
      )

      const slot = el.shadowRoot?.querySelector('slot[name="lead"]')

      expect(slot).to.exist
    })

    it('should render trail slot', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link
          >Link<gds-icon-arrow-right slot="trail"></gds-icon-arrow-right
        ></gds-link>`,
      )

      const slot = el.shadowRoot?.querySelector('slot[name="trail"]')

      expect(slot).to.exist
    })
  })

  describe('API', () => {
    it('should fire click event', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link</gds-link>`,
      )
      const spy = sinon.spy()
      el.addEventListener('click', (): void => {
        spy()
      })

      await clickOnElement(el)

      expect(spy.calledOnce).to.be.true
    })

    it('should support link attributes', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link
          href="javascript:;"
          target="_self"
          rel="noopener"
          ping="pingUrl"
          download
          >Link</gds-link
        >`,
      )

      const shadowLink = el.shadowRoot?.querySelector('a')

      expect(shadowLink?.getAttribute('href')).to.equal('javascript:;')
      expect(shadowLink?.getAttribute('rel')).to.equal('noopener')
      expect(shadowLink?.getAttribute('target')).to.equal('_self')
      expect(shadowLink?.hasAttribute('download')).to.equal(true)
      expect(shadowLink?.hasAttribute('ping')).to.equal('pingUrl')
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest for link', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Test link</gds-link>`,
      )

      await expect(el).to.be.accessible()
    })

    it('should fire click event when pressing enter', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link</gds-link>`,
      )
      const spy = sinon.spy()
      el.addEventListener('click', (event: { preventDefault: () => void }) => {
        event.preventDefault()
        spy()
      })
      el.focus()

      await sendKeys({ press: 'Enter' })

      await aTimeout(1)

      expect(spy.calledOnce).to.be.true
    })

    it('should be possible to tab to the link', async () => {
      const el = await fixture<GdsLink>(
        html`<div><input /><gds-link href="javascript:;">Link</gds-link></div>`,
      )
      const input = el.querySelector('input') as HTMLInputElement
      const link = el.querySelector(getScopedTagName('gds-link')) as GdsLink

      input.focus()
      await sendKeys({ press: 'Tab' })

      // skip test in webkit
      if (
        !navigator.userAgent.includes('HeadlessChrome') &&
        !navigator.userAgent.includes('Firefox')
      ) {
        return
      }

      expect(document.activeElement).to.equal(link)
    })

    it('should pass aria-label to inner link element and not host', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;" label="Test label"
          >Link text</gds-link
        >`,
      )

      const shadowLink = el.shadowRoot?.querySelector('a')

      expect(el.getAttribute('aria-label')).to.be.null

      expect(shadowLink?.getAttribute('aria-label')).to.equal('Test label')
    })

    it('should not set aria-label on inner link when label prop is not provided', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link text</gds-link>`,
      )

      const shadowLink = el.shadowRoot?.querySelector('a')

      expect(el.getAttribute('aria-label')).to.be.null
      expect(shadowLink?.getAttribute('aria-label')).to.be.null
    })
  })

  describe('Security', () => {
    it('should apply a secure rel attribute by default', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;" target="_blank">
          Test link
        </gds-link>`,
      )

      const shadowLink = el.shadowRoot?.querySelector('a')

      expect(shadowLink?.getAttribute('rel')).to.equal('noreferrer noopener')
    })
  })
})
