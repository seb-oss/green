import { userEvent } from '@vitest/browser/context'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { GdsInput } from '@sebgroup/green-core/components/input/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import {
  aTimeout,
  clickOnElement,
  fixture,
  tabNext,
  html as testingHtml,
} from '../../utils/testing'

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
        expect(labelEl).toBeDefined()
        expect(labelEl?.textContent).toContain('My label')
      })

      it('should pass through the type attribute', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" type="email"></gds-input>`,
        )
        const inputEl = el.shadowRoot?.querySelector('input')
        expect(inputEl?.type).toBe('email')
      })
    })

    describe('API', () => {
      it('should set the value', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        el.value = 'My value'
        expect(el.value).toBe('My value')
      })

      it('should set the name', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" name="my-name"></gds-input>`,
        )
        expect(el.name).toBe('my-name')
      })

      it('should fire a change event when the value has changed and focus has shifted away', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input><input />`,
        )
        const changeSpy = vi.fn()
        el.addEventListener('change', changeSpy)
        el.focus()

        await userEvent.keyboard('a')
        await tabNext()

        expect(changeSpy).toHaveBeenCalledOnce()
      })

      it('should fire an input event when the value changes', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        const inputSpy = vi.fn()
        el.addEventListener('input', inputSpy)
        el.focus()
        await el.updateComplete
        await userEvent.keyboard('a')
        expect(inputSpy).toHaveBeenCalledOnce()
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

        expect(remainingCharactersBadgeEl).toBeDefined()
        expect(remainingCharactersBadgeEl?.textContent).toBe('10')

        el.value = 'My value'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).toBe('2')

        el.value = 'My value longer'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).toBe('-5')
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
        expect(clearButtonEl).toBeDefined()
      })
      it('should fire an input event when search has been cleared', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            clearable
            value="My value"
          ></gds-input>`,
        )
        const changeSpy = vi.fn()
        el.addEventListener('gds-input-cleared', changeSpy)
        const clearButtonEl = el.test_getClearButton()
        clearButtonEl.click()
        expect(changeSpy).toHaveBeenCalledOnce()
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
        expect(inputEl?.getAttribute('min')).toBe('1')
        expect(inputEl?.getAttribute('max')).toBe('10')
        expect(inputEl?.getAttribute('step')).toBe('1')
        expect(inputEl?.getAttribute('autocapitalize')).toBe('on')
        expect(inputEl?.getAttribute('autocomplete')).toBe('on')
        expect(inputEl?.getAttribute('autocorrect')).toBe('true')
        expect(inputEl?.getAttribute('spellcheck')).toBe('true')
        expect(inputEl?.getAttribute('inputmode')).toBe('numeric')
        expect(inputEl?.getAttribute('autofocus')).toBe('')
        expect(inputEl?.getAttribute('enterkeyhint')).toBe('enter')
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

        expect(remainingCharactersBadgeEl).toBeDefined()
        expect(remainingCharactersBadgeEl?.textContent).toBe('5')
        expect(remainingCharactersBadgeEl?.getAttribute('variant')).toBe(
          'positive',
        )

        el.value = '12345678901'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).toBe('-1')
        expect(remainingCharactersBadgeEl?.getAttribute('variant')).toBe(
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
        expect(el.value).toBe('')
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
        await expect(el).toBeAccessible()
      })

      it('label should have a for attribute that matches the input id', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        const inputEl = el.shadowRoot?.querySelector('input')
        expect(labelEl?.getAttribute('for')).toBe(inputEl?.id)
      })

      it('should focus when clicking on the field', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        await clickOnElement(el.test_getFieldElement())
        expect(document.activeElement).toBe(el)
      })

      it('should focus when clicking on the label', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`,
        )
        await clickOnElement(el.shadowRoot?.querySelector('label') as Element)
        expect(document.activeElement).toBe(el)
      })

      it('should focus when calling focus()', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`,
        )
        el.focus()
        expect(document.activeElement).toBe(el)
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
        expect(errorMessageEl).toBeDefined()
        expect(inputEl?.getAttribute('aria-describedby')).toContain('message')
        expect(inputEl?.getAttribute('aria-invalid')).toBe('true')
        await expect(el).toBeAccessible()
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
        expect(el.selectionStart).toBe(0)
        expect(el.selectionEnd).toBe(5)

        // Test select
        el.select()
        expect(el.selectionStart).toBe(0)
        expect(el.selectionEnd).toBe(11)

        // Test setRangeText
        el.setRangeText('Goodbye', 0, 5)
        expect(el.value).toBe('Goodbye World')

        // Test selection properties getters/setters
        el.selectionStart = 8
        el.selectionEnd = 13
        el.selectionDirection = 'forward'
        expect(el.selectionStart).toBe(8)
        expect(el.selectionEnd).toBe(13)
        expect(el.selectionDirection).toBe('forward')
      })
    })
  })
}
