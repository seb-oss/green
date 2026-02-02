import { beforeEach, describe, expect, it } from 'vitest'

import type { GdsBlur } from '@sebgroup/green-core/components/blur'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/blur/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsBlur', () => {
  let element: GdsBlur
  beforeEach(async () => {
    element = await fixture(html`<gds-blur></gds-blur>`)
    await element.updateComplete
  })

  it('should instantiate', () => {
    expect(element).toBeDefined()
    expect(element.tagName.toLowerCase()).toContain('gds-blur')
  })
})
