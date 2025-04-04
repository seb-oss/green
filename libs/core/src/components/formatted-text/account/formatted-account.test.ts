import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { AccountFormats } from '@sebgroup/green-core/components/formatted-text'
import type { GdsFormattedAccount } from '@sebgroup/green-core/components/formatted-text/account'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/formatted-text/number'

const html = htmlTemplateTagFactory(testingHtml)

const accounts = ['54400023423', 54400023423]

const formats: {
  format: AccountFormats
  expected: string
}[] = [
  {
    format: 'decimalsAndThousands',
    expected: '5440 00 234 23',
  },
]

describe('GdsFormattedAccount', () => {
  describe('Handles all number formats with currency', () => {
    for (const { format, expected } of formats) {
      for (const account of accounts) {
        it(`Account type: ${typeof account} Format: ${format}`, async () => {
          const element: GdsFormattedAccount = await fixture(
            html`<gds-formatted-number
              .account=${account}
            ></gds-formatted-number>`,
          )
          await element.updateComplete

          expect(element.formattedValue).to.equal(expected)
        })
      }
    }
  })
})
