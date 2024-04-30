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

  it('sets default properties', () => {
    const element: GdsGrid = document.createElement('gds-grid') as GdsGrid
    expect(element.columns).to.be.undefined
    expect(element.gap).to.be.undefined
    expect(element.padding).to.be.undefined
    expect(element.autoColumns).to.be.undefined
  })
})
