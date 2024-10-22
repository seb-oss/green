import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import '@sebgroup/green-core/components/grid'
import type { GdsGrid } from '@sebgroup/green-core/components/grid'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsGrid', () => {
  let element: GdsGrid
  beforeEach(async () => {
    element = await fixture(html`<gds-grid></gds-grid>`)
    await element.updateComplete
  })

  it('renders a slot', () => {
    const slot = element.shadowRoot?.querySelector('slot')
    expect(slot).to.exist
  })

  it('sets columns with single value correctly', async () => {
    ;(element.columns as any) = '2'
    await element.updateComplete
    expect(element.columns).to.equal('2')
  })

  it('sets columns with multiple values correctly', async () => {
    ;(element.columns as any) = 'l{8} m{4} s{2}'
    await element.updateComplete
    expect(element.columns).to.equal('l{8} m{4} s{2}')
  })

  it('sets gap with single value correctly', async () => {
    ;(element.gap as any) = 'm'
    await element.updateComplete
    expect(element.gap).to.equal('m')
  })

  it('sets gap with multiple values correctly', async () => {
    ;(element.gap as any) = 'l{m} m{s} s{xs}'
    await element.updateComplete
    expect(element.gap).to.equal('l{m} m{s} s{xs}')
  })

  it('sets padding with single value correctly', async () => {
    ;(element.padding as any) = 'm'
    await element.updateComplete
    expect(element.padding).to.equal('m')
  })

  it('sets padding with multiple values correctly', async () => {
    ;(element.padding as any) = 'l{m} m{s} s{xs}'
    await element.updateComplete
    expect(element.padding).to.equal('l{m} m{s} s{xs}')
  })
})
