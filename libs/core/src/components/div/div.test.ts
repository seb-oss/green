import { expect, describe, it, beforeEach } from 'vitest'
import { fixture, html as testingHtml } from '../../utils/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsDiv } from '.'

import './div'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsDiv', () => {
  let element: GdsDiv
  beforeEach(async () => {
    element = await fixture(html`<gds-div></gds-div>`)
    await element.updateComplete
  })
})
