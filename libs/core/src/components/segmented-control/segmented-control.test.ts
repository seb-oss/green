import { expect } from '@esm-bundle/chai'
import {
  aTimeout,
  fixture,
  html as testingHtml,
  waitUntil,
} from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/segmented-control'

import { GdsSegment } from '@sebgroup/green-core/components/segmented-control/segment'
import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

import type { GdsSegmentedControl } from '@sebgroup/green-core/components/segmented-control'

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

    it('renders the next button when segments overflow', async () => {
      const el = await fixture<GdsSegmentedControl>(html`
        <gds-segmented-control style="max-width: 300px">
          <gds-segment min-width="100px">Segment 1</gds-segment>
          <gds-segment min-width="100px">Segment 2</gds-segment>
          <gds-segment min-width="100px">Segment 3</gds-segment>
          <gds-segment min-width="100px">Segment 4</gds-segment>
        </gds-segmented-control>
      `)

      await el.updateComplete

      const nextButton = el.shadowRoot?.querySelector('#btn-next')
      waitUntil(() => nextButton?.getAttribute('aria-hidden') === 'false')
    })

    it('renders the prev button when segments overflow', async () => {
      const el = await fixture<GdsSegmentedControl>(html`
        <gds-segmented-control style="max-width: 300px">
          <gds-segment min-width="100px">Segment 1</gds-segment>
          <gds-segment min-width="100px">Segment 2</gds-segment>
          <gds-segment min-width="100px">Segment 3</gds-segment>
          <gds-segment min-width="100px">Segment 4</gds-segment>
        </gds-segmented-control>
      `)

      await el.updateComplete

      const nextButton = el.shadowRoot?.querySelector('#btn-next')
      waitUntil(() => nextButton?.getAttribute('aria-hidden') === 'false')
      clickOnElement(nextButton as HTMLElement)

      const prevButton = el.shadowRoot?.querySelector('#btn-prev')
      waitUntil(() => prevButton?.getAttribute('aria-hidden') === 'false')
    })

    it('<gds-segment> should support min-width, max-width and width style expression properties', async () => {
      const el = await fixture<GdsSegmentedControl>(html`
        <gds-segmented-control style="max-width: 300px">
          <gds-segment min-width="100px">Segment 1</gds-segment>
          <gds-segment max-width="200px">Segment 2</gds-segment>
          <gds-segment width="150px">Segment 3</gds-segment>
        </gds-segmented-control>
      `)

      const segments = el.segments
      expect(segments[0]['min-width']).to.equal('100px')
      expect(segments[1]['max-width']).to.equal('200px')
      expect(segments[2]['width']).to.equal('150px')
    })
  })
})
