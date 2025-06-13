import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsAlert } from './alert.component'

import './alert.ts'

import sinon from 'sinon'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-alert>', () => {
  describe('Rendering', () => {
    it('should render alert with default values', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert>Default alert</gds-alert>`,
      )
      await el.updateComplete

      expect(el.type).to.equal('info')
      expect(el.showIcon).to.be.true
      expect(el.dismissible).to.be.false
      expect(el.buttonText).to.equal('')
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('role')).to.equal('alert')
      expect(card?.getAttribute('aria-live')).to.equal('polite')
      expect(card?.getAttribute('aria-label')).to.equal('Information alert')
    })

    it('should render alert with custom type and icon', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert type="success" show-icon>Success alert</gds-alert>`,
      )
      await el.updateComplete
      expect(el.type).to.equal('success')
      const icon =
        el.shadowRoot?.querySelector('.icon') || el.querySelector('.icon')
      expect(icon).to.exist
    })

    it('should not render icon when showIcon is false', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert .showIcon=${false}>No icon</gds-alert>`,
      )
      await el.updateComplete
      const icon =
        el.shadowRoot?.querySelector('.icon') || el.querySelector('.icon')
      expect(icon).to.be.null
    })

    it('should render dismissible alert with close button', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert dismissible>Dismiss me</gds-alert>`,
      )
      await el.updateComplete
      const closeBtn =
        el.shadowRoot?.querySelector('.close-btn') ||
        el.querySelector('.close-btn')
      expect(closeBtn).to.exist
    })

    it('should render alert with action button', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert button-text="Action">With action</gds-alert>`,
      )
      await el.updateComplete
      const btn =
        el.shadowRoot?.querySelector('gds-button') ||
        el.querySelector('gds-button')
      expect(btn).to.exist
      expect(btn?.textContent?.trim()).to.equal('Action')
    })
  })

  describe('Events', () => {
    it('should fire close event when dismissed', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert dismissible>Dismiss me</gds-alert>`,
      )
      await el.updateComplete
      const closeBtn =
        el.shadowRoot?.querySelector('.close-btn') ||
        el.querySelector('.close-btn')
      const closeSpy = sinon.spy()
      el.addEventListener('close', closeSpy)
      closeBtn?.dispatchEvent(
        new MouseEvent('click', { bubbles: true, composed: true }),
      )
      await el.updateComplete
      expect(closeSpy.calledOnce).to.be.true
    })

    it('should fire action event when action button is clicked', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert button-text="Action">With action</gds-alert>`,
      )
      await el.updateComplete
      const btn =
        el.shadowRoot?.querySelector('gds-button') ||
        el.querySelector('gds-button')
      const actionSpy = sinon.spy()
      el.addEventListener('action', actionSpy)
      btn?.dispatchEvent(
        new MouseEvent('click', { bubbles: true, composed: true }),
      )
      await el.updateComplete
      expect(actionSpy.calledOnce).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should have correct ARIA attributes for type', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert type="error">Error alert</gds-alert>`,
      )
      await el.updateComplete
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('aria-label')).to.equal('Error alert')
    })
  })
})
