import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

import { clickOnElement, timeout } from '../../utils/testing'

import '@sebgroup/green-core/components/dialog'

import type { GdsDialog } from '@sebgroup/green-core/components/dialog'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-dialog>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-dialog></gds-dialog>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-dialog')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })

  describe('API', () => {
    // Add actual API tests here!
    it('should emit events when show() and close() are called with a parameter', async () => {
      const showSpy = sinon.spy()
      const closeSpy = sinon.spy()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog
          heading="Test"
          @gds-show=${showSpy}
          @gds-close=${closeSpy}
        >
          Content
        </gds-dialog>`,
      )

      el.show('test')
      await waitUntil(() => showSpy.called)
      expect(showSpy).to.have.been.called

      el.close('test')
      await waitUntil(() => closeSpy.called)
      expect(closeSpy).to.have.been.called
    })

    it('should not emit events when show() and close() are called without a parameter', async () => {
      const showSpy = sinon.spy()
      const closeSpy = sinon.spy()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog
          heading="Test"
          @gds-show=${showSpy}
          @gds-close=${closeSpy}
        >
          Content
        </gds-dialog>`,
      )

      el.show()
      await waitUntil(() => el.open)
      expect(showSpy).to.not.have.been.called

      el.close()
      await waitUntil(() => !el.open)
      expect(closeSpy).to.not.have.been.called
    })

    it('should set the heading when the heading attribute is set', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog heading="Test" open>Content</gds-dialog>`,
      )
      const heading = el.shadowRoot?.querySelector('h2')
      expect(heading?.textContent).to.equal('Test')
    })
  })

  describe('Interactions', () => {
    // Add actual interaction tests here! (things like keyboard nav, clicking on things behave as expected, etc)
    it('should open dialog when trigger is clicked', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog heading="Test">Content</gds-dialog>`,
      )
      const trigger = document.createElement('button')
      trigger.slot = 'trigger'
      trigger.textContent = 'Open Dialog'
      el.appendChild(trigger)
      await el.updateComplete
      await clickOnElement(trigger)
      await waitUntil(() => el.open)
    })

    it('should close dialog when close button is clicked', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )

      const closeBtn = el.shadowRoot?.querySelector('#close-btn')
      await clickOnElement(closeBtn)
      await waitUntil(() => !el.open)
    })
  })
})
