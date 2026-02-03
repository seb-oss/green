import { describe, expect, it, vi } from 'vitest'

import type { GdsDetails } from '@sebgroup/green-core/components/details'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import {
  clickOnElement,
  fixture,
  html as testingHtml,
  waitUntil,
} from '../../utils/testing'

import '@sebgroup/green-core/components/details'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-details>', () => {
  describe('Basic Functionality', () => {
    it('should render summary text from attribute', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary">Content</gds-details>
      `)
      const summaryLabel = el.shadowRoot?.querySelector('.summary-label')
      expect(summaryLabel?.textContent?.trim()).toBe('Test Summary')
    })

    it('should render default summary when not provided', async () => {
      const el = await fixture<GdsDetails>(
        html`<gds-details>Content</gds-details>`,
      )
      const summaryLabel = el.shadowRoot?.querySelector('.summary-label')
      expect(summaryLabel?.textContent?.trim()).toBe('Summary')
    })
  })

  describe('Open State', () => {
    it('should be closed by default', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary">Content</gds-details>
      `)
      expect(el.getAttribute('open')).toBeNull()
    })

    it('should be open when open attribute is set', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary" open>Content</gds-details>
      `)
      expect(el.getAttribute('open')).not.toBeNull()
    })

    it('should toggle state when clicked', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary">Content</gds-details>
      `)

      const summary = el.shadowRoot?.querySelector('.summary') as HTMLElement
      await clickOnElement(summary)
      await waitUntil(() => el.getAttribute('open') !== null)
      expect(el.getAttribute('open')).not.toBeNull()

      await clickOnElement(summary)
      await waitUntil(() => el.getAttribute('open') === null)
      expect(el.getAttribute('open')).toBeNull()
    })
  })

  describe('UI State Events', () => {
    it('should emit gds-ui-state event when toggled', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Content</gds-details>
      `)

      const stateHandler = vi.fn()
      el.addEventListener('gds-ui-state', stateHandler)

      const summary = el.shadowRoot?.querySelector('.summary') as HTMLElement
      await clickOnElement(summary)

      await waitUntil(() => stateHandler.mock.calls.length === 1)
      expect(stateHandler.mock.calls[0][0].detail).toBe(true)
    })
  })

  describe('Group Synchronization', () => {
    it('should close other details in same group', async () => {
      const container = await fixture(html`
        <div>
          <gds-details name="group1" summary="Details 1">Content 1</gds-details>
          <gds-details name="group1" summary="Details 2">Content 2</gds-details>
        </div>
      `)

      const details = Array.from(
        container.querySelectorAll(getScopedTagName('gds-details')),
      ) as GdsDetails[]

      const summary1 = details[0].shadowRoot?.querySelector(
        '.summary',
      ) as HTMLElement
      await clickOnElement(summary1)
      await waitUntil(() => details[0].getAttribute('open') !== null)

      expect(details[0].getAttribute('open')).not.toBeNull()
      expect(details[1].getAttribute('open')).toBeNull()

      const summary2 = details[1].shadowRoot?.querySelector(
        '.summary',
      ) as HTMLElement
      await clickOnElement(summary2)
      await waitUntil(() => details[1].getAttribute('open') !== null)

      expect(details[0].getAttribute('open')).toBeNull()
      expect(details[1].getAttribute('open')).not.toBeNull()
    })

    it('should not affect details in different groups', async () => {
      const container = await fixture(html`
        <div>
          <gds-details name="group1" summary="Details 1">Content 1</gds-details>
          <gds-details name="group2" summary="Details 2">Content 2</gds-details>
        </div>
      `)

      const details = Array.from(
        container.querySelectorAll(getScopedTagName('gds-details')),
      ) as GdsDetails[]

      const summary1 = details[0].shadowRoot?.querySelector(
        '.summary',
      ) as HTMLElement
      await clickOnElement(summary1)
      await waitUntil(() => details[0].getAttribute('open') !== null)

      const summary2 = details[1].shadowRoot?.querySelector(
        '.summary',
      ) as HTMLElement
      await clickOnElement(summary2)
      await waitUntil(() => details[1].getAttribute('open') !== null)

      expect(details[0].getAttribute('open')).not.toBeNull()
      expect(details[1].getAttribute('open')).not.toBeNull()
    })
  })
})
