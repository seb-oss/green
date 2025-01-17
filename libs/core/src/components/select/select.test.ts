import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type { GdsSelect } from '@sebgroup/green-core/components/select/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/select/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-select>', () => {
  describe('Rendering', () => {
    it('should render a placeholder', async () => {
      const el = await fixture<GdsSelect>(
        html`<gds-select placeholder="Select Placeholder"></gds-select>`,
      )
      const labelEl = el.shadowRoot?.querySelector('label#placeholder')
      expect(labelEl).to.exist
      expect(labelEl?.textContent).to.contain('Select Placeholder')
    })
  })
  describe('Accessibility', () => {
    it('should pass axe smoketest', async () => {
      const el = await fixture<GdsSelect>(
        html`<gds-select label="Select Label" supporting-text="Supporting Text">
          <select>
            <option value="">Please select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </gds-select>`,
      )
      await expect(el).to.be.accessible()
    })
    it('should have a aria-describedby attribute that matches the supporting text id', async () => {
      const el = await fixture<GdsSelect>(
        html`<gds-select supporting-text="My supporting text">
          <select></select>
        </gds-select>`,
      )
      const inputEl = el.querySelector('select') // Look in light DOM instead of shadow DOM
      const supportingTextEl = el.shadowRoot?.querySelector('#supporting-text')
      expect(inputEl?.getAttribute('aria-describedby')).to.equal(
        supportingTextEl?.id,
      )
    })
  })
})
