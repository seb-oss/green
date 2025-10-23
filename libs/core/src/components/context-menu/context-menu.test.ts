import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

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

      await expect(popover.hidden).to.be.false
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

      const spy = sinon.spy()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector(getScopedTagName('gds-menu-item'))!
      await clickOnElement(item, 'center')

      await expect(spy).to.have.been.calledOnce
      await expect(spy.firstCall.args[0].target).to.equal(item)
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

      const spy = sinon.spy()
      el.addEventListener('click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      await clickOnElement(item)

      await expect(spy).to.have.been.calledOnce
      await expect(spy.firstCall.args[0].target).to.equal(item)
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

      await expect(el.open).to.be.true
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

      await expect(button.getAttribute('label')).to.equal('Button label')
      await expect(popover.label).to.equal('Context label')
      await expect(menu.getAttribute('aria-label')).to.equal('Context label')
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

      const spy = sinon.spy()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      item.focus()
      await sendKeys({ press: 'Enter' })

      await expect(spy).to.have.been.calledOnce
      await expect(spy.firstCall.args[0].target).to.equal(item)
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

      const spy = sinon.spy()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item'),
      )!
      item.focus()
      await sendKeys({ press: 'Space' })

      await expect(spy).to.have.been.calledOnce
      await expect(spy.firstCall.args[0].target).to.equal(item)
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
      await sendKeys({ press: 'Tab' })

      await el.updateComplete

      await expect(el.open).to.be.false
      await expect(document.activeElement).to.equal(el)
    })
  })
})
