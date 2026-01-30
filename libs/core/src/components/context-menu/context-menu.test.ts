import { expect, describe, it, vi } from 'vitest'
import { aTimeout, fixture, html as testingHtml } from '../../utils/testing'
import { userEvent } from '@vitest/browser/context'

import type { GdsButton } from '@sebgroup/green-core/components/button'
import type {
  GdsContextMenu,
  GdsMenuItem,
} from '@sebgroup/green-core/components/context-menu'

import { GdsPopover } from '@sebgroup/green-core/components/popover'
import { GdsMenu } from '@sebgroup/green-core/primitives/menu'
import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/context-menu'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-context-menu>', () => {
  describe('Rendering', () => {
    it('should be visible with the open attribute', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu open>
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      const popover = el.shadowRoot!.querySelector<HTMLElement>(
        getScopedTagName('gds-popover'),
      )!

      expect(popover.hidden).toBe(false)
    })
  })

  describe('API', () => {
    it('should fire "gds-menu-item-click" event with clicked menu item', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu open>
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      await aTimeout(0)

      const spy = vi.fn()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector(getScopedTagName('gds-menu-item'))!
      await clickOnElement(item, 'center')

      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.calls[0][0].target).toBe(item)
    })

    it('"gds-menu-item" should fire "click" event on click', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu open>
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      await aTimeout(0)

      const spy = vi.fn()
      el.addEventListener('click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      await clickOnElement(item)

      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.calls[0][0].target).toBe(item)
    })

    it('should support custom slotted trigger', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu>
          <gds-button slot="trigger" id="custom-trigger"
            >Custom trigger</gds-button
          >
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      await aTimeout(0)

      const button = el.querySelector<GdsButton>('#custom-trigger')!
      await clickOnElement(button)

      await el.updateComplete

      expect(el.open).toBe(true)
    })
  })

  describe('Accessibility', () => {
    it('should use set label on button and popover', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu
          button-label="Button label"
          label="Context label"
          open
        >
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      const popover = el.shadowRoot!.querySelector<GdsPopover>(
        getScopedTagName('gds-popover'),
      )!
      const menu = el.shadowRoot!.querySelector<GdsMenu>(
        getScopedTagName('gds-menu'),
      )!
      const button = el.shadowRoot!.querySelector<GdsButton>('#trigger')!

      expect(button.getAttribute('label')).toBe('Button label')
      expect(popover.label).toBe('Context label')
      expect(menu.getAttribute('aria-label')).toBe('Context label')
    })

    it('should active click action on enter', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu open>
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      await aTimeout(0)

      const spy = vi.fn()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      item.focus()
      await userEvent.keyboard('{Enter}')

      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.calls[0][0].target).toBe(item)
    })

    it('should active click action on space', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu open>
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      await aTimeout(0)

      const spy = vi.fn()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      item.focus()
      await userEvent.keyboard('{Space}')

      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.calls[0][0].target).toBe(item)
    })

    it('should close on tab and focus trigger', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu open>
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      await aTimeout(0)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      item.focus()
      await userEvent.keyboard('{Tab}')

      await el.updateComplete

      expect(el.open).toBe(false)
      expect(document.activeElement).toBe(el)
    })
  })
})
