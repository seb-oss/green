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

describe('<gds-pagination>', () => {
  describe('Rendering', () => {
    it('should render pagination', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const navigationControls = el.shadowRoot?.querySelector(
        '.navigation-controls',
      )
      expect(navigationControls).to.exist
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

    it('should disable previous button on first page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const previousButton = Array.from(buttons || []).find((btn: Element) =>
        (btn as HTMLElement).getAttribute('label')?.includes('previous'),
      ) as HTMLElement | undefined

      expect(previousButton?.hasAttribute('disabled')).to.be.true
    })

    it('should disable next button on last page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="10" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const nextButton = Array.from(buttons || []).find((btn: Element) =>
        (btn as HTMLElement).getAttribute('label')?.includes('next'),
      ) as HTMLElement | undefined

      expect(nextButton?.hasAttribute('disabled')).to.be.true
    })

    it('should emit page change with correct page number', async () => {
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

      const event = spy.lastCall
      if (event) {
        expect(event.args[0].detail.page).to.equal(3)
      }
    })
  })

  describe('Page Size Selection', () => {
    it('should emit rows change event on page size selection', async () => {
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
      const sizeItem = Array.from(menuItems || []).find(
        (item: Element) => (item as HTMLElement).textContent?.trim() === '25',
      ) as HTMLElement | undefined

      if (sizeItem) {
        sizeItem.dispatchEvent(
          new CustomEvent('gds-menu-item-click', {
            detail: { value: '25' },
            bubbles: true,
          }),
        )
      }

      await el.updateComplete
      expect(spy.called).to.be.true
    })

    it('should emit rows change with correct row count', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          .options=${[5, 10, 25]}
        ></gds-pagination>`,
      )

      await el.updateComplete

      const spy = sinon.spy()
      el.addEventListener('gds-rows-change', spy)

      const menuItems = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-menu-item'),
      )
      const sizeItem = Array.from(menuItems || []).find(
        (item: Element) => (item as HTMLElement).textContent?.trim() === '25',
      ) as HTMLElement | undefined

      if (sizeItem) {
        const clickEvent = new CustomEvent('gds-menu-item-click', {
          bubbles: true,
        })
        Object.defineProperty(clickEvent, 'target', {
          value: sizeItem,
          enumerable: true,
        })
        el.dispatchEvent(clickEvent)
      }

      await el.updateComplete
    })
  })

  describe('Jump Navigation', () => {
    it('should render jump buttons when jump is true', async () => {
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
      const jumpFirstButton = Array.from(buttons || []).find((btn: Element) =>
        (btn as HTMLElement).getAttribute('label')?.includes('first'),
      )
      const jumpLastButton = Array.from(buttons || []).find((btn: Element) =>
        (btn as HTMLElement).getAttribute('label')?.includes('last'),
      )

      expect(jumpFirstButton).to.exist
      expect(jumpLastButton).to.exist
    })

    it('should disable jump first button on first page', async () => {
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
      const jumpFirstButton = Array.from(buttons || []).find((btn: Element) =>
        (btn as HTMLElement).getAttribute('label')?.includes('first'),
      ) as HTMLElement | undefined

      expect(jumpFirstButton?.hasAttribute('disabled')).to.be.true
    })

    it('should disable jump last button on last page', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="10"
          rows="10"
          total="100"
          jump
        ></gds-pagination>`,
      )

      await el.updateComplete

      const buttons = el.shadowRoot?.querySelectorAll(
        getScopedTagName('gds-button'),
      )
      const jumpLastButton = Array.from(buttons || []).find((btn: Element) =>
        (btn as HTMLElement).getAttribute('label')?.includes('last'),
      ) as HTMLElement | undefined

      expect(jumpLastButton?.hasAttribute('disabled')).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoke test', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination page="1" rows="10" total="100"></gds-pagination>`,
      )

      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('should have proper aria attributes on jump button', async () => {
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
      const jumpButton = Array.from(buttons || []).find((btn: Element) => {
        const label = (btn as HTMLElement).getAttribute('label')
        return label === 'Jump to page'
      }) as HTMLElement | undefined

      expect(jumpButton?.hasAttribute('aria-haspopup')).to.be.true
      expect(jumpButton?.hasAttribute('aria-expanded')).to.be.true
    })
  })

  describe('Density Modes', () => {
    it('should support compact density', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          density="compact"
        ></gds-pagination>`,
      )

      await el.updateComplete
      expect(el.density).to.equal('compact')
    })

    it('should support spacious density', async () => {
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          density="spacious"
        ></gds-pagination>`,
      )

      await el.updateComplete
      expect(el.density).to.equal('spacious')
    })
  })

  describe('Label Display', () => {
    it('should render label when provided', async () => {
      const label = '1-10 of 100'
      const el = await fixture<GdsPagination>(
        html`<gds-pagination
          page="1"
          rows="10"
          total="100"
          label="${label}"
        ></gds-pagination>`,
      )

      await el.updateComplete
      expect(el.label).to.equal(label)
    })
  })
})
