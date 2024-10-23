import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'
import sinon from 'sinon'

import '@sebgroup/green-core/components/form-control-header'
import type { GdsForm-Control-Header } from '@sebgroup/green-core/components/form-control-header'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-form-control-header>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(
      html`<gds-form-control-header></gds-form-control-header>`,
    )
    expect(el.getAttribute('gds-element')).to.equal('gds-form-control-header')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsForm-Control-Header>(
        html`<gds-form-control-header></gds-form-control-header>`,
      )
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
