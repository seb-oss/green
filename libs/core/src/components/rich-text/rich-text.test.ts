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

  describe('API', () => {
    it('should set and get the content of the shadowRoot from innerHTML', async () => {
      const el: GdsRichText = await fixture(
        html`<gds-rich-text></gds-rich-text>`,
      )
      el.innerHTML = '<p>Text</p>'
      expect(el.shadowRoot?.querySelector('p')?.textContent).to.equal('Text')
      expect(el.innerHTML).to.equal('<p>Text</p>')
    })

    it('should forward querySelector to the shadowRoot', async () => {
      const el: GdsRichText = await fixture(
        html`<gds-rich-text><p>Text</p></gds-rich-text>`,
      )
      expect(el.querySelector('p')?.textContent).to.equal('Text')
    })

    it('should forward querySelectorAll to the shadowRoot', async () => {
      const el: GdsRichText = await fixture(
        html`<gds-rich-text
          ><p>Text</p>
          <p>Text 2</p></gds-rich-text
        >`,
      )
      expect(el.querySelectorAll('p')).to.have.lengthOf(2)
    })
  })
})
