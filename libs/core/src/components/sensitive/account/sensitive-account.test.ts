import { beforeEach, describe, expect, it } from 'vitest'

import type { GdsSensitiveAccount } from '@sebgroup/green-core/components/sensitive/account'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../../utils/testing'

import '@sebgroup/green-core/components/sensitive/account/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsSensitiveAccount', () => {
  let element: GdsSensitiveAccount
  beforeEach(async () => {
    element = await fixture(
      html`<gds-sensitive-account
        .account=${'54400023423'}
        .hide=${true}
      ></gds-sensitive-account>`,
    )
    await element.updateComplete
  })

  it('should instantiate', () => {
    expect(element).toBeDefined()
    expect(element.tagName.toLowerCase()).toContain('gds-sensitive-account')
  })
})
