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

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-radio>', () => {
  describe('Rendering', () => {
    it('should render with label', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Label" value="test"></gds-radio>
      `)
      await el.updateComplete
      const label = el.shadowRoot?.querySelector('gds-selection-field-label')
      expect(label).to.exist
      expect(label?.getAttribute('label')).to.equal('Test Label')
    })

    it('should render with supporting text', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio
          label="Test Label"
          value="test"
          supporting-text="Help text"
        ></gds-radio>
      `)
      await el.updateComplete
      const label = el.shadowRoot?.querySelector('gds-selection-field-label')
      expect(label?.getAttribute('supporting-text')).to.equal('Help text')
    })
  })

  describe('API', () => {
    let el: GdsRadio

    beforeEach(async () => {
      el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Label" value="test"></gds-radio>
      `)
      await el.updateComplete
    })

    it('should update checked state', async () => {
      el.checked = true
      await el.updateComplete
      expect(el.checked).to.be.true
      expect(el.getAttribute('aria-checked')).to.equal('true')
    })

    it('should handle disabled state', async () => {
      el.disabled = true
      await el.updateComplete
      expect(el.disabled).to.be.true
      expect(el.getAttribute('aria-disabled')).to.equal('true')
      expect(el.getAttribute('tabindex')).to.equal('-1')
    })

    it('should handle invalid state', async () => {
      el.invalid = true
      await el.updateComplete
      expect(el.invalid).to.be.true
      expect(el.hasAttribute('aria-invalid')).to.be.true
    })
  })

  describe('Events', () => {
    it('should emit change event when clicked', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Label" value="test"></gds-radio>
      `)
      await el.updateComplete

      const changeSpy = sinon.spy()
      el.addEventListener('change', changeSpy)

      const label = el.shadowRoot?.querySelector('gds-selection-field-label')
      label?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await el.updateComplete

      expect(changeSpy).to.have.been.calledOnce
      expect(el.checked).to.be.true
    })

    it('should not emit change event when disabled', async () => {
      const el = await fixture<GdsRadio>(html`
        <gds-radio label="Test Label" value="test" disabled></gds-radio>
      `)
      await el.updateComplete

      const changeSpy = sinon.spy()
      el.addEventListener('change', changeSpy)

      const label = el.shadowRoot?.querySelector('gds-selection-field-label')
      label?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await el.updateComplete

      expect(changeSpy).to.not.have.been.called
      expect(el.checked).to.be.false
    })
  })
})

describe('<gds-radio-group>', () => {
  describe('Rendering', () => {
    it('should render with label and radios', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
        </gds-radio-group>
      `)
      await el.updateComplete

      const header = el.shadowRoot?.querySelector('gds-form-control-header')
      const radios = el.querySelectorAll('gds-radio')

      expect(header?.querySelector('[slot="label"]')?.textContent).to.equal(
        'Test Group',
      )
      expect(radios.length).to.equal(2)
    })

    it('should render with supporting text', async () => {
      const el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group" supporting-text="Help text">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
        </gds-radio-group>
      `)
      await el.updateComplete

      const supportingText = el.shadowRoot?.querySelector('#supporting-text')
      expect(supportingText?.textContent?.trim()).to.equal('Help text')
    })
  })

  describe('Selection', () => {
    let el: GdsRadioGroup

    beforeEach(async () => {
      el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
          <gds-radio value="3" label="Option 3"></gds-radio>
        </gds-radio-group>
      `)
      await el.updateComplete
    })

    it('should select radio on change event', async () => {
      const radios = el.querySelectorAll('gds-radio')
      const radio2 = radios[1] as GdsRadio

      radio2.dispatchEvent(new Event('change', { bubbles: true }))
      await el.updateComplete
      await waitUntil(() => el.value === '2')

      expect(el.value).to.equal('2')
      expect(radio2.checked).to.be.true
      expect((radios[0] as GdsRadio).checked).to.be.false
      expect((radios[2] as GdsRadio).checked).to.be.false
    })

    it('should update radio states when value changes', async () => {
      el.value = '3'
      await el.updateComplete

      const radios = el.querySelectorAll('gds-radio')
      expect((radios[0] as GdsRadio).checked).to.be.false
      expect((radios[1] as GdsRadio).checked).to.be.false
      expect((radios[2] as GdsRadio).checked).to.be.true
    })
  })

  describe('Keyboard Navigation', () => {
    let el: GdsRadioGroup

    beforeEach(async () => {
      el = await fixture<GdsRadioGroup>(html`
        <gds-radio-group label="Test Group">
          <gds-radio value="1" label="Option 1"></gds-radio>
          <gds-radio value="2" label="Option 2"></gds-radio>
          <gds-radio value="3" label="Option 3"></gds-radio>
        </gds-radio-group>
      `)
      await el.updateComplete
    })

    it('should handle ArrowRight/ArrowDown navigation', async () => {
      const content = el.shadowRoot?.querySelector('.content')
      content?.focus()

      content?.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
        }),
      )
      await el.updateComplete
      expect(el.value).to.equal('1')

      content?.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
        }),
      )
      await el.updateComplete
      expect(el.value).to.equal('2')
    })

    it('should handle ArrowLeft/ArrowUp navigation', async () => {
      el.value = '2'
      await el.updateComplete

      const content = el.shadowRoot?.querySelector('.content')
      content?.focus()

      content?.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowLeft',
          bubbles: true,
        }),
      )
      await el.updateComplete
      expect(el.value).to.equal('1')
    })
  })
})
