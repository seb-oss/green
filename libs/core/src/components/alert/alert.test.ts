import { userEvent } from '@vitest/browser/context'
import { describe, expect, it, vi } from 'vitest'

import type { GdsAlert } from '@sebgroup/green-core/components/alert'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/alert'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-alert>', () => {
  describe('Rendering', () => {
    it('should render alert with default values', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert label="Information alert">Default alert</gds-alert>`,
      )
      await el.updateComplete

      expect(el.variant).toBe('information')
      expect(el.dismissible).toBe(false)
      expect(el.buttonLabel).toBe('')
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('role')).toBe('alert')
      expect(card?.getAttribute('aria-label')).toBe('Information alert')
    })

    it('should render alert with custom variant and icon', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert variant="positive">Success alert</gds-alert>`,
      )
      await el.updateComplete
      expect(el.variant).toBe('positive')
      const icon =
        el.shadowRoot?.querySelector('.icon') || el.querySelector('.icon')
      expect(icon).toBeDefined()
    })

    it('should render dismissible alert with close button', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert dismissible>Dismiss me</gds-alert>`,
      )
      await el.updateComplete
      const closeBtn =
        el.shadowRoot?.querySelector('.close') || el.querySelector('.close')
      expect(closeBtn).toBeDefined()
    })

    it('should render alert with action button', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert button-label="Action">With action</gds-alert>`,
      )
      await el.updateComplete
      const btn = el.shadowRoot?.querySelector('.action')
      expect(btn).toBeDefined()
      expect(btn?.textContent?.trim()).toBe('Action')
    })
  })

  describe('Events', () => {
    it('should fire close event when dismissed', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert dismissible>Dismiss me</gds-alert>`,
      )
      await el.updateComplete
      const closeBtn = el.shadowRoot?.querySelector('.close') as HTMLElement
      const closeSpy = vi.fn()
      el.addEventListener('gds-close', closeSpy)
      closeBtn.focus()
      await userEvent.keyboard('{Enter}')
      await el.updateComplete
      expect(closeSpy).toHaveBeenCalledOnce()
    })

    it('should fire action event when action button is clicked', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert button-label="Action">With action</gds-alert>`,
      )
      await el.updateComplete
      const btn = el.shadowRoot?.querySelector('.action') as HTMLElement
      const actionSpy = vi.fn()
      el.addEventListener('gds-action', actionSpy)
      btn.focus()
      await userEvent.keyboard('{Enter}')
      await el.updateComplete
      expect(actionSpy).toHaveBeenCalledOnce()
    })
  })

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert label="Accessible alert">Test alert</gds-alert>`,
      )
      await el.updateComplete

      await expect(el).toBeAccessible()
    })
    it('should have correct ARIA attributes for variant', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert variant="negative" label="Negative alert"
          >Error alert</gds-alert
        >`,
      )
      await el.updateComplete
      const card = el.shadowRoot?.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('aria-label')).toBe('Negative alert')
    })
    it('should allow role to be set to status', async () => {
      const el = await fixture<GdsAlert>(
        html`<gds-alert role="status">Status alert</gds-alert>`,
      )
      await el.updateComplete
      const card =
        el.shadowRoot?.querySelector('[gds-element="gds-card"]') ||
        el.querySelector('[gds-element="gds-card"]')
      expect(card?.getAttribute('role')).toBe('status')
    })
  })
})
