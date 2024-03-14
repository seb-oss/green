import { expect, fixture, html } from '@open-wc/testing'
import './grid.ts'
import { GdsGrid } from './grid.js'

describe('GdsGrid', () => {
  let element: GdsGrid
  beforeEach(async () => {
    element = await fixture(html`<gds-grid></gds-grid>`)
  })

  it('renders a slot', () => {
    const slot = element.shadowRoot?.querySelector('slot')
    expect(slot).to.exist
  })

  it('sets default properties', () => {
    const element: GdsGrid = document.createElement('gds-grid') as GdsGrid
    expect(element.columns).to.be.undefined
    expect(element.gap).to.be.undefined
    expect(element.padding).to.be.undefined
    expect(element.fluid).to.be.undefined
  })

  it('accepts only valid GridSizes for columns, gap, and padding', () => {
    const validSizes = ['none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl']
    const invalidSize = 'invalid'

    validSizes.forEach((size) => {
      element.columns = size as any
      element.gap = size as any
      element.padding = size as any

      expect(element.columns).to.equal(size)
      expect(element.gap).to.equal(size)
      expect(element.padding).to.equal(size)
    })

    element.columns = invalidSize as any
    element.gap = invalidSize as any
    element.padding = invalidSize as any

    expect(element.columns).to.not.equal(invalidSize)
    expect(element.gap).to.not.equal(invalidSize)
    expect(element.padding).to.not.equal(invalidSize)
  })
})
