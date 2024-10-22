import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsDivider } from '@sebgroup/green-core/components/divider'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/text'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsDivider', () => {
  let element: GdsDivider
  beforeEach(async () => {
    element = await fixture(html`<gds-divider></gds-divider>`)
    await element.updateComplete
  })
})
