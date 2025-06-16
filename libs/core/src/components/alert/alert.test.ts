import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsAlert } from './alert.component'

import './alert.ts'

import sinon from 'sinon'

const html = testingHtml

describe('<gds-alert>', () => {
  describe('Rendering', () => {
    it('should render alert with default values', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert>Default alert</gds-alert>`,
      )
      await el.updateComplete

      expect(el.variant).to.equal('information')
      expect(el.dismissible).to.be.false
      expect(el.buttonText).to.equal('')
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('role')).to.equal('alert')
      expect(card?.getAttribute('aria-label')).to.equal('Information alert')
    })

    it('should render alert with custom variant and icon', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert variant="positive">Success alert</gds-alert>`,
      )
      await el.updateComplete
      expect(el.variant).to.equal('positive')
      const icon =
        el.shadowRoot?.querySelector('.icon') || el.querySelector('.icon')
      expect(icon).to.exist
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
        el.shadowRoot?.querySelector('gds-button:not(.close-btn)') ||
        el.querySelector('gds-button:not(.close-btn)')
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
        el.shadowRoot?.querySelector('gds-button:not(.close-btn)') ||
        el.querySelector('gds-button:not(.close-btn)')
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
    it('should have correct ARIA attributes for variant', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert variant="negative">Error alert</gds-alert>`,
      )
      await el.updateComplete
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('aria-label')).to.equal('Negative alert')
    })
    it('should allow role to be set to status', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert role="status">Status alert</gds-alert>`,
      )
      await el.updateComplete
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('role')).to.equal('status')
    })
  })
})
