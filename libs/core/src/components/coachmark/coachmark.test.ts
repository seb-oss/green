import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'

import '@sebgroup/green-core/components/coachmark'
import type { GdsCoachmark } from '@sebgroup/green-core/components/coachmark'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { sendKeys } from '@web/test-runner-commands'
import { clickOnElement } from '../../utils/testing'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-coachmark>', () => {
  describe('Rendering', () => {
    it('is a GdsElement', async () => {
      const el = await fixture(html`<gds-coachmark></gds-coachmark>`)
      expect(el.getAttribute('gds-element')).to.equal('gds-coachmark')
    })

    it('should render coachmark', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark></gds-coachmark>`,
      )

      el.target = ['#someTarget']

      await el.updateComplete

      const container = el.shadowRoot?.querySelector(
        'div[class*="gds-coachmark"]',
      )

      expect(container).to.exist
    })

    it('should render slot', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark><span>Test</span></gds-coachmark>`,
      )

      el.target = ['#someTarget']

      await el.updateComplete

      const slotEl = el.shadowRoot?.querySelector('slot')
      expect(slotEl).to.exist

      const slottedEl = el.querySelector('span')
      expect(slottedEl).to.exist
    })

    it('should render arrow div', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark></gds-coachmark>`,
      )

      el.target = ['#someTarget']

      await el.updateComplete

      const arrow = el.shadowRoot?.querySelector('#gds-arrow')

      expect(arrow).to.exist
    })
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark>
          <div>Content</div>
        </gds-coachmark>`,
      )

      el.target = ['#someTarget']

      await el.updateComplete

      await expect(el).to.be.accessible()
    })
  })

  describe('Interactions', () => {
    it('should close when clicking anywhere', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark>
          <div>Content</div>
        </gds-coachmark>`,
      )

      el.target = ['#someTarget']
      el._isVisible = true

      await el.updateComplete

      await clickOnElement(document.body, 'right')
      await waitUntil(() => !el._isVisible)
    })

    it('should close when Escape is pressed', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark>
          <div>Content</div>
        </gds-coachmark>`,
      )

      el.target = ['#someTarget']
      el._isVisible = true

      await el.updateComplete

      await sendKeys({ press: 'Escape' })
      await waitUntil(() => !el._isVisible)
    })
  })
})
