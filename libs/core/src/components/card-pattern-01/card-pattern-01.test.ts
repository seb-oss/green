import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsCardPattern01 } from './card-pattern-01'

import '@sebgroup/green-core/components/card-pattern-01'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsCardPattern01', () => {
  let element: GdsCardPattern01

  beforeEach(async () => {
    element = await fixture(html`<gds-card-pattern-01></gds-card-pattern-01>`)
    await element.updateComplete
  })

  it('renders as linked card when href is provided', async () => {
    element = await fixture(
      html`<gds-card-pattern-01 href="#test"
        >Card Content</gds-card-pattern-01
      >`,
    )
    const linkedCard = element.shadowRoot?.querySelector('gds-card-linked')
    expect(linkedCard).to.exist
    expect(linkedCard?.getAttribute('href')).to.equal('#test')
  })

  it('renders as static card when no href', async () => {
    element = await fixture(
      html`<gds-card-pattern-01>Card Content</gds-card-pattern-01>`,
    )
    const staticCard = element.shadowRoot?.querySelector('gds-card')
    expect(staticCard).to.exist
  })

  it('handles media content when src provided', async () => {
    element = await fixture(
      html`<gds-card-pattern-01
        src="test.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>`,
    )
    const img = element.shadowRoot?.querySelector('gds-img')
    expect(img).to.exist
    expect(img?.getAttribute('src')).to.equal('test.jpg')
    expect(img?.getAttribute('aspect-ratio')).to.equal('1/1')
  })

  it('handles custom header content', async () => {
    element = await fixture(html`
      <gds-card-pattern-01>
        <div slot="header">Custom Header</div>
      </gds-card-pattern-01>
    `)
    const slottedContent = element.querySelector('[slot="header"]')
    expect(slottedContent).to.exist
    expect(slottedContent?.textContent).to.equal('Custom Header')
  })
})
