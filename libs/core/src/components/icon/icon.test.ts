import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import { IconArchive } from './icons/archive'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

class TestIcon extends IconArchive {
  public static _regularSVG = '<path d="M5 3l14 9-14 9V3z"/>'
  public static _solidSVG = '<path d="M5 3v18l14-9L5 3z"/>'
}

customElements.define('gds-icon-arrow', TestIcon)

describe('IconArchive', () => {
  let element: TestIcon

  beforeEach(async () => {
    element = await fixture(html`<gds-icon-arrow></gds-icon-arrow>`)
    await element.updateComplete
  })

  it('should instantiate the IconArchive', () => {
    expect(element).to.be.instanceOf(IconArchive)
  })

  it('should render the regular SVG when solid is false', async () => {
    const svg = element.shadowRoot?.querySelector('svg')
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
    ) // Change this line
  })
  it('should be accessible', async () => {
    element = await fixture(
      html`<gds-icon-arrow label="Arrow"></gds-icon-arrow>`,
    )
    expect(element).to.be.accessible()
  })
})
