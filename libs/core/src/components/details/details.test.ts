import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '../../utils/helpers/custom-element-scoping'

import type { GdsDetails } from './details'

import '@sebgroup/green-core/components/details'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-details>', () => {
  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary">
          This is the details content
        </gds-details>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('should be accessible when open', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary" open>
          This is the details content
        </gds-details>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })
})
