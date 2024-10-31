import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import '@sebgroup/green-core/components/rich-text'

import type { GdsRichText } from '@sebgroup/green-core/components/rich-text'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-rich-text>', () => {
  describe('Rendering', () => {
    it('should render the component', async () => {
      const el: GdsRichText = await fixture(
        html`<gds-rich-text>Text</gds-rich-text>`,
      )
      expect(el).to.be.ok
    })

    it('should capture the DOM sub-tree into the shadowRoot', async () => {
      const el: GdsRichText = await fixture(
        html`<gds-rich-text><p>Text</p></gds-rich-text>`,
      )
      expect(el.shadowRoot?.querySelector('p')).to.be.ok
    })

    it('should overwrite the current shadowRoot content with the new DOM sub-tree', async () => {
      const el: GdsRichText = await fixture(
        html`<gds-rich-text><p>Text</p></gds-rich-text>`,
      )
      el.innerHTML = '<p>Text 2</p>'
      expect(el.shadowRoot?.querySelector('p')?.textContent).to.equal('Text 2')
    })
  })
})
