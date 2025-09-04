import { expect, fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsTheme } from '@sebgroup/green-core/components/theme'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/theme'

import sinon from 'sinon'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsTheme', () => {
  describe('API', () => {
    it('setting `colorScheme` should inject the correct styles', async () => {
      const element = await fixture<GdsTheme>(html`<gds-theme></gds-theme>`)
      await element.updateComplete
      element.colorScheme = 'dark'
      await element.updateComplete
      expect(element._dynamicStylesController.has('color-scheme')).to.be.true
      expect(window.getComputedStyle(element).colorScheme).to.have.string(
        'dark',
      )
    })
    it('should dispatch an event when setting `designVersion`', async () => {
      const element = await fixture<GdsTheme>(html`<gds-theme></gds-theme>`)
      await element.updateComplete
      const event = new CustomEvent('gds-design-version-changed', {
        detail: { designVersion: '2016' },
      })
      const spy = sinon.spy()
      element.addEventListener('gds-design-version-changed', spy)
      element.designVersion = '2016'
      await element.updateComplete
      expect(spy).to.have.been.calledOnceWith(event)
    })
    it('should dispatch an event when setting `colorScheme`', async () => {
      const element = await fixture<GdsTheme>(html`<gds-theme></gds-theme>`)
      await element.updateComplete
      const event = new CustomEvent('gds-color-scheme-changed', {
        detail: { colorScheme: 'dark' },
      })
      const spy = sinon.spy()
      element.addEventListener('gds-color-scheme-changed', spy)
      element.colorScheme = 'dark'
      await element.updateComplete
      expect(spy).to.have.been.calledOnceWith(event)
    })
  })
})
