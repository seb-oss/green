import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsSpinner } from './gds-spinner'

import '@sebgroup/green-core/components/spinner/index.js'

import sinon from 'sinon'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-spinner>', () => {
  describe('Rendering', () => {
    it('should render spinner with default values', async () => {
      const el = await fixture<GdsSpinner>(html`<gds-spinner></gds-spinner>`)
      await el.updateComplete

      expect(el.size).to.equal('md')
      expect(el.cover).to.be.false
      expect(el.fullscreen).to.be.false
      expect(el.showLabel).to.be.false
      expect(el.label).to.equal('Loading...')
      expect(el.getAttribute('role')).to.equal('status')
      expect(el.getAttribute('aria-live')).to.equal('polite')
      expect(el.getAttribute('aria-label')).to.equal('Loading...')
    })

    it('should render spinner with label', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner label="Loading..." showLabel></gds-spinner>`,
      )
      await el.updateComplete

      const labelElement = el.shadowRoot?.querySelector('.spinner-label')
      expect(labelElement?.textContent?.trim()).to.equal('Loading...')
    })

    it('should not render label when showLabel is false', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner
          label="Loading..."
          .showLabel=${false}
        ></gds-spinner>`,
      )
      await el.updateComplete

      const labelElement = el.shadowRoot?.querySelector('.spinner-label')
      expect(labelElement).to.be.null
    })
  })

  describe('Size variants', () => {
    it('should apply correct size attribute', async () => {
      const sizes = ['sm', 'md', 'lg'] as const

      for (const size of sizes) {
        const el = await fixture<GdsSpinner>(
          html`<gds-spinner .size=${size}></gds-spinner>`,
        )
        await el.updateComplete

        expect(el.getAttribute('size')).to.equal(size)
      }
    })
  })

  describe('Display modes', () => {
    it('should apply cover mode correctly', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner .cover=${true}></gds-spinner>`,
      )
      await el.updateComplete

      const wrapper = el.shadowRoot?.querySelector('.spinner-wrapper')
      expect(wrapper?.classList.contains('spinner-cover')).to.be.true
      expect(wrapper?.classList.contains('spinner-backdrop')).to.be.true
    })

    it('should apply fullscreen mode correctly', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner .fullscreen=${true}></gds-spinner>`,
      )
      await el.updateComplete

      const wrapper = el.shadowRoot?.querySelector('.spinner-wrapper')
      expect(wrapper?.classList.contains('spinner-fullscreen')).to.be.true
      expect(wrapper?.classList.contains('spinner-backdrop')).to.be.true
    })
  })

  describe('Events', () => {
    it('should dispatch gds-spinner-connected event on connection', async () => {
      const eventSpy = sinon.spy()
      await fixture<GdsSpinner>(
        html`<gds-spinner
          @gds-spinner-connected=${(e: Event) => eventSpy(e)}
        ></gds-spinner>`,
      )

      expect(eventSpy.calledOnce).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner label="Custom label"></gds-spinner>`,
      )
      await el.updateComplete

      expect(el.getAttribute('role')).to.equal('status')
      expect(el.getAttribute('aria-live')).to.equal('polite')
      expect(el.getAttribute('aria-label')).to.equal('Custom label')
    })
  })
})
