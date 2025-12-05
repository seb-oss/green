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
  })
})
