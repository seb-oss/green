import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

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
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      expect(el.getAttribute('gds-element')).to.equal('gds-breadcrumbs')
    })

    it('should render items in an ordered list', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const ol = el.shadowRoot?.querySelector('ol')
      expect(ol).to.exist
      expect(ol?.children.length).to.equal(3) // 2 items + 1 separator
    })

    it('should render separators between items', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const separators = el.shadowRoot?.querySelectorAll('.separator')
      expect(separators?.length).to.equal(1)
      expect(separators?.[0].textContent).to.equal('/')
    })
  })

  describe('API', () => {
    it('should support size property', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs size="small">
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const nav = el.shadowRoot?.querySelector('nav')
      expect(nav?.classList.contains('size-small')).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should have navigation role and aria-label', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const nav = el.shadowRoot?.querySelector('nav')
      expect(nav?.getAttribute('role')).to.equal('navigation')
      expect(nav?.getAttribute('aria-label')).to.equal('Breadcrumbs')
    })

    it('should mark separators as aria-hidden', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumbs>`,
      )

      await el.updateComplete
      const separator = el.shadowRoot?.querySelector('.separator')
      expect(separator?.getAttribute('aria-hidden')).to.equal('true')
    })

    it('should be accessible', async () => {
      const el = await fixture<GdsBreadcrumbs>(
        html`<gds-breadcrumbs>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumbs>`,
      )

      await expect(el).to.be.accessible()
    })
  })
})
