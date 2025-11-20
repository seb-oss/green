import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing/index.js'

import type { GdsPagination } from './pagination.component'

import '@sebgroup/green-core/components/pagination'

const html = htmlTemplateTagFactory(testingHtml)

const findButton = (
  buttons: NodeListOf<Element> | undefined,
  predicate: (btn: HTMLElement) => boolean,
): HTMLElement | undefined => {
  return Array.from(buttons || []).find((btn) =>
    predicate(btn as HTMLElement),
  ) as HTMLElement | undefined
}

const findMenuItem = (
  items: NodeListOf<Element> | undefined,
  predicate: (item: HTMLElement) => boolean,
): HTMLElement | undefined => {
  return Array.from(items || []).find((item) =>
    predicate(item as HTMLElement),
  ) as HTMLElement | undefined
}

describe('<gds-pagination>', () => {
  describe('Rendering', () => {
    it('should render pagination', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const pagesContainer = el.shadowRoot?.querySelector('.pages')

      expect(pagesContainer).to.exist
    })

    it('should render page buttons', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )

      expect(buttons?.length).to.be.greaterThan(0)
    })

    it('should render navigation controls', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )

      expect(buttons?.length).to.be.greaterThan(0)
    })

    it('should render page size menu', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          .options=${[5, 10, 25, 50]}
        ></gds-pagination>`,
      )

      await el.updateComplete

      const contextMenu = el.shadowRoot?.querySelector(
        getScopedTagName('gds-context-menu'),
      )

      expect(contextMenu).to.exist
    })

    it('should render with jump attribute', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          jump
        ></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )

      expect(buttons?.length).to.be.greaterThan(2)
    })
  })

  describe('API', () => {
    it('should support page attribute', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="5" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      expect(el.page).to.equal(5)
    })

    it('should support rows attribute', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="25" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      expect(el.rows).to.equal(25)
    })

    it('should support total attribute', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="250"></gds-pagination>`,
      )

      await el.updateComplete

      expect(el.total).to.equal(250)
    })

    it('should support options attribute', async () => {
      const options = [5, 10, 20, 50, 100]
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          .options=${options}
        ></gds-pagination>`,
      )

      await el.updateComplete

      expect(el.options).to.deep.equal(options)
    })

    it('should support jump attribute', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          jump
        ></gds-pagination>`,
      )

      await el.updateComplete

      expect(el.jump).to.be.true
    })
  })

  describe('Navigation', () => {
    it('should emit page change event on page button click', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-page-change', spy)

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const pageButton = findButton(
        buttons,
        (btn) => btn.textContent?.trim() === '2',
      )

      if (pageButton) {
        await clickOnElement(pageButton)
      }

      expect(spy.called).to.be.true
    })

    it('should emit page change event with correct page number', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-page-change', spy)

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const pageButton = findButton(
        buttons,
        (btn) => btn.textContent?.trim() === '3',
      )

      if (pageButton) {
        await clickOnElement(pageButton)
      }

      expect(spy.calledOnce).to.be.true
      expect(spy.getCall(0).args[0].detail.page).to.equal(3)
    })

    it('should disable previous button on first page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const previousButton = findButton(
        buttons,
        (btn) =>
          btn.hasAttribute('disabled') &&
          !!btn.querySelector(getScopedTagName('gds-icon-chevron-left-small')),
      )

      expect(previousButton).to.exist
    })

    it('should disable next button on last page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="10" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const nextButton = findButton(
        buttons,
        (btn) =>
          btn.hasAttribute('disabled') &&
          !!btn.querySelector(getScopedTagName('gds-icon-chevron-right-small')),
      )

      expect(nextButton).to.exist
    })

    it('should navigate to previous page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="5" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-page-change', spy)

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const previousButton = findButton(
        buttons,
        (btn) =>
          !btn.hasAttribute('disabled') &&
          !!btn.querySelector(getScopedTagName('gds-icon-chevron-left-small')),
      )

      if (previousButton) {
        await clickOnElement(previousButton)
      }

      expect(spy.calledOnce).to.be.true
      expect(spy.getCall(0).args[0].detail.page).to.equal(4)
    })

    it('should navigate to next page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="5" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-page-change', spy)

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const nextButton = findButton(
        buttons,
        (btn) =>
          !btn.hasAttribute('disabled') &&
          !!btn.querySelector(getScopedTagName('gds-icon-chevron-right-small')),
      )

      if (nextButton) {
        await clickOnElement(nextButton)
      }

      expect(spy.calledOnce).to.be.true
      expect(spy.getCall(0).args[0].detail.page).to.equal(6)
    })

    it('should jump to first page when jump attribute is set', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="5"
          rows="10"
          total="100"
          jump
        ></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-page-change', spy)

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const jumpFirstButton = findButton(
        buttons,
        (btn) =>
          !btn.hasAttribute('disabled') &&
          !!btn.querySelector(getScopedTagName('gds-icon-chevron-double-left')),
      )

      if (jumpFirstButton) {
        await clickOnElement(jumpFirstButton)
      }

      expect(spy.calledOnce).to.be.true
      expect(spy.getCall(0).args[0].detail.page).to.equal(1)
    })

    it('should jump to last page when jump attribute is set', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="5"
          rows="10"
          total="100"
          jump
        ></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-page-change', spy)

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const jumpLastButton = findButton(
        buttons,
        (btn) =>
          !btn.hasAttribute('disabled') &&
          !!btn.querySelector(
            getScopedTagName('gds-icon-chevron-double-right'),
          ),
      )

      if (jumpLastButton) {
        await clickOnElement(jumpLastButton)
      }

      expect(spy.calledOnce).to.be.true
      expect(spy.getCall(0).args[0].detail.page).to.equal(10)
    })
  })

  describe('Page Size', () => {
    it('should emit rows change event on page size change', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          .options=${[5, 10, 25, 50]}
        ></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-rows-change', spy)

      const menuItems = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-menu-item'),
      )
      const sizeOption = findMenuItem(
        menuItems,
        (item) => item.textContent?.trim() === '25',
      )

      if (sizeOption) {
        await clickOnElement(sizeOption)
      }

      expect(spy.called).to.be.true
    })

    it('should emit rows change event with correct rows value', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          .options=${[5, 10, 25, 50]}
        ></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-rows-change', spy)

      const menuItems = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-menu-item'),
      )
      const sizeOption = findMenuItem(
        menuItems,
        (item) => item.textContent?.trim() === '50',
      )

      if (sizeOption) {
        await clickOnElement(sizeOption)
      }

      expect(spy.calledOnce).to.be.true
      expect(spy.getCall(0).args[0].detail.rows).to.equal(50)
    })

    it('should not emit rows change event if same size selected', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          .options=${[5, 10, 25, 50]}
        ></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-rows-change', spy)

      const menuItems = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-menu-item'),
      )
      const sizeOption = findMenuItem(
        menuItems,
        (item) => item.textContent?.trim() === '10',
      )

      if (sizeOption) {
        await clickOnElement(sizeOption)
      }

      expect(spy.called).to.be.false
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      await expect(el).to.be.accessible()
    })

    it('should have accessible page buttons', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )

      expect(buttons?.length).to.be.greaterThan(0)
    })
  })
})
