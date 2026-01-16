import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type { GdsInput } from '@sebgroup/green-core/components/input/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/input/index.js'

const html = htmlTemplateTagFactory(testingHtml)

for (const variant of ['default'] as const) {
  describe('<gds-input>', () => {
    describe('Rendering', () => {
      it('should render a label', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        expect(labelEl).to.exist
        expect(labelEl?.textContent).to.contain('My label')
      })

      it('should pass through the type attribute', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" type="email"></gds-input>`,
        )
        const inputEl = el.shadowRoot?.querySelector('input')
        expect(inputEl?.type).to.equal('email')
      })
    })

    describe('API', () => {
      it('should set the value', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        el.value = 'My value'
        expect(el.value).to.equal('My value')
      })

      it('should set the name', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" name="my-name"></gds-input>`,
        )
        expect(el.name).to.equal('my-name')
      })

      it('should fire a change event when the value has changed and focus has shifted away', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input><input />`,
        )
        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)
        el.focus()

        await sendKeys({ press: 'a' })
        await sendKeys({ press: 'Tab' })

        expect(changeSpy).to.have.been.calledOnce
      })

      it('should fire an input event when the value changes', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        const inputSpy = sinon.spy()
        el.addEventListener('input', inputSpy)
        el.focus()
        await el.updateComplete
        await sendKeys({ press: 'a' })
        expect(inputSpy).to.have.been.calledOnce
      })

      it('should show remaining characters when maxlength is set', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" maxlength="10"></gds-input>`,
        )
        const footer = el.shadowRoot?.querySelector(
          '[gds-element=gds-form-control-footer]',
        )
        const remainingCharactersBadgeEl = footer.shadowRoot?.querySelector(
          '[gds-element=gds-badge]',
        )

        expect(remainingCharactersBadgeEl).to.exist
        expect(remainingCharactersBadgeEl?.textContent).to.equal('10')

        el.value = 'My value'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).to.equal('2')

        el.value = 'My value longer'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).to.equal('-5')
      })

      it('should render a clear button when clearable is set and value is non-empty', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            clearable
            value="My value"
          ></gds-input>`,
        )
        const clearButtonEl = el.test_getClearButton()
        expect(clearButtonEl).to.exist
      })
      it('should fire an input event when search has been cleared', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            clearable
            value="My value"
          ></gds-input>`,
        )
        const changeSpy = sinon.spy()
        el.addEventListener('gds-input-cleared', changeSpy)
        const clearButtonEl = el.test_getClearButton()
        clearButtonEl.click()
        expect(changeSpy).to.have.been.calledOnce
      })

      it('should forward standard attributes', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            min="1"
            max="10"
            step="1"
            autocapitalize="on"
            autocomplete="on"
            spellcheck="true"
            inputmode="numeric"
            autofocus
            autocorrect
            enterkeyhint="enter"
          ></gds-input>`,
        )

        const inputEl = el.shadowRoot?.querySelector('input')
        expect(inputEl?.getAttribute('min')).to.equal('1')
        expect(inputEl?.getAttribute('max')).to.equal('10')
        expect(inputEl?.getAttribute('step')).to.equal('1')
        expect(inputEl?.getAttribute('autocapitalize')).to.equal('on')
        expect(inputEl?.getAttribute('autocomplete')).to.equal('on')
        expect(inputEl?.getAttribute('autocorrect')).to.equal('true')
        expect(inputEl?.getAttribute('spellcheck')).to.equal('true')
        expect(inputEl?.getAttribute('inputmode')).to.equal('numeric')
        expect(inputEl?.getAttribute('autofocus')).to.equal('')
        expect(inputEl?.getAttribute('enterkeyhint')).to.equal('enter')
      })

      it('should support customized character counter badge', async () => {
        const charCounterCallback = (input: GdsInput) => {
          const remaining = input.maxlength - input.value.length
          return [remaining, remaining < 0 ? 'negative' : 'positive'] as const
        }

        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" maxlength="10"></gds-input>`,
        )
        el.charCounterCallback = charCounterCallback
        el.value = '12345'
        await el.updateComplete

        const footer = el.shadowRoot?.querySelector(
          '[gds-element=gds-form-control-footer]',
        )
        const remainingCharactersBadgeEl = footer.shadowRoot?.querySelector(
          '[gds-element=gds-badge]',
        )

        expect(remainingCharactersBadgeEl).to.exist
        expect(remainingCharactersBadgeEl?.textContent).to.equal('5')
        expect(remainingCharactersBadgeEl?.getAttribute('variant')).to.equal(
          'positive',
        )

        el.value = '12345678901'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).to.equal('-1')
        expect(remainingCharactersBadgeEl?.getAttribute('variant')).to.equal(
          'negative',
        )
      })
    })

    describe('Interactions', async () => {
      it('should clear the value when clicking on the clear button', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            clearable
            value="My value"
          ></gds-input>`,
        )
        const clearButtonEl = el.test_getClearButton()
        clearButtonEl.click()
        expect(el.value).to.equal('')
      })
    })

    describe('Accessibility', () => {
      it('should pass axe smoketest', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            label="My label"
            value="Not empty"
            supporting-text="Text"
            maxlength="50"
            clearable
          >
            <gds-icon name="mail" slot="lead"></gds-icon>
            <gds-badge slot="trail" variant="information">kr</gds-badge>
            <span slot="extended-supporting-text">
              Extended supporting text goes here.
              <a href="#">Can contain links</a>
            </span>
          </gds-input>`,
        )
        await expect(el).to.be.accessible()
      })

      it('label should have a for attribute that matches the input id', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        const inputEl = el.shadowRoot?.querySelector('input')
        expect(labelEl?.getAttribute('for')).to.equal(inputEl?.id)
      })

      it('should focus when clicking on the field', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        await clickOnElement(el.test_getFieldElement())
        expect(document.activeElement).to.equal(el)
      })

      it('should focus when clicking on the label', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`,
        )
        await clickOnElement(el.shadowRoot?.querySelector('label') as Element)
        expect(document.activeElement).to.equal(el)
      })

      it('should focus when calling focus()', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        el.focus()
        expect(document.activeElement).to.equal(el)
      })

      it('should have an associated error message when in invalid state', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            label="My label"
            error-message="This is an error"
            .invalid=${true}
          ></gds-input>`,
        )
        await aTimeout(0)
        const inputEl = el.shadowRoot?.querySelector('input')
        const errorMessageEl = el.shadowRoot?.querySelector('#message')
        expect(errorMessageEl).to.exist
        expect(inputEl?.getAttribute('aria-describedby')).to.contain('message')
        expect(inputEl?.getAttribute('aria-invalid')).to.equal('true')
        await expect(el).to.be.accessible()
      })
    })

    describe('Text Selection API', () => {
      it('should support text selection methods and properties', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            value="Hello World"
          ></gds-input>`,
        )
        await el.updateComplete
        el.focus()

        // Test setSelectionRange
        el.setSelectionRange(0, 5)
        expect(el.selectionStart).to.equal(0)
        expect(el.selectionEnd).to.equal(5)

        // Test select
        el.select()
        expect(el.selectionStart).to.equal(0)
        expect(el.selectionEnd).to.equal(11)

        // Test setRangeText
        el.setRangeText('Goodbye', 0, 5)
        expect(el.value).to.equal('Goodbye World')

        // Test selection properties getters/setters
        el.selectionStart = 8
        el.selectionEnd = 13
        el.selectionDirection = 'forward'
        expect(el.selectionStart).to.equal(8)
        expect(el.selectionEnd).to.equal(13)
        expect(el.selectionDirection).to.equal('forward')
      })
    })
  })
}
