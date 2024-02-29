import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { time } from 'console'

import { clickOnElement, timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

import type { GdsGroupedList } from './grouped-list'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-context-menu>', () => {
  describe('API', () => {
    it('should render the label', async () => {
      const el = await fixture<GdsGroupedList>(html`
        <gds-grouped-list label="List">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
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
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </gds-grouped-list>
      `)

      await el.updateComplete

      await expect(el).to.be.accessible()
    })

    it('should have the role of list', async () => {
      const el = await fixture<GdsGroupedList>(html`
        <gds-grouped-list label="List">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </gds-grouped-list>
      `)

      await el.updateComplete

      expect(el).to.have.property('role', 'list')
    })
  })
})
