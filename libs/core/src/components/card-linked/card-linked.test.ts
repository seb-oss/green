import { beforeEach, describe, expect, it } from 'vitest'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import type { GdsCardLinked } from './card-linked'

import '@sebgroup/green-core/components/card-linked'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-card-linked>', () => {
  let element: GdsCardLinked

  beforeEach(async () => {
    element = await fixture(html`<gds-card-linked></gds-card-linked>`)
    await element.updateComplete
  })

  it('renders link when href is provided', async () => {
    element = await fixture(
      html`<gds-card-linked href="#test">Link Content</gds-card-linked>`,
    )
    const link = element.shadowRoot?.querySelector('a')
    expect(link).toBeDefined()
    expect(link?.getAttribute('href')).toBe('#test')
  })

  it('adds security attributes for external links', async () => {
    element = await fixture(
      html`<gds-card-linked href="#" target="_blank"
        >External Link</gds-card-linked
      >`,
    )
    const link = element.shadowRoot?.querySelector('a')
    expect(link?.getAttribute('rel')).toBe('noreferrer noopener')
  })

  it('handles download attribute', async () => {
    element = await fixture(
      html`<gds-card-linked href="#" download="file.pdf"
        >Download</gds-card-linked
      >`,
    )
    const link = element.shadowRoot?.querySelector('a')
    expect(link?.getAttribute('download')).toBe('file.pdf')
  })

  it('handles ping attribute', async () => {
    element = await fixture(
      html`<gds-card-linked href="#" ping="pingUrl"
        >Ping Link</gds-card-linked
      >`,
    )
    const link = element.shadowRoot?.querySelector('a')
    expect(link?.getAttribute('ping')).toBe('pingUrl')
  })
})
