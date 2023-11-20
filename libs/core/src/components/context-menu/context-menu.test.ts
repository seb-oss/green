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

      expect(popover.hidden).to.be.false
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

      expect(spy).to.have.been.calledOnce
      expect(spy.firstCall.args[0].target).to.equal(item)
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

      expect(spy).to.have.been.calledOnce
      expect(spy.firstCall.args[0].target).to.equal(item)
    })
  })

  describe('Accessibility', () => {
    it('should use set label on button and popover', async () => {
      const el = await fixture<GdsContextMenu>(html`
        <gds-context-menu label="My label">
          <gds-menu-item>Item 1</gds-menu-item>
          <gds-menu-item>Item 2</gds-menu-item>
          <gds-menu-item>Item 3</gds-menu-item>
        </gds-context-menu>
      `)
      const popover = el.shadowRoot!.querySelector<GdsPopover>(
        getScopedTagName('gds-popover')
      )!
      const button =
        el.shadowRoot!.querySelector<HTMLButtonElement>('#trigger')!

      expect(button.getAttribute('aria-label')).to.equal('My label')
      expect(popover.label).to.equal('My label')
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

      expect(spy).to.have.been.calledOnce
      expect(spy.firstCall.args[0].target).to.equal(item)
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

      expect(spy).to.have.been.calledOnce
      expect(spy.firstCall.args[0].target).to.equal(item)
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

      expect(el.open).to.be.false
      expect(document.activeElement).to.equal(el)
    })
  })
})
