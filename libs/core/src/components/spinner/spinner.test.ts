import { describe, expect, it, vi } from 'vitest'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import type { GdsSpinner } from './gds-spinner'

import '@sebgroup/green-core/components/spinner/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-spinner>', () => {
  describe('Rendering', () => {
    it('should render spinner with default values', async () => {
      const el = await fixture<GdsSpinner>(html`<gds-spinner></gds-spinner>`)
      await el.updateComplete

      expect(el.size).toBe('md')
      expect(el.cover).toBe(false)
      expect(el.fullscreen).toBe(false)
      expect(el.showLabel).toBe(false)
      expect(el.label).toBe('Loading...')
      expect(el.getAttribute('role')).toBe('status')
      expect(el.getAttribute('aria-live')).toBe('polite')
      expect(el.getAttribute('aria-label')).toBe('Loading...')
    })

    it('should render spinner with label', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner label="Loading..." showLabel></gds-spinner>`,
      )
      await el.updateComplete

      const labelElement = el.shadowRoot?.querySelector('.spinner-label')
      expect(labelElement?.textContent?.trim()).toBe('Loading...')
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
      expect(labelElement).toBeNull()
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

        expect(el.getAttribute('size')).toBe(size)
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
      expect(wrapper?.classList.contains('spinner-cover')).toBe(true)
      expect(wrapper?.classList.contains('spinner-backdrop')).toBe(true)
    })

    it('should apply fullscreen mode correctly', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner .fullscreen=${true}></gds-spinner>`,
      )
      await el.updateComplete

      const wrapper = el.shadowRoot?.querySelector('.spinner-wrapper')
      expect(wrapper?.classList.contains('spinner-fullscreen')).toBe(true)
      expect(wrapper?.classList.contains('spinner-backdrop')).toBe(true)
    })
  })

  describe('Events', () => {
    it('should dispatch gds-spinner-connected event on connection', async () => {
      const eventSpy = vi.fn()
      await fixture<GdsSpinner>(
        html`<gds-spinner
          @gds-spinner-connected=${(e: Event) => eventSpy(e)}
        ></gds-spinner>`,
      )

      expect(eventSpy).toHaveBeenCalledOnce()
    })
  })

  describe('Accessibility', () => {
    it('should have correct ARIA attributes', async () => {
      const el = await fixture<GdsSpinner>(
        html`<gds-spinner label="Custom label"></gds-spinner>`,
      )
      await el.updateComplete

      expect(el.getAttribute('role')).toBe('status')
      expect(el.getAttribute('aria-live')).toBe('polite')
      expect(el.getAttribute('aria-label')).toBe('Custom label')
    })
  })
})
