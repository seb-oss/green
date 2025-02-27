// radio.test.ts
import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml, waitUntil } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type {
  GdsRadio,
  GdsRadioGroup,
} from '@sebgroup/green-core/components/radio'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-radio>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-radio></gds-radio>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-radio')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test"></gds-radio>
      `)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })

    it('has correct ARIA attributes', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test"></gds-radio>
      `)
      const radio = el.shadowRoot?.querySelector('[role="radio"]')
      expect(radio?.getAttribute('role')).to.equal('radio')
      expect(radio?.getAttribute('aria-checked')).to.equal('false')
    })
  })

  describe('API', () => {
    it('should update checked state', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test"></gds-radio>
      `)
      el.checked = true
      await el.updateComplete
      expect(el.checked).to.be.true
    })

    it('should handle disabled state', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test" disabled></gds-radio>
      `)
      const radio = el.shadowRoot?.querySelector('[role="radio"]')
      expect(radio?.getAttribute('aria-disabled')).to.equal('true')
    })

    it('should warn when used outside radio group', async () => {
      const consoleSpy = sinon.spy(console, 'warn')
      await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test"></gds-radio>
      `)
      expect(consoleSpy).to.have.been.calledWith(
        sinon.match(/Should be wrapped in a gds-radio-group/),
      )
      consoleSpy.restore()
    })
  })

  describe('Interactions', () => {
    it('should emit change event when clicked', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test"></gds-radio>
      `)
      const changeSpy = sinon.spy()
      el.addEventListener('change', changeSpy)

      const radio = el.shadowRoot?.querySelector('[role="radio"]')
      await clickOnElement(radio!)

      expect(changeSpy).to.have.been.calledOnce
    })

    it('should not emit change event when disabled', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Radio" value="test" disabled></gds-radio>
      `)
      const changeSpy = sinon.spy()
      el.addEventListener('change', changeSpy)

      const radio = el.shadowRoot?.querySelector('[role="radio"]')
      await clickOnElement(radio!)

      expect(changeSpy).to.not.have.been.called
    })
  })
})

describe('<gds-radio-group>', () => {
  it('should handle single selection', async () => {
    const el = await fixture<GdsRadioGroup>(html`
      <gds-radio-group label="Test Group">
        <gds-radio value="1" label="Option 1"></gds-radio>
        <gds-radio value="2" label="Option 2"></gds-radio>
        <gds-radio value="3" label="Option 3"></gds-radio>
      </gds-radio-group>
    `)

    const radios = el.querySelectorAll('gds-radio')
    await clickOnElement(radios[1])
    await el.updateComplete

    expect(el.value).to.equal('2')
    expect((radios[1] as GdsRadio).checked).to.be.true
    expect((radios[0] as GdsRadio).checked).to.be.false
    expect((radios[2] as GdsRadio).checked).to.be.false
  })

  describe('Keyboard Navigation', () => {
    it('should handle arrow key navigation', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
          <gds-radio value="3" label="Option 3"></gds-radio>
        </gds-radio-group>
      `)

      el.focus()
      await sendKeys({ press: 'ArrowDown' })
      await el.updateComplete

      const radios = el.querySelectorAll('gds-radio')
      expect(document.activeElement).to.equal(radios[0])
    })

    it('should cycle through options with arrow keys', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
          <gds-radio value="3" label="Option 3"></gds-radio>
        </gds-radio-group>
      `)

      el.focus()
      await sendKeys({ press: 'ArrowDown' })
      await sendKeys({ press: 'ArrowDown' })
      await el.updateComplete

      const radios = el.querySelectorAll('gds-radio')
      expect(document.activeElement).to.equal(radios[1])
    })
  })
})
