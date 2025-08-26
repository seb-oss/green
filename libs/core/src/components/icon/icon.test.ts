import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { IconAi } from './icons/ai'

const html = htmlTemplateTagFactory(testingHtml)

class TestIcon extends IconAi {
  public static _regularSVG = '<path d="M5 3l14 9-14 9V3z"/>'
  public static _solidSVG = '<path d="M5 3v18l14-9L5 3z"/>'
  public static _width = 24
  public static _height = 24
  public static _viewBox = '0 0 24 24'
}

customElements.define('gds-icon-ai', TestIcon)

describe('IconAi', () => {
  let element: TestIcon

  beforeEach(async () => {
    element = await fixture(html`<gds-icon-ai></gds-icon-ai>`)
    await element.updateComplete
  })

  it('should instantiate the IconAi', () => {
    expect(element).to.be.instanceOf(IconAi)
  })

  it('should render the regular SVG with correct attributes', async () => {
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg).to.have.attribute('viewBox', '0 0 24 24')
    expect(svg).to.have.attribute('role', 'presentation')
    expect(svg?.innerHTML.trim()).to.equal(
      '<path d="M5 3l14 9-14 9V3z"></path>',
    )
  })

  it('should render the solid SVG when solid is true', async () => {
    element.solid = true
    await element.updateComplete
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg?.innerHTML.trim()).to.equal(
      '<path d="M5 3v18l14-9L5 3z"></path>',
    )
  })

  it('should be accessible with label', async () => {
    element = await fixture(html`<gds-icon-ai label="Arrow"></gds-icon-ai>`)
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg).to.have.attribute('aria-label', 'Arrow')
    expect(svg).to.not.have.attribute('role')
    expect(element).to.be.accessible()
  })

  it('should apply size property correctly', async () => {
    element = await fixture(html`<gds-icon-ai size="xl"></gds-icon-ai>`)

    // This only checks that the style expression property got initialized.
    // Computed style never changes in the test runner environment for unknown reason.
    expect(element._dynamicStylesController.has('sep_size')).to.be.true
    expect((element as any).__size).to.equal('xl')
  })

  it('should apply stroke width when specified', async () => {
    element = await fixture(html`<gds-icon-ai stroke="2"></gds-icon-ai>`)
    const path = element.shadowRoot?.querySelector('path')
    expect(path).to.have.attribute('stroke-width', '2')
  })

  it('should be presentational when no label is provided', async () => {
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg).to.have.attribute('role', 'presentation')
    expect(svg).to.not.have.attribute('aria-label')
  })

  it('should apply color property correctly', async () => {
    element = await fixture(html`<gds-icon-ai color="primary"></gds-icon-ai>`)
    await element.updateComplete
    expect((element as any).__color).to.equal('primary')
  })

  it('should apply color with transparency correctly', async () => {
    element = await fixture(
      html`<gds-icon-ai color="primary/0.2"></gds-icon-ai>`,
    )
    await element.updateComplete
    expect((element as any).__color).to.equal('primary/0.2')
  })
})
