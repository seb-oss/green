import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/accordion'

import type { GdsAccordion } from '@sebgroup/green-core/components/accordion'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-accordion>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-accordion></gds-accordion>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-accordion')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion></gds-accordion>`,
      )
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('should have proper ARIA attributes', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion summary="Test Summary"></gds-accordion>`,
      )
      await el.updateComplete

      const details = el.shadowRoot?.querySelector('details')
      const summary = el.shadowRoot?.querySelector('summary')

      expect(details).to.exist
      expect(summary).to.exist
      expect(summary?.getAttribute('role')).to.equal('button')
    })
  })

  describe('API', () => {
    it('should render with default summary when no summary is provided', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion></gds-accordion>`,
      )
      await el.updateComplete

      const summary = el.shadowRoot?.querySelector('summary')
      expect(summary?.textContent?.trim()).to.include('Summary')
    })

    it('should render with provided summary', async () => {
      const testSummary = 'Test Summary'
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion summary="${testSummary}"></gds-accordion>`,
      )
      await el.updateComplete

      const summary = el.shadowRoot?.querySelector('summary')
      expect(summary?.textContent?.trim()).to.include(testSummary)
    })

    it('should render slotted content', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion>
          <p>Test Content</p>
        </gds-accordion>`,
      )
      await el.updateComplete

      const slot = el.shadowRoot?.querySelector('slot')
      expect(slot).to.exist
      expect(el.textContent).to.include('Test Content')
    })
  })

  describe('Interactions', () => {
    it('should toggle open state when clicked', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion summary="Test"></gds-accordion>`,
      )
      await el.updateComplete

      const details = el.shadowRoot?.querySelector('details')
      const summary = el.shadowRoot?.querySelector('summary')

      expect(details?.open).to.be.false

      await clickOnElement(summary!)
      await el.updateComplete

      expect(details?.open).to.be.true

      await clickOnElement(summary!)
      await el.updateComplete

      expect(details?.open).to.be.false
    })

    it('should close other accordions with same name when opened', async () => {
      const container = await fixture(
        html`<div>
          <gds-accordion name="group1" summary="First">Content 1</gds-accordion>
          <gds-accordion name="group1" summary="Second"
            >Content 2</gds-accordion
          >
        </div>`,
      )

      const [accordion1, accordion2] =
        container.children as unknown as GdsAccordion[]
      await accordion1.updateComplete
      await accordion2.updateComplete

      const summary1 = accordion1.shadowRoot?.querySelector('summary')
      const summary2 = accordion2.shadowRoot?.querySelector('summary')
      const details1 = accordion1.shadowRoot?.querySelector('details')
      const details2 = accordion2.shadowRoot?.querySelector('details')

      // Open first accordion
      await clickOnElement(summary1!)
      await accordion1.updateComplete
      await accordion2.updateComplete

      expect(details1?.open).to.be.true
      expect(details2?.open).to.be.false

      // Open second accordion
      await clickOnElement(summary2!)
      await accordion1.updateComplete
      await accordion2.updateComplete

      expect(details1?.open).to.be.false
      expect(details2?.open).to.be.true
    })

    it('should handle keyboard navigation', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion summary="Test"></gds-accordion>`,
      )
      await el.updateComplete

      const details = el.shadowRoot?.querySelector('details')
      const summary = el.shadowRoot?.querySelector('summary')

      summary?.focus()

      await sendKeys({ press: 'Enter' })
      await el.updateComplete
      expect(details?.open).to.be.true

      await sendKeys({ press: 'Enter' })
      await el.updateComplete
      expect(details?.open).to.be.false

      await sendKeys({ press: ' ' })
      await el.updateComplete
      expect(details?.open).to.be.true
    })
  })

  describe('Event Handling', () => {
    it('should dispatch toggle events', async () => {
      const toggleSpy = sinon.spy()

      const el = await fixture<GdsAccordion>(
        html`<gds-accordion
          summary="Test"
          @toggle=${() => toggleSpy()}
        ></gds-accordion>`,
      )
      await el.updateComplete

      const summary = el.shadowRoot?.querySelector('summary')
      await clickOnElement(summary!)

      expect(toggleSpy.calledOnce).to.be.true
    })

    it('should cleanup event listeners on disconnect', async () => {
      const el = await fixture<GdsAccordion>(
        html`<gds-accordion summary="Test"></gds-accordion>`,
      )

      const toggleListener = sinon.spy()
      el.addEventListener('toggle', toggleListener)

      el.remove()

      // Verify that the event listener was removed
      el.dispatchEvent(new CustomEvent('toggle'))
      expect(toggleListener.called).to.be.false
    })
  })
})
