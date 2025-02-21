import { expect } from '@esm-bundle/chai'
import { fixture, html } from '@open-wc/testing'

import type { GdsSpinner } from './gds-spinner'

import './gds-spinner'

describe('<gds-spinner>', () => {
  describe('Rendering', () => {
    it('should render spinner with default values', async () => {
      const el = await fixture<GdsSpinner>(html`<gds-spinner></gds-spinner>`)
      await el.updateComplete

      expect(el.size).to.equal('default')
      expect(el.cover).to.be.false
      expect(el.fullscreen).to.be.false
      expect(el.visualText).to.be.true
      expect(el.text).to.be.undefined
      expect(el.getAttribute('role')).to.equal('status')
      expect(el.getAttribute('aria-busy')).to.equal('true')
    })

    it('should render spinner with text', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner text="Loading..."></gds-spinner>`,
      )
      await el.updateComplete

      const textElement = el.shadowRoot?.querySelector('.spinner-text')
      expect(textElement?.textContent?.trim()).to.equal('Loading...')
    })

    it('should render screen reader only text', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner
          text="Loading..."
          .visualText=${false}
        ></gds-spinner>`,
      )
      await el.updateComplete

      const srText = el.shadowRoot?.querySelector('.sr-only')
      const visibleText = el.shadowRoot?.querySelector('.spinner-text')

      expect(srText?.textContent?.trim()).to.equal('Loading...')
      expect(visibleText).to.be.null
    })
  })

  describe('Size variants', () => {
    it('should apply correct size classes', async () => {
      const sizes = ['sm', 'default', 'md', 'lg'] as const

      for (const size of sizes) {
        const el = await fixture<GdsSpinner>(
          html`<gds-spinner .size=${size}></gds-spinner>`,
        )
        await el.updateComplete

        const spinner = el.shadowRoot?.querySelector('.gds-spinner')
        if (size === 'default') {
          expect(spinner?.classList.contains('gds-spinner')).to.be.true
        } else {
          expect(spinner?.classList.contains(`gds-spinner-${size}`)).to.be.true
        }
      }
    })
  })

  describe('Display modes', () => {
    it('should apply cover mode correctly', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner .cover=${true}></gds-spinner>`,
      )
      await el.updateComplete

      const wrapper = el.shadowRoot?.querySelector('.gds-spinner-wrapper')
      expect(wrapper?.classList.contains('gds-spinner-cover')).to.be.true
      expect(wrapper?.classList.contains('gds-spinner-backdrop')).to.be.true
    })

    it('should apply fullscreen mode correctly', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner .fullscreen=${true}></gds-spinner>`,
      )
      await el.updateComplete

      const wrapper = el.shadowRoot?.querySelector('.gds-spinner-wrapper')
      expect(wrapper?.classList.contains('gds-spinner-fullscreen')).to.be.true
      expect(wrapper?.classList.contains('gds-spinner-backdrop')).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should pass accessibility test', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner text="Loading..." size="md"></gds-spinner>`,
      )
      await expect(el).shadowDom.to.be.accessible()
    })

    it('should have correct ARIA attributes', async () => {
      const el = await fixture<GdsSpinner>(html`<gds-spinner></gds-spinner>`)
      await el.updateComplete

      expect(el.getAttribute('role')).to.equal('status')
      expect(el.getAttribute('aria-busy')).to.equal('true')
    })
  })
})
