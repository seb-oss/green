import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsGroupedList } from '@sebgroup/green-core/components/grouped-list'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/grouped-list'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-context-menu>', () => {
  describe('API', () => {
    it('should render the label', async () => {
      const el = await fixture<GdsGroupedList>(html`
        <gds-grouped-list label="List">
          <gds-list-item>Item 1</gds-list-item>
          <gds-list-item>Item 2</gds-list-item>
          <gds-list-item>Item 3</gds-list-item>
        </gds-grouped-list>
      `)

      await el.updateComplete

      const label = el.shadowRoot!.querySelector('.gds-list-heading')!
      expect(label).to.exist
      expect(label).to.have.property('innerText', 'List')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsGroupedList>(html`
        <gds-grouped-list label="List">
          <gds-list-item>Item 1</gds-list-item>
          <gds-list-item>Item 2</gds-list-item>
          <gds-list-item>Item 3</gds-list-item>
        </gds-grouped-list>
      `)

      await el.updateComplete

      await expect(el).to.be.accessible()
    })
  })
})
