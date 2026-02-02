import { beforeEach, describe, expect, it } from 'vitest'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import type { GdsDiv } from '.'

import './div'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsDiv', () => {
  let element: GdsDiv
  beforeEach(async () => {
    element = await fixture(html`<gds-div></gds-div>`)
    await element.updateComplete
  })

  it('should instantiate', () => {
    expect(element).toBeDefined()
    expect(element.tagName.toLowerCase()).toContain('gds-div')
  })
})
