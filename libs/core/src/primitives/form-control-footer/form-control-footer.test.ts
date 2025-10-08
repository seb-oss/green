import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'

import '@sebgroup/green-core/primitives/form-control-footer'

import type { GdsFormControlFooter } from '@sebgroup/green-core/components/form-control-footer'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-form-control-footer>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(
      html`<gds-form-control-footer></gds-form-control-footer>`,
    )
    expect(el.getAttribute('gds-element')).to.equal('gds-form-control-footer')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsFormControlFooter>(
        html`<gds-form-control-footer
          .validationMessage=${'hello'}
        ></gds-form-control-footer>`,
      )
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('is a polite live region', async () => {
      const el = await fixture<GdsFormControlFooter>(
        html`<gds-form-control-footer
          .validationMessage=${'hello'}
        ></gds-form-control-footer>`,
      )
      await el.updateComplete
      const liveRegion = el.shadowRoot?.querySelector('[aria-live="polite"]')
      expect(liveRegion).to.exist
    })
  })
})
