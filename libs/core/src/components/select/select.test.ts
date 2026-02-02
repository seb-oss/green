import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { GdsSelect } from '@sebgroup/green-core/components/select/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { aTimeout, fixture, html as testingHtml } from '../../utils/testing'

import '@sebgroup/green-core/components/select/index.js'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-select>', () => {
  describe('Rendering', () => {
    it('should render a label', async () => {
      const el = await fixture<GdsSelect>(
        html`<gds-select label="Select Label"></gds-select>`,
      )
      const labelEl = el.shadowRoot?.querySelector('label#label-text')
      expect(labelEl).toBeDefined()
      expect(labelEl?.textContent).toContain('Select Label')
    })

    it('should render options correctly', async () => {
      const el = await fixture<GdsSelect>(
        html`<gds-select label="Select Label">
          <select>
            <option value="">Please select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </gds-select>`,
      )

      // Wait for component to be ready
      await el.updateComplete

      // Get the select element through the component method
      const selectElement = el.selectElement
      expect(selectElement).toBeDefined()
      expect(selectElement.options.length).toBe(3) // 1 for "Please select" + 2 options
      expect(selectElement.options[0].text).toBe('Please select')
      expect(selectElement.options[1].text).toBe('Option 1')
      expect(selectElement.options[2].text).toBe('Option 2')
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest', async () => {
      const el = await fixture<GdsSelect>(
        html`<gds-select label="Select Label" supporting-text="Supporting Text">
          <select>
            <option value="">Please select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </gds-select>`,
      )
      await expect(el).toBeAccessible()
    })
  })

  describe('Interaction', () => {
    it('should render options when the gds-select component is clicked', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select label="Select Label">
          <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </gds-select>
      `)

      // Wait for the component to be ready
      await el.updateComplete

      // Click on the gds-select component to simulate user interaction
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))

      // Wait for any updates to complete
      await el.updateComplete

      // Check if the options are rendered in the dropdown
      const options = el.shadowRoot?.querySelectorAll('option') // Adjust selector based on your implementation
      expect(options.length).toBeGreaterThan(0) // Check if there are options available

      // Optionally, check if the first option is visible
      expect(options[0].textContent).toBe('Option 1') // Verify the first option's text
    })

    it('should select option based on value', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select label="Select Label" value="1">
          <select>
            <option value="">Please select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete
      expect(el.displayValue).toBe('Option 1')
    })

    it('should return a comma separated string as display value for multiple selections', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select label="Select Label" .value=${['1', '2']}>
          <select multiple>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete
      expect(el.displayValue).toBe('Option 1, Option 2')
    })

    it('should handle no pre-selected options', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select label="Select Label">
          <select>
            <option value="">Please select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete
      expect(el.value).toBe('')
    })
  })
})
