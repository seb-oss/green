import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import type { GdsFormControlHeader } from '@sebgroup/green-core/components/form-control-header'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/primitives/form-control-header'

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
      const el = await fixture<GdsFormControlHeader>(
        html`<gds-form-control-header></gds-form-control-header>`,
      )
      await expect(el).to.be.accessible()
    })
  })

  describe('API', () => {
    it('should fire a gds-ui-state event when the extended supporting text is toggled', async () => {
      const el = await fixture<GdsFormControlHeader>(
        html`<gds-form-control-header>
          <label slot="label">Label</label>
          <span slot="extended-supporting-text">Supporting text</span>
        </gds-form-control-header>`,
      )
      const button = el.shadowRoot?.querySelector('[gds-element=gds-button]')
      expect(button).to.exist
      const eventSpy = sinon.spy()
      el.addEventListener('gds-ui-state', eventSpy)
      button?.click()
      await el.updateComplete
      expect(eventSpy).to.have.been.calledOnce
    })
  })

  describe('Interactions', () => {
    it('should show the extended supporting text when the button is clicked', async () => {
      const el = await fixture<GdsFormControlHeader>(
        html`<gds-form-control-header>
          <label slot="label">Label</label>
          <span slot="extended-supporting-text">Supporting text</span>
        </gds-form-control-header>`,
      )

      await aTimeout(0)
      await el.updateComplete

      const button = el.shadowRoot?.querySelector('[gds-element=gds-button]')
      expect(button).to.exist
      button?.click()
      await el.updateComplete
      const extSupTxt = el.shadowRoot?.querySelector(
        '.extended-supporting-text',
      )
      expect(extSupTxt).to.exist
    })
  })
})
