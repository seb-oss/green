import { beforeEach, describe, expect, it } from 'vitest'

import type { GdsCard } from '@sebgroup/green-core/components/card'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/card'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsCard', () => {
  let element: GdsCard
  beforeEach(async () => {
    element = await fixture(html`<gds-card></gds-card>`)
    await element.updateComplete
  })

  it('should instantiate', () => {
    expect(element).toBeDefined()
    expect(element.tagName.toLowerCase()).toContain('gds-card')
  })
})
