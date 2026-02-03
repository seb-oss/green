import { userEvent } from '@vitest/browser/context'
import { describe, expect, it, vi } from 'vitest'

import type { GdsLink } from '@sebgroup/green-core/components/link'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { aTimeout, fixture, html as testingHtml } from '../../utils/testing'
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

      expect(innerLink).toBeDefined()
    })

    it('should render lead slot', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link
          ><gds-icon-arrow-right slot="lead"></gds-icon-arrow-right
          >Link</gds-link
        >`,
      )

      const slot = el.shadowRoot?.querySelector('slot[name="lead"]')

      expect(slot).toBeDefined()
    })

    it('should render trail slot', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link
          >Link<gds-icon-arrow-right slot="trail"></gds-icon-arrow-right
        ></gds-link>`,
      )

      const slot = el.shadowRoot?.querySelector('slot[name="trail"]')

      expect(slot).toBeDefined()
    })
  })

  describe('API', () => {
    it('should fire click event', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link</gds-link>`,
      )
      const spy = vi.fn()
      el.addEventListener('click', (): void => {
        spy()
      })

      await clickOnElement(el)

      expect(spy).toHaveBeenCalledOnce()
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

      expect(shadowLink?.getAttribute('href')).toBe('javascript:;')
      expect(shadowLink?.getAttribute('rel')).toBe('noopener')
      expect(shadowLink?.getAttribute('target')).toBe('_self')
      expect(shadowLink?.hasAttribute('download')).toBe(true)
      expect(shadowLink?.getAttribute('ping')).toBe('pingUrl')
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest for link', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Test link</gds-link>`,
      )

      await expect(el).toBeAccessible()
    })

    it('should fire click event when pressing enter', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link</gds-link>`,
      )
      const spy = vi.fn()
      el.addEventListener('click', (event: { preventDefault: () => void }) => {
        event.preventDefault()
        spy()
      })
      el.focus()

      await userEvent.keyboard('{Enter}')

      await aTimeout(1)

      expect(spy).toHaveBeenCalledOnce()
    })

    it('should be possible to tab to the link', async () => {
      const el = await fixture<GdsLink>(
        html`<div><input /><gds-link href="javascript:;">Link</gds-link></div>`,
      )
      const input = el.querySelector('input') as HTMLInputElement
      const link = el.querySelector(getScopedTagName('gds-link')) as GdsLink

      input.focus()
      await userEvent.keyboard('{Tab}')

      // skip test in webkit
      if (
        !navigator.userAgent.includes('HeadlessChrome') &&
        !navigator.userAgent.includes('Firefox')
      ) {
        return
      }

      expect(document.activeElement).toBe(link)
    })

    it('should pass aria-label to inner link element and not host', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;" label="Test label"
          >Link text</gds-link
        >`,
      )

      const shadowLink = el.shadowRoot?.querySelector('a')

      expect(el.getAttribute('aria-label')).toBeNull()

      expect(shadowLink?.getAttribute('aria-label')).toBe('Test label')
    })

    it('should not set aria-label on inner link when label prop is not provided', async () => {
      const el = await fixture<GdsLink>(
        html`<gds-link href="javascript:;">Link text</gds-link>`,
      )

      const shadowLink = el.shadowRoot?.querySelector('a')

      expect(el.getAttribute('aria-label')).toBeNull()
      expect(shadowLink?.getAttribute('aria-label')).toBeNull()
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

      expect(shadowLink?.getAttribute('rel')).toBe('noreferrer noopener')
    })
  })
})
