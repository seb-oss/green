import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '../../utils/helpers/custom-element-scoping'

import type { GdsAccordion } from './accordion'

import '@sebgroup/green-core/components/accordion'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-accordion>', () => {
  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsAccordion>(html`
        <gds-accordion summary="Test Summary">
          This is the accordion content
        </gds-accordion>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('should be accessible when open', async () => {
      const el = await fixture<GdsAccordion>(html`
        <gds-accordion summary="Test Summary" open>
          This is the accordion content
        </gds-accordion>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })
})
