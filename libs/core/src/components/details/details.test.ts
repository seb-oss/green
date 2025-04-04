import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import { htmlTemplateTagFactory } from '../../utils/helpers/custom-element-scoping'

import type { GdsDetails } from './details'

import '@sebgroup/green-core/components/details'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-details>', () => {
  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary">
          This is the details content
        </gds-details>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('should be accessible when open', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary" open>
          This is the details content
        </gds-details>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })

  describe('Basic Functionality', () => {
    it('should expose summary text through summary property', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test Summary">Content</gds-details>
      `)
      await expect(el.summary).to.equal('Test Summary')
    })

    it('should render content in default slot', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Test Content</gds-details>
      `)
      const slot = el.shadowRoot!.querySelector('slot:not([name])')
      expect(slot).to.exist
    })
  })

  describe('Open State', () => {
    it('should initialize as closed by default', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Content</gds-details>
      `)
      await el.updateComplete
      expect(el.open).to.be.false
    })

    it('should respect initial open attribute', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test" open>Content</gds-details>
      `)
      await el.updateComplete
      expect(el.open).to.be.true
    })

    it('should toggle state on summary click', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Content</gds-details>
      `)
      const summary = el.shadowRoot!.querySelector('.summary') as HTMLElement

      summary.click()
      await el.updateComplete
      expect(el.open).to.be.true

      summary.click()
      await el.updateComplete
      expect(el.open).to.be.false
    })

    it('should toggle on Enter key', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Content</gds-details>
      `)
      const summary = el.shadowRoot!.querySelector('.summary') as HTMLElement
      summary.focus()

      await sendKeys({ press: 'Enter' })
      await el.updateComplete
      expect(el.open).to.be.true
    })

    it('should toggle on Space key', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Content</gds-details>
      `)
      const summary = el.shadowRoot!.querySelector('.summary') as HTMLElement
      summary.focus()

      await sendKeys({ press: 'Space' })
      await el.updateComplete
      expect(el.open).to.be.true
    })
  })

  describe('UI State Events', () => {
    it('should emit gds-ui-state event on open', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test">Content</gds-details>
      `)
      const handler = sinon.spy()
      el.addEventListener('gds-ui-state', handler)

      el.open = true
      await el.updateComplete

      expect(handler).to.have.been.calledOnce
      expect(handler.firstCall.args[0].detail).to.be.true
    })

    it('should emit gds-ui-state event on close', async () => {
      const el = await fixture<GdsDetails>(html`
        <gds-details summary="Test" open>Content</gds-details>
      `)
      const handler = sinon.spy()
      el.addEventListener('gds-ui-state', handler)

      el.open = false
      await el.updateComplete

      expect(handler).to.have.been.calledOnce
      expect(handler.firstCall.args[0].detail).to.be.false
    })
  })

  describe('Group Synchronization', () => {
    it('should close other details in same group', async () => {
      const container = await fixture(html`
        <div>
          <gds-details name="group1">Content 1</gds-details>
          <gds-details name="group1">Content 2</gds-details>
        </div>
      `)
      const [details1, details2] = Array.from(
        container.querySelectorAll('gds-details'),
      ) as GdsDetails[]

      details1.open = true
      await details1.updateComplete
      expect(details1.open).to.be.true
      expect(details2.open).to.be.false

      details2.open = true
      await details2.updateComplete
      expect(details1.open).to.be.false
      expect(details2.open).to.be.true
    })

    // it('should not affect details without group name', async () => {
    //   const container = await fixture(html`
    //     <div>
    //       <gds-details name="group1">Content 1</gds-details>
    //       <gds-details>Content 2</gds-details>
    //     </div>
    //   `)
    //   const [details1, details2] = Array.from(
    //     container.querySelectorAll('gds-details'),
    //   ) as GdsDetails[]

    //   details1.open = true
    //   await details1.updateComplete
    //   details2.open = true
    //   await details2.updateComplete

    //   expect(details1.open).to.be.true
    //   expect(details2.open).to.be.true
    // })
  })
})
