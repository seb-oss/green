import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'

import '@sebgroup/green-core/components/coachmark'
import type {
  GdsCoachmark,
  GdsCoachmarkObject,
} from '@sebgroup/green-core/components/coachmark'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { sendKeys } from '@web/test-runner-commands'
import { clickOnElement } from 'src/utils/testing'

const html = htmlTemplateTagFactory(testingHtml)

const coachmarkMock = {
  id: 'someId',
  variant: 'dark',
  tooltip: {
    closeButton: {
      ariaLabel: 'ariaClose',
      text: 'Close',
    },
    overlappedBy: [''],
    preferredPlacement: 'bottom',
    content: ['some content'],
    target: [],
  },
} as GdsCoachmarkObject

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

      el.coachmark = coachmarkMock

      await el.updateComplete

      const container = el.shadowRoot?.querySelector('.gds-coachmark')

      expect(container).to.exist
    })

    it('should render body slot', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark><span slot="body">Test</span></gds-coachmark>`,
      )

      el.coachmark = coachmarkMock

      await el.updateComplete

      const bodySlot = el.shadowRoot?.querySelector('slot[name="body"]')

      expect(bodySlot).to.exist
    })

    it('should render footer slot', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark><span slot="footer">Test</span></gds-coachmark>`,
      )

      el.coachmark = coachmarkMock

      await el.updateComplete

      const footerSlot = el.shadowRoot?.querySelector('slot[name="footer"]')

      expect(footerSlot).to.exist
    })

    it('should render arrow div', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark></gds-coachmark>`,
      )

      el.coachmark = coachmarkMock

      await el.updateComplete

      const arrow = el.shadowRoot?.querySelector('#gds-arrow')

      expect(arrow).to.exist
    })
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark>
          <div slot="body">Content</div>
          <div slot="footer">Footer</div>
        </gds-coachmark>`,
      )

      el.coachmark = coachmarkMock

      await el.updateComplete

      await expect(el).to.be.accessible()
    })
  })

  describe('Interactions', () => {
    it('should close when clicking anywhere', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark>
          <div slot="body">Content</div>
          <div slot="footer">Footer</div>
        </gds-coachmark>`,
      )

      el.coachmark = coachmarkMock
      el._isVisible = true

      await el.updateComplete

      await clickOnElement(document.body, 'right')
      await waitUntil(() => !el._isVisible)
    })

    it('should close when Escape is pressed', async () => {
      const el = await fixture<GdsCoachmark>(
        html`<gds-coachmark>
          <div slot="body">Content</div>
          <div slot="footer">Footer</div>
        </gds-coachmark>`,
      )

      el.coachmark = coachmarkMock
      el._isVisible = true

      await el.updateComplete

      await sendKeys({ press: 'Escape' })
      await waitUntil(() => !el._isVisible)
    })
  })
})
