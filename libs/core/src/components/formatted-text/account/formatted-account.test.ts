import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { AccountFormats } from '@sebgroup/green-core/components/formatted-text'
import type { GdsFormattedAccount } from '@sebgroup/green-core/components/formatted-text/account'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/formatted-text/account'

const html = htmlTemplateTagFactory(testingHtml)

const accounts = ['54400023423', 54400023423]

const formats: Record<
  AccountFormats,
  {
    expected: string
  }
> = {
  'seb-account': {
    expected: '5440 00 234 23',
  },
}

describe('GdsFormattedAccount', () => {
  describe('Handles all account formats', () => {
    for (const [format, { expected }] of Object.entries(formats)) {
      for (const account of accounts) {
        it(`Account type: ${typeof account} Format: ${format}`, async () => {
          const element: GdsFormattedAccount = await fixture(
            html`<gds-formatted-account
              .account=${account}
              .format=${format}
            ></gds-formatted-account>`,
          )
          await element.updateComplete

          expect(element.formattedValue).to.equal(expected)
        })
      }
    }
  })
})
