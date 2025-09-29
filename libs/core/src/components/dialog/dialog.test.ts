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

    it('should fire the close event before the gds-ui-state event', async () => {
      const closeSpy = sinon.spy()
      const uiStateSpy = sinon.spy()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog
          open
          heading="Test"
          @gds-close=${closeSpy}
          @gds-ui-state=${uiStateSpy}
        >
          Content
        </gds-dialog>`,
      )

      el.close('test')

      await aTimeout(100)

      expect(uiStateSpy.calledBefore(closeSpy)).to.be.true
    })

    it('should not fire the close event if the gds-ui-state event is cancelled', async () => {
      const closeSpy = sinon.spy()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog
          open
          heading="Test"
          @gds-close=${closeSpy}
          @gds-ui-state=${(e: any) => e.preventDefault()}
        >
          Content
        </gds-dialog>`,
      )

      el.close('test')

      await aTimeout(100)

      expect(closeSpy).to.not.have.been.called
    })

    it('should not fire the show event if the gds-ui-state event is cancelled', async () => {
      const showSpy = sinon.spy()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog
          open
          heading="Test"
          @gds-show=${showSpy}
          @gds-ui-state=${(e: any) => e.preventDefault()}
        >
          Content
        </gds-dialog>`,
      )

      el.show('test')

      await aTimeout(100)

      expect(showSpy).to.not.have.been.called
    })

    it('should set the heading when the heading attribute is set', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog heading="Test" open>Content</gds-dialog>`,
      )
      const heading = el.shadowRoot?.querySelector('h2')
      expect(heading?.textContent).to.equal('Test')
    })

    it('should support the `scrollable` prop', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog scrollable heading="Test">Content</gds-dialog>`,
      )
      expect(el.scrollable).to.be.true
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

    it('should close dialog when clicking outside', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )

      // Simulate clicking outside the dialog
      const dialog = el.shadowRoot?.querySelector('dialog')
      if (dialog) {
        await sendMouse({
          type: 'click',
          position: [10, 10],
        })
      }
      await waitUntil(() => !el.open)
    })

    it('should not close dialog when clicking outside if the gds-ui-state event is cancelled', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )
      el.addEventListener('gds-ui-state', (event: any) => {
        event.preventDefault()
      })
      // Simulate clicking outside the dialog
      const dialog = el.shadowRoot?.querySelector('dialog')
      if (dialog) {
        await sendMouse({
          type: 'click',
          position: [10, 10],
        })
      }
      await aTimeout(100) // Wait to see if the dialog closes
      expect(el.open).to.be.true
    })

    it('should close dialog when pressing Escape key', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )

      await sendKeys({ press: 'Escape' })
      await waitUntil(() => !el.open)
    })

    it('should emit gds-ui-state with reason `native-close` when closed with ESC', async () => {
      const uiStateSpy = sinon.spy()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test" @gds-ui-state=${uiStateSpy}
          >Content</gds-dialog
        >`,
      )

      await sendKeys({ press: 'Escape' })
      await waitUntil(() => !el.open)

      expect(uiStateSpy).to.have.been.calledWithMatch({
        detail: { reason: 'native-close' },
      })
    })
  })
})
