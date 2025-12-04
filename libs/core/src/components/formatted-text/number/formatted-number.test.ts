import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { NumberFormats } from '@sebgroup/green-core/components/formatted-text'
import type { GdsFormattedNumber } from '@sebgroup/green-core/components/formatted-text/number'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/formatted-text/number'

const html = htmlTemplateTagFactory(testingHtml)

const values = ['1234.5', 1234.5]

const locales = ['sv-SE', 'en-GB'] as const
const currencies = ['SEK', 'EUR'] as const
const decimals = 3

const formats: Record<
  NumberFormats,
  {
    expected: Record<
      (typeof locales)[number],
      Record<(typeof currencies)[number] | 'No Currency', string>
    >
  }
> = {
  decimalsAndThousands: {
    expected: {
      'sv-SE': {
        'No Currency': '1 234,500',
        SEK: '1 234,500 kr',
        EUR: '1 234,500 €',
      },
      'en-GB': {
        'No Currency': '1,234.500',
        SEK: 'SEK 1,234.500',
        EUR: '€1,234.500',
      },
    },
  },
}

describe('GdsFormattedNumber', () => {
  describe('Handles all number formats', () => {
    for (const currency of [undefined, ...currencies]) {
      for (const [format, { expected }] of Object.entries(formats)) {
        for (const locale of locales) {
          const currencyLabel = currency ?? 'No Currency'

          for (const value of values) {
            it(`Value type: ${typeof value} Format: ${format} Locale: ${locale} Currency: ${currencyLabel} Decimals: ${decimals}`, async () => {
              const element: GdsFormattedNumber = await fixture(
                html`<gds-formatted-number
                  .value=${value}
                  .locale=${locale}
                  .currency=${currency}
                  .format=${format}
                  .decimals=${decimals}
                ></gds-formatted-number>`,
              )
              await element.updateComplete

              expect(element.formattedValue).to.equal(
                expected[locale][currencyLabel],
              )
            })
          }
        }
      }
    }
  })
})
