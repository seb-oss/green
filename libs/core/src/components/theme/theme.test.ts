import { describe, expect, it, vi } from 'vitest'

import type { GdsTheme } from '@sebgroup/green-core/components/theme'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/theme'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsTheme', () => {
  describe('API', () => {
    it('setting `colorScheme` should inject the correct styles', async () => {
      const element = await fixture<GdsTheme>(html`<gds-theme></gds-theme>`)
      await element.updateComplete
      element.colorScheme = 'dark'
      await element.updateComplete
      expect(element._dynamicStylesController.has('color-scheme')).toBe(true)
      expect(window.getComputedStyle(element).colorScheme).toContain('dark')
    })
    it('should dispatch an event when setting `designVersion`', async () => {
      const element = await fixture<GdsTheme>(html`<gds-theme></gds-theme>`)
      await element.updateComplete
      const spy = vi.fn()
      element.addEventListener('gds-design-version-changed', spy)
      element.designVersion = '2016'
      await element.updateComplete
      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.calls[0][0].detail).toEqual({ designVersion: '2016' })
    })
    it('should dispatch an event when setting `colorScheme`', async () => {
      const element = await fixture<GdsTheme>(html`<gds-theme></gds-theme>`)
      await element.updateComplete
      const spy = vi.fn()
      element.addEventListener('gds-color-scheme-changed', spy)
      element.colorScheme = 'dark'
      await element.updateComplete
      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.calls[0][0].detail).toEqual({ colorScheme: 'dark' })
    })
  })
})
