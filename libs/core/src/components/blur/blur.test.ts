import { fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsBlur } from '@sebgroup/green-core/components/blur'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/blur/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsBlur', () => {
  let element: GdsBlur
  beforeEach(async () => {
    element = await fixture(html`<gds-blur></gds-blur>`)
    await element.updateComplete
  })
})
