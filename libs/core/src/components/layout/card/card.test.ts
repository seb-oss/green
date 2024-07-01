import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import '@sebgroup/green-core/components/layout/card'
import type { GdsCard } from '@sebgroup/green-core/components/layout/card'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsCard', () => {
  let element: GdsCard
  beforeEach(async () => {
    element = await fixture(html`<gds-card></gds-card>`)
    await element.updateComplete
  })
})
