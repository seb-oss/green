import { userEvent } from '@vitest/browser/context'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { GdsTextarea } from '@sebgroup/green-core/components/textarea/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import {
  aTimeout,
  clickOnElement,
  fixture,
  tabNext,
  html as testingHtml,
} from '../../utils/testing'

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
        expect(labelEl).toBeDefined()
        expect(labelEl?.textContent).toContain('My label')
      })
    })

    describe('API', () => {
      it('should set the value', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        el.value = 'My value'
        expect(el.value).toBe('My value')
      })

      it('should set the name', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            name="my-name"
          ></gds-textarea>`,
        )
        expect(el.name).toBe('my-name')
      })

      it('should fire a change event when the value has changed and focus has shifted away', async () => {
        const el = await fixture<Ht>(
          html`<gds-textarea variant="${variant}"></gds-textarea><input />`,
        )
        const changeSpy = vi.fn()
        el.addEventListener('change', changeSpy)
        el.focus()
        await userEvent.keyboard('a')
        await tabNext()
        expect(changeSpy).toHaveBeenCalledOnce()
      })

      it('should fire an input event when the value changes', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        const inputSpy = vi.fn()
        el.addEventListener('input', inputSpy)
        el.focus()
        await el.updateComplete
        await userEvent.keyboard('a')
        expect(inputSpy).toHaveBeenCalledOnce()
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
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            clearable
            value="My value"
          ></gds-textarea>`,
        )
        const clearButtonEl = el.test_getClearButton()
        expect(clearButtonEl).toBeDefined()
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
        expect(textareaEl?.getAttribute('autocapitalize')).toBe('on')
        expect(textareaEl?.getAttribute('autocomplete')).toBe('on')
        expect(textareaEl?.getAttribute('autocorrect')).toBe('true')
        expect(textareaEl?.getAttribute('spellcheck')).toBe('true')
        expect(textareaEl?.getAttribute('inputmode')).toBe('numeric')
        expect(textareaEl?.getAttribute('autofocus')).toBe('')
        expect(textareaEl?.getAttribute('enterkeyhint')).toBe('enter')
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
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            clearable
            value="My value"
          ></gds-textarea>`,
        )
        const clearButtonEl = el.test_getClearButton()
        clearButtonEl.click()
        expect(el.value).toBe('')
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
        await expect(el).toBeAccessible()
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
        expect(labelEl?.getAttribute('for')).toBe(inputEl?.id)
      })

      it('should focus when clicking on the field', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        await clickOnElement(el.test_getFieldElement())
        expect(document.activeElement).toBe(el)
      })

      it('should focus when clicking on the label', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        await clickOnElement(el.shadowRoot?.querySelector('label') as Element)
        expect(document.activeElement).toBe(el)
      })

      it('should focus when calling focus()', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        el.focus()
        expect(document.activeElement).toBe(el)
      })

      it('should update the rows when value is set programmatically', async () => {
        // Create the custom element directly with a fixed width
        const textareaEl = await fixture<GdsTextarea>(
          html`<gds-textarea style="width: 300px;"></gds-textarea>`,
        )

        await textareaEl.updateComplete
        expect(parseInt(textareaEl.rows, 10)).toBe(4)

        textareaEl.value = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6'

        await textareaEl.updateComplete
        await aTimeout(0)

        const nativeTextarea = textareaEl.shadowRoot!.querySelector('textarea')
        if (!nativeTextarea) {
          throw new Error('Native <textarea> was not found in the shadowRoot')
        }

        expect(parseInt(textareaEl.rows, 10)).toBeGreaterThan(4)
        expect(
          parseInt(nativeTextarea.style.getPropertyValue('--_lines'), 10),
        ).toBeGreaterThan(4)
      })
    })

    describe('Text Selection API', () => {
      it('should support text selection methods and properties', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            value="Hello World"
          ></gds-textarea>`,
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
