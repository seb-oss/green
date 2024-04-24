import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'
import sinon from 'sinon'

import '@sebgroup/green-core/components/segmented-control'
import type { GdsSegmentedControl } from '@sebgroup/green-core/components/segmented-control'
import { GdsSegment } from '@sebgroup/green-core/components/segmented-control/segment'

import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-segmented-control>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(
      html`<gds-segmented-control></gds-segmented-control>`,
    )
    expect(el.getAttribute('gds-element')).to.equal('gds-segmented-control')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsSegment>(
        html`<gds-segmented-control>
          <gds-segment>Segment 1</gds-segment>
          <gds-segment>Segment 2</gds-segment>
        </gds-segmented-control>`,
      )
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })

  describe('API', () => {
    it('should set the selected segment based on the value property', async () => {
      const el = await fixture<GdsSegment>(
        html`<gds-segmented-control value="2">
          <gds-segment value="1">Segment 1</gds-segment>
          <gds-segment value="2" id="seg">Segment 2</gds-segment>
        </gds-segmented-control>`,
      )
      await el.updateComplete
      const seg = el.querySelector('#seg') as GdsSegment
      expect(seg.selected).to.be.true
    })

    it('should set the value property based on the selected segment', async () => {
      const el = await fixture<GdsSegment>(
        html`<gds-segmented-control>
          <gds-segment value="1">Segment 1</gds-segment>
          <gds-segment value="2" id="seg">Segment 2</gds-segment>
        </gds-segmented-control>`,
      )
      await el.updateComplete
      const seg = el.querySelector('#seg') as GdsSegment
      seg.click()
      await el.updateComplete
      expect(el.value).to.equal('2')
    })

    it('should select the segment when the value property is updated', async () => {
      const el = await fixture<GdsSegment>(
        html`<gds-segmented-control value="1">
          <gds-segment value="1">Segment 1</gds-segment>
          <gds-segment value="2" id="seg">Segment 2</gds-segment>
        </gds-segmented-control>`,
      )
      await el.updateComplete
      el.value = '2'
      await el.updateComplete
      const seg = el.querySelector('#seg') as GdsSegment
      expect(seg.selected).to.be.true
    })

    it('should dispatch a change event when the value property is updated', async () => {
      const el = await fixture<GdsSegment>(
        html`<gds-segmented-control value="1">
          <gds-segment value="1">Segment 1</gds-segment>
          <gds-segment value="2" id="seg">Segment 2</gds-segment>
        </gds-segmented-control>`,
      )
      await el.updateComplete
      const spy = sinon.spy()
      el.addEventListener('change', spy)
      const seg = el.querySelector('#seg') as GdsSegment
      seg.click()
      await el.updateComplete
      expect(spy).to.have.been.calledOnce
    })

    it('should set the segMinWidth property based on the seg-min-width attribute', async () => {
      const el = await fixture<GdsSegmentedControl>(
        html`<gds-segmented-control
          seg-min-width="120"
        ></gds-segmented-control>`,
      )
      expect(el.segMinWidth).to.equal(120)
    })

    it('renders the next button when segments overflow', async () => {
      const el = await fixture<GdsSegmentedControl>(html`
        <gds-segmented-control seg-min-width="120" style="max-width: 300px">
          <gds-segment>Segment 1</gds-segment>
          <gds-segment>Segment 2</gds-segment>
          <gds-segment>Segment 3</gds-segment>
          <gds-segment>Segment 4</gds-segment>
        </gds-segmented-control>
      `)

      await el.updateComplete

      const nextButton = el.shadowRoot?.querySelector('#btn-next')
      expect(nextButton).to.exist
    })

    it('renders the prev button when segments overflow', async () => {
      const el = await fixture<GdsSegmentedControl>(html`
        <gds-segmented-control seg-min-width="120" style="max-width: 300px">
          <gds-segment>Segment 1</gds-segment>
          <gds-segment>Segment 2</gds-segment>
          <gds-segment>Segment 3</gds-segment>
          <gds-segment>Segment 4</gds-segment>
        </gds-segmented-control>
      `)

      await el.updateComplete

      const nextButton = el.shadowRoot?.querySelector('#btn-next')
      clickOnElement(nextButton as HTMLElement)
      await timeout(100)
      const prevButton = el.shadowRoot?.querySelector('#btn-prev')
      expect(prevButton).to.exist
    })
  })
})
