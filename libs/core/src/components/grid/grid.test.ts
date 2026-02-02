import { beforeEach, describe, expect, it } from 'vitest'

import type { GdsGrid } from '@sebgroup/green-core/components/grid'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/grid'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsGrid', () => {
  let element: GdsGrid
  beforeEach(async () => {
    element = await fixture(html`<gds-grid></gds-grid>`)
    await element.updateComplete
  })

  it('renders a slot', () => {
    const slot = element.shadowRoot?.querySelector('slot')
    expect(slot).toBeDefined()
  })

  it('sets columns with single value correctly', async () => {
    ;(element.columns as any) = '2'
    await element.updateComplete
    expect(element.columns).toBe('2')
  })

  it('sets columns with multiple values correctly', async () => {
    ;(element.columns as any) = 'l{8} m{4} s{2}'
    await element.updateComplete
    expect(element.columns).toBe('l{8} m{4} s{2}')
  })

  it('sets gap with single value correctly', async () => {
    ;(element.gap as any) = 'm'
    await element.updateComplete
    expect(element.gap).toBe('m')
  })

  it('sets gap with multiple values correctly', async () => {
    ;(element.gap as any) = 'l{m} m{s} s{xs}'
    await element.updateComplete
    expect(element.gap).toBe('l{m} m{s} s{xs}')
  })

  it('sets padding with single value correctly', async () => {
    ;(element.padding as any) = 'm'
    await element.updateComplete
    expect(element.padding).toBe('m')
  })

  it('sets padding with multiple values correctly', async () => {
    ;(element.padding as any) = 'l{m} m{s} s{xs}'
    await element.updateComplete
    expect(element.padding).toBe('l{m} m{s} s{xs}')
  })
})
