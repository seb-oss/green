import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'

import '@sebgroup/green-core/components/select'

import type { GdsSelect } from '@sebgroup/green-core/components/select'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-select>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-select></gds-select>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-select')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsSelect>(html`<gds-select></gds-select>`)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })

  describe('API', () => {
    // Add actual API tests here!
    it('should have API tests', async () => {
      expect(false).to.be.true
    })
  })

  describe('Interactions', () => {
    // Add actual interaction tests here! (things like keyboard nav, clicking on things behave as expected, etc)
    it('should have Interaction tests', async () => {
      expect(false).to.be.true
    })
  })
})
