import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'
import sinon from 'sinon'

import '../../../../../dist/libs/core/src/index.js'
import type { GdsSegmentedControl } from './segmented-control'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-segmented-control>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(
      html`<gds-segmented-control></gds-segmented-control>`
    )
    expect(el.getAttribute('gds-element')).to.equal('gds-segmented-control')
  })
  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture(
        html`<gds-segmented-control>
          <gds-segment>Segment 1</gds-segment>
          <gds-segment>Segment 2</gds-segment>
        </gds-segmented-control>`
      )
      await expect(el).to.be.accessible()
    })
  })
})
