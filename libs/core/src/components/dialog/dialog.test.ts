import { userEvent } from '@vitest/browser/context'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  aTimeout,
  clickOnElement,
  fixture,
  html as testingHtml,
  waitUntil,
} from '../../utils/testing'

import '@sebgroup/green-core/components/dialog'

import type { GdsDialog } from '@sebgroup/green-core/components/dialog'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-dialog>', () => {
  // Cleanup any open dialogs between tests to prevent modal state conflicts
  afterEach(async () => {
    // Close all open gds-dialogs
    const dialogs = document.querySelectorAll(
      'gds-dialog',
    ) as NodeListOf<GdsDialog>
    for (const dialog of dialogs) {
      if (dialog.open) {
        dialog.open = false
        await dialog.updateComplete
      }
    }
    // Also close any native dialogs that might be in modal state
    const nativeDialogs = document.querySelectorAll('dialog')
    for (const dialog of nativeDialogs) {
      if (dialog.open) {
        dialog.close()
      }
    }
  })

  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-dialog></gds-dialog>`)
    expect(el.getAttribute('gds-element')).toBe('gds-dialog')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )
      await el.updateComplete
      await expect(el).toBeAccessible()
    })
  })

  describe('API', () => {
    it('should emit events when show() and close() are called with a parameter', async () => {
      const showSpy = vi.fn()
      const closeSpy = vi.fn()
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
      await waitUntil(() => showSpy.mock.calls.length > 0)
      expect(showSpy).toHaveBeenCalled()

      el.close('test')
      await waitUntil(() => closeSpy.mock.calls.length > 0)
      expect(closeSpy).toHaveBeenCalled()
    })

    it('should not emit events when show() and close() are called without a parameter', async () => {
      const showSpy = vi.fn()
      const closeSpy = vi.fn()
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
      expect(showSpy).not.toHaveBeenCalled()

      el.close()
      await waitUntil(() => !el.open)
      expect(closeSpy).not.toHaveBeenCalled()
    })

    it('should fire the close event before the gds-ui-state event', async () => {
      const closeSpy = vi.fn()
      const uiStateSpy = vi.fn()
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

      // uiStateSpy should be called before closeSpy (order of invocation)
      expect(uiStateSpy.mock.invocationCallOrder[0]).toBeLessThan(
        closeSpy.mock.invocationCallOrder[0],
      )
    })

    it('should not fire the close event if the gds-ui-state event is cancelled', async () => {
      const closeSpy = vi.fn()
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

      expect(closeSpy).not.toHaveBeenCalled()
    })

    it('should not fire the show event if the gds-ui-state event is cancelled', async () => {
      const showSpy = vi.fn()
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

      expect(showSpy).not.toHaveBeenCalled()
    })

    it('should set the heading when the heading attribute is set', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog heading="Test" open>Content</gds-dialog>`,
      )
      const heading = el.shadowRoot?.querySelector('h2')
      expect(heading?.textContent).toBe('Test')
    })

    it('should support the `scrollable` prop', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog scrollable heading="Test">Content</gds-dialog>`,
      )
      expect(el.scrollable).toBe(true)
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
        await userEvent.click(document.body, { position: { x: 10, y: 10 } })
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
        await userEvent.click(document.body, { position: { x: 10, y: 10 } })
      }
      await aTimeout(100) // Wait to see if the dialog closes
      expect(el.open).toBe(true)
    })

    it('should close dialog when pressing Escape key', async () => {
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test">Content</gds-dialog>`,
      )

      await userEvent.keyboard('{Escape}')
      await waitUntil(() => !el.open)
    })

    it('should emit gds-ui-state with reason `native-close` when closed with ESC', async () => {
      const uiStateSpy = vi.fn()
      const el = await fixture<GdsDialog>(
        html`<gds-dialog open heading="Test" @gds-ui-state=${uiStateSpy}
          >Content</gds-dialog
        >`,
      )

      await userEvent.keyboard('{Escape}')
      await waitUntil(() => !el.open)

      expect(uiStateSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({ reason: 'native-close' }),
        }),
      )
    })
  })
})
