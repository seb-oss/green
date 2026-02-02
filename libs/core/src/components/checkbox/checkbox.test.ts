import { userEvent } from '@vitest/browser/context'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  aTimeout,
  clickOnElement,
  fixture,
  tabNext,
  html as testingHtml,
} from '../../utils/testing'

import '@sebgroup/green-core/components/checkbox'

import type { GdsCheckbox } from '@sebgroup/green-core/components/checkbox'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-checkbox>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-checkbox></gds-checkbox>`)
    expect(el.getAttribute('gds-element')).toBe('gds-checkbox')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox label="Checkbox label"></gds-checkbox>`,
      )
      await el.updateComplete
      await expect(el).toBeAccessible()
    })

    it('should have an associated error message when in invalid state', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox
          label="Checkbox label"
          error-message="This is an error message"
          invalid
        ></gds-checkbox>`,
      )
      await el.updateComplete
      const input = el.shadowRoot?.querySelector('input')
      expect(input?.getAttribute('aria-describedby')).toContain('message')
      const message = el.shadowRoot?.querySelector('#message')
      expect(message?.innerText).toBe('This is an error message')
      await expect(el).toBeAccessible()
    })
  })

  describe('API', () => {
    it('Supports checked attribute', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox label="Checkbox label" checked></gds-checkbox>`,
      )
      expect(el.checked).toBe(true)
    })
    it('Supports disabled attribute', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox label="Checkbox label" disabled></gds-checkbox>`,
      )
      expect(el.disabled).toBe(true)
    })
  })

  describe('Interactions', () => {
    it('should be able to click the checkbox', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox label="Checkbox label"></gds-checkbox>`,
      )
      expect(el.checked).toBe(false)
      await clickOnElement(el)
      await el.updateComplete
      expect(el.checked).toBe(true)
    })
    it('should not be able to click the checkbox when disabled', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox label="Checkbox label" disabled></gds-checkbox>`,
      )
      expect(el.checked).toBe(false)
      await clickOnElement(el)
      await el.updateComplete
      expect(el.checked).toBe(false)
    })
  })
})

describe('<gds-checkbox-group>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-checkbox-group></gds-checkbox-group>`)
    expect(el.getAttribute('gds-element')).toBe('gds-checkbox-group')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2"></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )
      await el.updateComplete
      await expect(el).toBeAccessible()
    })
  })

  describe('API', () => {
    // Add actual API tests here!
    it('should expose a list of checkboxes', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2"></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )
      await el.updateComplete
      expect(el.checkboxes.length).toBe(3)
    })
    it('should have a value of empty array when no boxes are checked', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2"></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )
      await el.updateComplete
      expect(el.value).toEqual([])
    })
    it('should have a value of array when boxes are checked', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2" checked></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )
      await el.updateComplete
      expect(el.value).toEqual(['2'])
    })
    it('should reflect the array value back to the checkboxes', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2"></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )
      await el.updateComplete
      el.value = ['1', '3']
      await el.updateComplete
      expect(el.checkboxes[0].checked).toBe(true)
      expect(el.checkboxes[1].checked).toBe(false)
      expect(el.checkboxes[2].checked).toBe(true)
    })
  })

  describe('Interactions', () => {
    // Add actual interaction tests here! (things like keyboard nav, clicking on things behave as expected, etc)
    it('should update the value array when a checkbox is checked', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2"></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )
      await el.updateComplete
      const checkbox = el.checkboxes[0]
      await clickOnElement(checkbox)
      await el.updateComplete
      expect(el.value).toEqual(['1'])
    })
    it('should be possible to tab through the checkboxes', async () => {
      const el = await fixture<GdsCheckbox>(
        html`<gds-checkbox-group label="Group label">
          <gds-checkbox value="1" label="Checkbox 1"></gds-checkbox>
          <gds-checkbox value="2" label="Checkbox 2"></gds-checkbox>
          <gds-checkbox value="3" label="Checkbox 3"></gds-checkbox>
        </gds-checkbox-group>`,
      )

      const checkbox1 = el.checkboxes[0]
      const checkbox3 = el.checkboxes[2]

      await clickOnElement(checkbox1, 'center')
      await el.updateComplete

      await tabNext()
      await aTimeout(1)
      await tabNext()
      await aTimeout(1)
      await userEvent.keyboard(' ')
      await el.updateComplete

      expect(checkbox3.checked).toBe(true)
    })
  })
})
