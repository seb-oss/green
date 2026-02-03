import { describe, expect, it } from 'vitest'

import type { GdsBadge } from '@sebgroup/green-core/components/badge'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml, waitUntil } from '../../utils/testing'

import '@sebgroup/green-core/components/badge'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-badge>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture<GdsBadge>(html`<gds-badge></gds-badge>`)
    expect(el.getAttribute('gds-element')).toBe('gds-badge')
  })

  it('should render with default variant class', async () => {
    const el = await fixture<GdsBadge>(html`<gds-badge>Info</gds-badge>`)
    const badge = el.shadowRoot?.querySelector('.badge')
    expect(badge).not.toBeNull()
    expect(badge?.classList.contains('information')).toBe(true)
  })

  it('should apply variant class', async () => {
    const el = await fixture<GdsBadge>(
      html`<gds-badge variant="warning">Warn</gds-badge>`,
    )
    const badge = el.shadowRoot?.querySelector('.badge')
    expect(badge?.classList.contains('warning')).toBe(true)
  })

  it('should apply small size class when size is small', async () => {
    const el = await fixture<GdsBadge>(
      html`<gds-badge size="small">Small</gds-badge>`,
    )
    const badge = el.shadowRoot?.querySelector('.badge')
    expect(badge?.classList.contains('small')).toBe(true)
  })

  it('should reflect notification attribute', async () => {
    const el = await fixture<GdsBadge>(
      html`<gds-badge notification>Notify</gds-badge>`,
    )
    expect(el.hasAttribute('notification')).toBe(true)
  })

  it('should reflect rounded attribute', async () => {
    const el = await fixture<GdsBadge>(
      html`<gds-badge rounded>Rounded</gds-badge>`,
    )
    expect(el.hasAttribute('rounded')).toBe(true)
  })

  it('should add with-content class when notification has main slot content', async () => {
    const el = await fixture<GdsBadge>(
      html`<gds-badge notification>99+</gds-badge>`,
    )
    await waitUntil(() => el.shadowRoot?.querySelector('.badge') !== null)
    const badge = el.shadowRoot?.querySelector('.badge')
    await waitUntil(() => badge?.classList.contains('with-content') === true)
    expect(badge?.classList.contains('with-content')).toBe(true)
  })

  it('should not render lead slot when size is small and notification is true', async () => {
    const el = await fixture<GdsBadge>(
      html`<gds-badge size="small" notification>1</gds-badge>`,
    )
    const leadSlot = el.shadowRoot?.querySelector('slot[name="lead"]')
    expect(leadSlot).toBeNull()
  })

  it('is accessible with text content', async () => {
    const el = await fixture<GdsBadge>(html`<gds-badge>New</gds-badge>`)
    await expect(el).toBeAccessible()
  })
})
