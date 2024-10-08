import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import '@sebgroup/green-core/components/content/rich-text'
import type { GdsRichText } from '@sebgroup/green-core/components/content/rich-text'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-rich-text>', () => {
  it('needs tests', async () => {
    expect(false).to.be.true
  }
})
