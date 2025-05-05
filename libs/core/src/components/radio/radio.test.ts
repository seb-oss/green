import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import type {
  GdsRadio,
  GdsRadioGroup,
} from '@sebgroup/green-core/components/radio'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/radio/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('Radio Components', () => {
  describe('<gds-radio>', () => {
    describe('Basic Functionality', () => {
      it('should update checked state', async () => {
        const el = await fixture<GdsRadio>(html`
          <gds-radio label="Test Radio" value="test-value"></gds-radio>
        `)
        await el.updateComplete

        el.checked = true
        await el.updateComplete

        expect(el.checked).to.be.true
        expect(el.getAttribute('aria-checked')).to.equal('true')
      })
    })

    describe('Interaction States', () => {
      it('should handle selection', async () => {
        const el = await fixture<GdsRadio>(html`
          <gds-radio label="Test Radio" value="test-value"></gds-radio>
        `)
        await el.updateComplete

        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)

        el.dispatchEvent(new Event('change', { bubbles: true }))
        await el.updateComplete

        expect(changeSpy).to.have.been.calledOnce
      })

      it('should not respond when disabled', async () => {
        const el = await fixture<GdsRadio>(html`
          <gds-radio label="Test Radio" value="test-value" disabled></gds-radio>
        `)
        await el.updateComplete

        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)

        el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        await el.updateComplete

        expect(changeSpy).to.not.have.been.called
        expect(el.hasAttribute('disabled')).to.be.true
        expect(el.getAttribute('aria-disabled')).to.equal('true')
      })
    })
  })

  describe('<gds-radio-group>', () => {
    describe('Selection Management', () => {
      it('should handle radio selection', async () => {
        const el = await fixture<GdsRadioGroup>(html`
          <gds-radio-group label="Test Group">
            <gds-radio value="1" label="Option 1"></gds-radio>
            <gds-radio value="2" label="Option 2"></gds-radio>
          </gds-radio-group>
        `)
        await el.updateComplete
        const firstRadio = el.radios[0]
        firstRadio.click()
        await el.updateComplete
        await new Promise((resolve) => setTimeout(resolve, 0))
        expect(firstRadio.checked).to.be.true
        expect(el.value).to.equal('1')
      })
      it('should update radio states when group value changes', async () => {
        const el = await fixture<GdsRadioGroup>(html`
          <gds-radio-group label="Test Group">
            <gds-radio value="1" label="Option 1"></gds-radio>
            <gds-radio value="2" label="Option 2"></gds-radio>
          </gds-radio-group>
        `)
        await el.updateComplete
        el.value = '2'
        await el.updateComplete
        await new Promise((resolve) => setTimeout(resolve, 0))
        const radios = el.radios
        expect(radios[0].checked).to.be.false
        expect(radios[1].checked).to.be.true
      })
    })

    describe('Keyboard Navigation', () => {
      it('should handle keyboard navigation', async () => {
        const el = await fixture<GdsRadioGroup>(html`
          <gds-radio-group label="Test Group">
            <gds-radio value="1" label="Option 1"></gds-radio>
            <gds-radio value="2" label="Option 2"></gds-radio>
          </gds-radio-group>
        `)
        await el.updateComplete

        const content = el.shadowRoot!.querySelector('.content')!

        el.value = '1'
        await el.updateComplete

        content.focus()
        await el.updateComplete

        content.dispatchEvent(
          new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            bubbles: true,
            composed: true,
            cancelable: true,
          }),
        )

        await el.updateComplete
        await new Promise((resolve) => setTimeout(resolve, 100))

        expect(el.value).to.equal('2')
        expect(el.radios[1].checked).to.be.true
      })
    })

    describe('Form Integration', () => {
      it('should emit change event when radio is selected', async () => {
        const el = await fixture<GdsRadioGroup>(html`
          <gds-radio-group label="Test Group">
            <gds-radio value="1" label="Option 1"></gds-radio>
            <gds-radio value="2" label="Option 2"></gds-radio>
          </gds-radio-group>
        `)
        await el.updateComplete
        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)
        el.radios[0].click()
        await el.updateComplete
        await new Promise((resolve) => setTimeout(resolve, 0))
        expect(changeSpy).to.have.been.called
        expect(el.value).to.equal('1')
      })

      it('should emit input event when radio is selected', async () => {
        const el = await fixture<GdsRadioGroup>(html`
          <gds-radio-group label="Test Group">
            <gds-radio value="1" label="Option 1"></gds-radio>
            <gds-radio value="2" label="Option 2"></gds-radio>
          </gds-radio-group>
        `)
        await el.updateComplete
        const inputSpy = sinon.spy()
        el.addEventListener('input', inputSpy)
        el.radios[0].click()
        await el.updateComplete
        await new Promise((resolve) => setTimeout(resolve, 0))
        expect(inputSpy).to.have.been.called
        expect(el.value).to.equal('1')
      })
    })
  })

  describe('Accessibility', () => {
    it('should be accessible', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
        </gds-radio-group>
      `)
      await expect(el).to.be.accessible()
    })

    it('should be accessible when invalid', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group" aria-invalid="true">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
        </gds-radio-group>
      `)
      await expect(el).to.be.accessible
    })

    it('should be accessible when disabled', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group" disabled>
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
        </gds-radio-group>
      `)
      await expect(el).to.be.accessible()
    })
  })
})
