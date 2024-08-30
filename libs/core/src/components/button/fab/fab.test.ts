import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'
import sinon from 'sinon'

import '@sebgroup/green-core/components/fab'
import type { GdsFab } from '@sebgroup/green-core/components/fab'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-fab>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-fab></gds-fab>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-fab')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab> FAB </gds-fab>`)
      await expect(el).to.be.accessible()
    })
  })

  describe('API', () => {})

  describe('Interactions', () => {})
})
