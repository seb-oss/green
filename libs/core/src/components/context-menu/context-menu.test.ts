import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { time } from 'console'

import { clickOnElement, timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

import type { GdsContextMenu } from './context-menu'
import { GdsPopover } from 'src/primitives/popover'
import { GdsMenuItem } from 'src/primitives/menu/menu-item'
import { GdsMenu } from 'src/primitives/menu/menu'

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
        getScopedTagName('gds-popover')
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
      await timeout(0)

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
      await timeout(0)

      const spy = sinon.spy()
      el.addEventListener('click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item')
      )!
      await clickOnElement(item)

      await expect(spy).to.have.been.calledOnce
      await expect(spy.firstCall.args[0].target).to.equal(item)
    })
  })

  describe('Accessibility', () => {
    it('should use set label on button and popover', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu buttonLabel="Button label" label="Context label">
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      const popover = el.shadowRoot!.querySelector<GdsPopover>(
        getScopedTagName('gds-popover')
      )!
      const menu = el.shadowRoot!.querySelector<GdsMenu>(
        getScopedTagName('gds-menu')
      )!
      const button =
        el.shadowRoot!.querySelector<HTMLButtonElement>('#trigger')!

      await expect(button.getAttribute('aria-label')).to.equal('Button label')
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
      await timeout(0)

      const spy = sinon.spy()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item')
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
      await timeout(0)

      const spy = sinon.spy()
      el.addEventListener('gds-menu-item-click', spy)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item')
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
      await timeout(0)

      const item = el.querySelector<GdsMenuItem>(
        getScopedTagName('gds-menu-item')
      )!
      item.focus()
      await sendKeys({ press: 'Tab' })

      await el.updateComplete

      await expect(el.open).to.be.false
      await expect(document.activeElement).to.equal(el)
    })
  })
})
