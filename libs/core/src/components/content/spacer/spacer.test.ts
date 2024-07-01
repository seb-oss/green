import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import '@sebgroup/green-core/components/content/text'
import type { GdsSpacer } from '@sebgroup/green-core/components/content/spacer'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsSpacer', () => {
  let element: GdsSpacer
  beforeEach(async () => {
    element = await fixture(html`<gds-spacer></gds-spacer>`)
    await element.updateComplete
  })
})
