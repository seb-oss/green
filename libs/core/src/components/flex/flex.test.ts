import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import '@sebgroup/green-core/components/card'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsFlex } from '@sebgroup/green-core/components/flex'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsFlex', () => {
  let element: GdsFlex
  beforeEach(async () => {
    element = await fixture(html`<gds-flex></gds-flex>`)
    await element.updateComplete
  })
})
