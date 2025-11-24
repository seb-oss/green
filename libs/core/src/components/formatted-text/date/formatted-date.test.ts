import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { DateTimeFormats } from '@sebgroup/green-core/components/formatted-text'
import type { GdsFormattedDate } from '@sebgroup/green-core/components/formatted-text/date'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/formatted-text/date'

const html = htmlTemplateTagFactory(testingHtml)

const values = [new Date(2025, 1, 25, 14, 17, 30), '2025-02-25T14:17:30']

const locales = ['sv-SE', 'en-GB'] as const

const formats: Record<
  DateTimeFormats,
  { expected: Record<(typeof locales)[number], string> }
> = {
  dateOnlyNumbers: {
    expected: {
      'sv-SE': '2025-02-25',
      'en-GB': '25/02/2025',
    },
  },
  dateLong: {
    expected: {
      'sv-SE': '25 februari 2025',
      'en-GB': '25 February 2025',
    },
  },
  dateLongWithWeekday: {
    expected: {
      'sv-SE': 'tisdag 25 februari 2025',
      'en-GB': 'Tuesday 25 February 2025',
    },
  },
  dateShort: {
    expected: {
      'sv-SE': '25 feb 2025',
      'en-GB': '25 Feb 2025',
    },
  },
  dateShortWithWeekday: {
    expected: {
      'sv-SE': 'tis 25 feb 2025',
      'en-GB': 'Tue 25 Feb 2025',
    },
  },
  timeShort: {
    expected: {
      'sv-SE': '14:17',
      'en-GB': '14:17',
    },
  },
  timeLong: {
    expected: {
      'sv-SE': '14:17:30',
      'en-GB': '14:17:30',
    },
  },
}

var formats_webkit = {
  dateLongWithWeekday: {
    expected: {
      'sv-SE': 'tisdag 25 februari 2025',
      'en-GB': 'Tuesday, 25 February 2025',
    },
  },
}

describe('GdsFormattedDate', () => {
  describe('Handles all date time formats', () => {
    for (const [format, { expected }] of Object.entries(formats)) {
      for (const locale of locales) {
        for (const value of values) {
          it(`Value: ${typeof value} Format: ${format} Locale: ${locale}`, async () => {
            const element: GdsFormattedDate = await fixture(
              html`<gds-formatted-date
                .locale=${locale}
                .format=${format}
                .value=${value}
              ></gds-formatted-date>`,
            )
            await element.updateComplete

            expect(element.formattedValue).to.satisfy((val: string) => {
              return (
                val === expected[locale as (typeof locales)[number]] ||
                val ===
                  formats_webkit[format as keyof typeof formats_webkit]
                    ?.expected?.[locale as (typeof locales)[number]]
              )
            })
          })
        }
      }
    }
  })
})
