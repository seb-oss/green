import { expect } from '@esm-bundle/chai'
import {
  aTimeout,
  fixture,
  html as testingHtml,
  waitUntil,
} from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'

import type { GdsCoachmark } from '@sebgroup/green-core/components/coachmark'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/coachmark'

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

      expect(el.shadowRoot).to.exist
    })

    it('should render slot', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark .target=${['#target']}
          ><span>Test</span></gds-coachmark
        >`,
      )

      const slotEl = el.shadowRoot?.querySelector('slot')
      expect(slotEl).to.exist
    })

    it('should render arrow div', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark .target=${['#target']}></gds-coachmark>`,
      )

      const arrow = el.shadowRoot?.querySelector('#arrow')

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

      el._isVisible = true

      await el.updateComplete

      await sendKeys({ press: 'Escape' })
      await waitUntil(() => !el._isVisible)
    })
  })

  describe('API', () => {
    it('should find target element', async () => {
      const el = await fixture(
        html`<div>
          <div
            style="position: absolute; top: 100px; left: 100px"
            id="target"
          ></div>
          <gds-coachmark id="coachmark" .target=${['#target']}></gds-coachmark>
        </div>`,
      )

      const coachmark = el.querySelector('#coachmark') as GdsCoachmark
      await coachmark.updateComplete

      const target = el.querySelector('#target')

      expect(coachmark.targetElement).to.equal(target)
    })

    it('should fire gds-ui-state event when closing', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark .target=${['#target']}>
          <div>Content</div>
        </gds-coachmark>`,
      )

      el._isVisible = true

      await el.updateComplete

      const eventPromise = new Promise((resolve) => {
        el.addEventListener('gds-ui-state', resolve, { once: true })
      })

      document.body.click()

      await eventPromise
    })

    it('should prevent closing when gds-ui-state event is cancelled', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark .target=${['#target']}>
          <div>Content</div>
        </gds-coachmark>`,
      )

      el._isVisible = true

      await el.updateComplete

      el.addEventListener(
        'gds-ui-state',
        (event: CustomEvent) => {
          event.preventDefault()
        },
        { once: true },
      )

      document.body.click()

      await aTimeout(100)

      expect(el._isVisible).to.be.true
    })
  })
})
