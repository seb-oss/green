import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import '@sebgroup/green-core/components/text'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsText } from '@sebgroup/green-core/components/text'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsText', () => {
  let element: GdsText
  beforeEach(async () => {
    element = await fixture(html`<gds-text></gds-text>`)
    await element.updateComplete
  })
})
