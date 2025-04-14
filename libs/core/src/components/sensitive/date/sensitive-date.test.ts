import { fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsSensitiveDate } from '@sebgroup/green-core/components/sensitive/date'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/sensitive/date/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsSensitiveDate', () => {
  let element: GdsSensitiveDate
  beforeEach(async () => {
    element = await fixture(
      html`<gds-sensitive-date
        .value=${new Date()}
        .locale=${'sv-SE'}
        .hide=${true}
      ></gds-sensitive-date>`,
    )
    await element.updateComplete
  })
})
