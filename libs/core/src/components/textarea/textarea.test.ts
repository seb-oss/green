import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type { GdsTextarea } from '@sebgroup/green-core/components/textarea/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/textarea/index.js'

const html = htmlTemplateTagFactory(testingHtml)

for (const variant of ['default' /*, 'floating-label' */] as const) {
  describe('<gds-textarea>', () => {
    describe('Rendering', () => {
      it('should render a label', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        expect(labelEl).to.exist
        expect(labelEl?.textContent).to.contain('My label')
      })
    })

    describe('API', () => {
      it('should set the value', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        el.value = 'My value'
        expect(el.value).to.equal('My value')
      })

      it('should set the name', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            name="my-name"
          ></gds-textarea>`,
        )
        expect(el.name).to.equal('my-name')
      })

      it('should fire a change event when the value has changed and focus has shifted away', async () => {
        const el = await fixture<Ht>(
          html`<gds-textarea variant="${variant}"></gds-textarea><input />`,
        )
        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)
        el.focus()
        await sendKeys({ press: 'a' })
        await sendKeys({ press: 'Tab' })
        expect(changeSpy).to.have.been.calledOnce
      })

      it('should fire an input event when the value changes', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        const inputSpy = sinon.spy()
        el.addEventListener('input', inputSpy)
        el.focus()
        await el.updateComplete
        await sendKeys({ press: 'a' })
        expect(inputSpy).to.have.been.calledOnce
      })

      it('should show remaining characters when maxlength is set', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            maxlength="10"
          ></gds-textarea>`,
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
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            clearable
            value="My value"
          ></gds-textarea>`,
        )
        const clearButtonEl = el.test_getClearButton()
        expect(clearButtonEl).to.exist
      })

      it('should forward standard attributes', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            autocapitalize="on"
            autocomplete="on"
            autocorrect="on"
            spellcheck="true"
            inputmode="numeric"
            autofocus
            enterkeyhint="enter"
          ></gds-textarea>`,
        )

        const textareaEl = el.shadowRoot?.querySelector('textarea')
        expect(textareaEl?.getAttribute('autocapitalize')).to.equal('on')
        expect(textareaEl?.getAttribute('autocomplete')).to.equal('on')
        expect(textareaEl?.getAttribute('autocorrect')).to.equal('true')
        expect(textareaEl?.getAttribute('spellcheck')).to.equal('true')
        expect(textareaEl?.getAttribute('inputmode')).to.equal('numeric')
        expect(textareaEl?.getAttribute('autofocus')).to.equal('')
        expect(textareaEl?.getAttribute('enterkeyhint')).to.equal('enter')
      })

      it('should support customized character counter badge', async () => {
        const charCounterCallback = (input: GdsTextarea) => {
          const remaining = input.maxlength - input.value.length
          return [remaining, remaining < 0 ? 'negative' : 'positive'] as const
        }

        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            maxlength="10"
          ></gds-textarea>`,
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
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            clearable
            value="My value"
          ></gds-textarea>`,
        )
        const clearButtonEl = el.test_getClearButton()
        clearButtonEl.click()
        expect(el.value).to.equal('')
      })
    })

    describe('Accessibility', () => {
      it('should pass axe smoketest', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
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
          </gds-textarea>`,
        )
        await expect(el).to.be.accessible()
      })

      it('label should have a for attribute that matches the input id', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        const inputEl = el.shadowRoot?.querySelector('textarea')
        expect(labelEl?.getAttribute('for')).to.equal(inputEl?.id)
      })

      it('should focus when clicking on the field', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        await clickOnElement(el.test_getFieldElement())
        expect(document.activeElement).to.equal(el)
      })

      it('should focus when clicking on the label', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        await clickOnElement(el.shadowRoot?.querySelector('label') as Element)
        expect(document.activeElement).to.equal(el)
      })

      it('should focus when calling focus()', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        el.focus()
        expect(document.activeElement).to.equal(el)
      })

      it('should update the rows when value is set programmatically', async () => {
        // Create the custom element directly with a fixed width
        const textareaEl = await fixture<GdsTextarea>(
          html`<gds-textarea style="width: 300px;"></gds-textarea>`,
        )

        await textareaEl.updateComplete
        expect(parseInt(textareaEl.rows, 10)).to.equal(4)

        textareaEl.value = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6'

        await textareaEl.updateComplete
        await aTimeout(0)

        const nativeTextarea = textareaEl.shadowRoot!.querySelector('textarea')
        if (!nativeTextarea) {
          throw new Error('Native <textarea> was not found in the shadowRoot')
        }

        expect(parseInt(textareaEl.rows, 10)).to.be.greaterThan(4)
        expect(
          parseInt(nativeTextarea.style.getPropertyValue('--_lines'), 10),
        ).to.be.greaterThan(4)
      })
    })

    describe('Text Selection API', () => {
      it('should support text selection methods and properties', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}" value="Hello World"></gds-textarea>`,
        )
        await el.updateComplete
        el.focus()

        // Test setSelectionRange
        el.setSelectionRange(0, 5)
        expect(el.selectionStart).to.equal(0)
        expect(el.selectionEnd).to.equal(5)
        expect(el.selectionDirection).to.equal('none')

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
