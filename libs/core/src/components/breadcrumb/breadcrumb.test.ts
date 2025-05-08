import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/breadcrumb'
import '@sebgroup/green-core/components/link'
import '@sebgroup/green-core/components/text'

import type { GdsBreadcrumb } from '@sebgroup/green-core/components/breadcrumb'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-breadcrumb>', () => {
  describe('Rendering', () => {
    it('should render breadcrumb', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      expect(el.getAttribute('gds-element')).to.equal('gds-breadcrumb')
    })

    it('should render separator between items', async () => {
      const separatorSlotChangePromise = new Promise<void>((resolve) => {
        const handleSlotChange = () => {
          resolve()
        }
        // Listen for the first slotchange event
        document.addEventListener('slotchange', handleSlotChange, {
          once: true,
        })
      })

      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb>
          <gds-text slot="separator">/</gds-text>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      await separatorSlotChangePromise

      const linkTag = getScopedTagName('gds-link')
      const links = el.querySelectorAll(linkTag)
      expect(links.length).to.equal(2)
    })
  })

  describe('API', () => {
    it('should support font-size attribute', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb font-size="body-m">
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      expect(el['font-size']).to.equal('body-m')
    })

    it('should support gap attribute', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb gap="l">
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      expect(el.gap).to.equal('l')
    })

    it('should support font-weight attribute', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb font-weight="regular">
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      expect(el['font-weight']).to.equal('regular')
    })
  })

  describe('Accessibility', () => {
    it('should have navigation role', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb>
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      expect(el.getAttribute('role')).to.equal('navigation')
    })

    it('should have aria-label', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb>
          <gds-link href="/home">Home</gds-link>
        </gds-breadcrumb>`,
      )

      await el.updateComplete
      expect(el.getAttribute('aria-label')).to.equal('Breadcrumb')
    })

    it('should be accessible', async () => {
      const el = await fixture<GdsBreadcrumb>(
        html`<gds-breadcrumb>
          <gds-text slot="separator">/</gds-text>
          <gds-link href="/home">Home</gds-link>
          <gds-link href="/products">Products</gds-link>
        </gds-breadcrumb>`,
      )

      await expect(el).to.be.accessible()
    })
  })
})
