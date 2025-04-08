import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsSensitiveNumber } from '@sebgroup/green-core/components/sensitive/number'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/sensitive/number'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsSensitiveNumber', () => {
  it('should change formattedValue when hide is set to true', async () => {
    const element: GdsSensitiveNumber = await fixture(
      html`<gds-sensitive-number
        .locale=${'sv-SE'}
        .value=${1234}
        .hide=${true}
      ></gds-sensitive-number>`,
    )
    await element.updateComplete
    expect(element.formattedValue).not.to.equal('1 234')
  })
})
