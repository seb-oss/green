import { beforeEach, describe, expect, it } from 'vitest'

import type { GdsDivider } from '@sebgroup/green-core/components/divider'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/text'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsDivider', () => {
  let element: GdsDivider
  beforeEach(async () => {
    element = await fixture(html`<gds-divider></gds-divider>`)
    await element.updateComplete
  })

  it('should instantiate', () => {
    expect(element).toBeDefined()
    expect(element.tagName.toLowerCase()).toContain('gds-divider')
  })
})
