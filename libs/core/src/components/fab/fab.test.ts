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

  describe('API', () => {
    it('has the `position` property', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab></gds-fab>`)
      expect(el.position).to.be.undefined
      el.position = 'fixed'
      expect(el.position).to.equal('fixed')
    })

    it('has the `transform` property', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab></gds-fab>`)
      expect(el.transform).to.be.undefined
      el.transform = 'translate(10px, 10px)'
      expect(el.transform).to.equal('translate(10px, 10px)')
    })

    it('has the `inset` property', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab></gds-fab>`)
      expect(el.inset).to.be.undefined
      el.inset = 'auto 5rem 5rem auto'
      expect(el.inset).to.equal('auto 5rem 5rem auto')
    })
  })
})
