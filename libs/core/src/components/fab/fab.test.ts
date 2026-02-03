import { describe, expect, it } from 'vitest'

import type { GdsFab } from '@sebgroup/green-core/components/fab'

import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/fab'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-fab>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-fab></gds-fab>`)
    expect(el.getAttribute('gds-element')).toBe('gds-fab')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab> FAB </gds-fab>`)
      await expect(el).toBeAccessible()
    })
  })

  describe('API', () => {
    it('has the `position` property', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab></gds-fab>`)
      expect(el.position).toBeUndefined()
      el.position = 'fixed'
      expect(el.position).toBe('fixed')
    })

    it('has the `transform` property', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab></gds-fab>`)
      expect(el.transform).toBeUndefined()
      el.transform = 'translate(10px, 10px)'
      expect(el.transform).toBe('translate(10px, 10px)')
    })

    it('has the `inset` property', async () => {
      const el = await fixture<GdsFab>(html`<gds-fab></gds-fab>`)
      expect(el.inset).toBeUndefined()
      el.inset = 'auto 5rem 5rem auto'
      expect(el.inset).toBe('auto 5rem 5rem auto')
    })
  })
})
