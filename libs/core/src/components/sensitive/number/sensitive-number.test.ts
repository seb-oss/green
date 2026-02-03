import { describe, expect, it } from 'vitest'

import type { GdsSensitiveNumber } from '@sebgroup/green-core/components/sensitive/number'

import { numberFormats } from '@sebgroup/green-core/components/formatted-text'
import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../../utils/testing'

import '@sebgroup/green-core/components/sensitive/number/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsSensitiveNumber', () => {
  it('should change formattedValue when hide is set to true', async () => {
    const format = 'decimalsAndThousands'
    const value = 1234
    const locale = 'sv-SE'
    const decimals = 3

    const element: GdsSensitiveNumber = await fixture(
      html`<gds-sensitive-number
        .locale=${locale}
        .value=${value}
        .format=${format}
        .decimals=${decimals}
        .hide=${true}
      ></gds-sensitive-number>`,
    )
    await element.updateComplete
    expect(element.formattedValue).not.toBe(
      numberFormats[format](value, locale, undefined, decimals),
    )
  })
})
