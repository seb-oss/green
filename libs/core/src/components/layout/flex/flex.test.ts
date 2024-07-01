import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import '@sebgroup/green-core/components/layout/card'
import type { GdsFlex } from '@sebgroup/green-core/components/layout/flex'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsFlex', () => {
  let element: GdsFlex
  beforeEach(async () => {
    element = await fixture(html`<gds-flex></gds-flex>`)
    await element.updateComplete
  })
})
