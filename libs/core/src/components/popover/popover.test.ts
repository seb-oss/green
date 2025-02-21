import { expect } from '@esm-bundle/chai'
import {
  aTimeout,
  fixture,
  html as testingHtml,
  waitUntil,
} from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'

import type {
  GdsBackdrop,
  GdsPopover,
} from '@sebgroup/green-core/components/popover'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/popover'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-popover>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-popover></gds-popover>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-popover')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('trigger should have aria-haspopup="dialog" by default', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      expect(trigger.getAttribute('aria-haspopup')).to.equal('dialog')
    })

    it('trigger should retain custom value of aria-haspopup', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover>
          <div slot="trigger" aria-haspopup="menu">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      expect(trigger.getAttribute('aria-haspopup')).to.equal('menu')
    })

    it('trigger should have aria-expanded="true" when open', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      expect(trigger.getAttribute('aria-expanded')).to.equal('true')
    })
  })

  describe('API', () => {
    // Add actual API tests here!
    it('should be possible to set trigger and anchor though properties', async () => {
      await fixture<GdsPopover>(
        html`<div id="trigger">Trigger</div>
          <gds-popover id="popover">
            <div>Content</div>
          </gds-popover>`,
      )
      const el = document.querySelector('#popover') as GdsPopover
      await el.updateComplete

      const trigger = document.querySelector('#trigger') as HTMLElement
      const anchor = document.createElement('div')
      document.body.appendChild(anchor)

      el.triggerRef = Promise.resolve(trigger)
      el.anchorRef = Promise.resolve(anchor)

      await el.updateComplete
      await waitUntil(() => (el as any)._trigger === trigger)
      await waitUntil(() => (el as any)._anchor === anchor)

      await clickOnElement(trigger)
      await waitUntil(() => el.open)
    })

    it('should be possible to reference a backdrop element', async () => {
      const el = await fixture<GdsPopover>(
        html`<div>
          <gds-popover open id="popover" backdrop="#backdrop">
            <div>Content</div>
          </gds-popover>
          <gds-backdrop id="backdrop"></gds-backdrop>
        </div>`,
      )
      await el.updateComplete

      const backdrop = document.querySelector('#backdrop') as GdsBackdrop

      await waitUntil(() => backdrop.show)
    })

    it('should open dialog in modal mode when `nonmodal` is not set', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      expect(el.shadowRoot?.querySelector('dialog:modal')).to.not.be.null
    })

    it('should not open dialog in modal mode when `nonmodal` is set', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open nonmodal>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      expect(el.shadowRoot?.querySelector('dialog:modal')).to.be.null
    })

    it('should be possible to cancel the `gds-ui-state` event', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      el.addEventListener('gds-ui-state', (e: CustomEvent) => {
        if (e.detail.reason === 'close') {
          e.preventDefault()
        }
      })

      await clickOnElement(document.body, 'right')
      await aTimeout(100)

      expect(el.open).to.be.true
    })
  })

  describe('Interactions', () => {
    it('should open when trigger is clicked', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      await clickOnElement(trigger)
      await waitUntil(() => el.open)
    })

    it('should close when trigger is clicked again', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      await clickOnElement(trigger)
      await waitUntil(() => !el.open)
    })

    it('should close when clicking outside the popover', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      await clickOnElement(document.body, 'right')
      await waitUntil(() => !el.open)
    })

    it('trigger should get tabindex="0" if it is not already focusable', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      expect(trigger.getAttribute('tabindex')).to.equal('0')
    })

    it('should open when ArrowDown is pressed on trigger', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover>
          <button slot="trigger">Trigger</button>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      trigger.focus()

      await sendKeys({ press: 'ArrowDown' })
      await waitUntil(() => el.open)
    })

    it('should open when ArrowUp is pressed on trigger', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover>
          <button slot="trigger">Trigger</button>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement
      trigger.focus()

      await sendKeys({ press: 'ArrowUp' })
      await waitUntil(() => el.open)
    })

    it('should close when Escape is pressed', async () => {
      const el = await fixture<GdsPopover>(
        html`<gds-popover open>
          <div slot="trigger">Trigger</div>
          <div>Content</div>
        </gds-popover>`,
      )
      await el.updateComplete

      await sendKeys({ press: 'Escape' })
      await waitUntil(() => !el.open)
    })
  })
})
