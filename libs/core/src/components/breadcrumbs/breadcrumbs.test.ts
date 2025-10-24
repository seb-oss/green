import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/breadcrumbs'
import '@sebgroup/green-core/components/link'
import '@sebgroup/green-core/components/text'

import type { GdsBreadcrumbs } from '@sebgroup/green-core/components/breadcrumbs'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-breadcrumbs>', () => {
  describe('Rendering', () => {
    it('should render breadcrumbs', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
          <gds-breadcrumb href="/products">Products</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      expect(el.getAttribute('gds-element')).to.equal('gds-breadcrumbs')
    })

    it('should render items in a list', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
          <gds-breadcrumb href="/products">Products</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const list = el.shadowRoot?.querySelector('[role="list"]')
      expect(list).to.exist
    })

    it('should mark current page item correctly', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
          <gds-breadcrumb>Current Page</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      await Promise.all(
        Array.from(el.querySelectorAll('gds-breadcrumb')).map(
          (item) => (item as any).updateComplete,
        ),
      )

      const currentItem = el.querySelector(
        '[gds-element="gds-breadcrumb"]:last-child',
      )
      expect(currentItem?.shadowRoot?.querySelector('[aria-current="page"]')).to
        .exist
    })

    it('should handle overflow items', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb overflow href="/more">More</gds-breadcrumb>
          <gds-breadcrumb href="/products">Products</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const overflowItem = el.querySelector(
        '[gds-element="gds-breadcrumb"][overflow]',
      )
      expect(overflowItem).to.exist
    })
  })

  describe('API', () => {
    it('should support size property', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs size="small">
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const nav = el.shadowRoot?.querySelector('nav')
      expect(nav?.classList.contains('size-small')).to.be.true
    })

    it('should mark second-to-last item with return attribute', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
          <gds-breadcrumb href="/products">Products</gds-breadcrumb>
          <gds-breadcrumb>Current</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      await new Promise((resolve) => setTimeout(resolve, 0))

      const items = el.querySelectorAll('[gds-element="gds-breadcrumb"]')
      const returnItem = items[items.length - 2]
      expect(returnItem?.hasAttribute('return')).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should have navigation role and aria-label', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const nav = el.shadowRoot?.querySelector('nav')
      expect(nav?.getAttribute('role')).to.equal('navigation')
      expect(nav?.getAttribute('aria-label')).to.equal('Breadcrumbs')
    })

    it('should be accessible', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-breadcrumb href="/home">Home</gds-breadcrumb>
          <gds-breadcrumb>Current</gds-breadcrumb>
        </gds-breadcrumbs>`,
      )

      await expect(el).to.be.accessible()
    })
  })
})
