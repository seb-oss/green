import { fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsCard } from '@sebgroup/green-core/components/card'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsCard', () => {
  let element: GdsCard
  beforeEach(async () => {
    element = await fixture(html`<gds-card></gds-card>`)
    await element.updateComplete
  })
})
