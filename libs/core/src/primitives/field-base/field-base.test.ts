import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import type { GdsFieldBase } from '@sebgroup/green-core/primitives/field-base'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/primitives/field-base'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-field-base>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-field-base></gds-field-base>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-field-base')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsFieldBase>(
        html`<gds-field-base></gds-field-base>`,
      )
      await expect(el).to.be.accessible()
    })
  })
})
