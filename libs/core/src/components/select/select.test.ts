import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import type { GdsSelect } from '@sebgroup/green-core/components/select/index.js'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/select'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-select>', () => {
  it('is a GdsElement', async () => {
    const el = await fixture(html`<gds-select></gds-select>`)
    expect(el.getAttribute('gds-element')).to.equal('gds-select')
  })

  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<GdsSelect>(html`<gds-select></gds-select>`)
      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })

  describe('API', () => {
    it('should handle custom validation correctly', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select
          label="Test Select"
          .validator=${{
            validate: (el: any) => {
              if (el.value === 'invalid-option') {
                return [
                  {
                    valid: false,
                    customError: true,
                  },
                  'Invalid selection',
                ]
              }
            },
          }}
        >
          <select>
            <option value="">Select an option</option>
            <option value="valid-option">Valid Option</option>
            <option value="invalid-option">Invalid Option</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete

      // Get the native select element
      const selectElement = el
        .shadowRoot!.querySelector('slot')!
        .assignedNodes({ flatten: true })
        .find((node: any) => node.nodeName === 'SELECT') as HTMLSelectElement

      // Initially should be valid
      expect(el.checkValidity()).to.be.true
      expect(el.invalid).to.be.false

      // Select invalid option
      selectElement.value = 'invalid-option'
      selectElement.dispatchEvent(new Event('change'))
      await el.updateComplete

      expect(el.checkValidity()).to.be.false
      expect(el.invalid).to.be.true
      expect(el.validationMessage).to.equal('Invalid selection')

      // Select valid option
      selectElement.value = 'valid-option'
      selectElement.dispatchEvent(new Event('change'))
      await el.updateComplete

      expect(el.checkValidity()).to.be.true
      expect(el.invalid).to.be.false
    })

    it('should update placeholder text when selection changes', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select placeholder="Select an option">
          <select>
            <option value="">Please select</option>
            <option value="option1">First Option</option>
            <option value="option2">Second Option</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete

      const placeholderLabel = el.shadowRoot!.querySelector('label#placeholder')
      const selectElement = el
        .shadowRoot!.querySelector('slot')!
        .assignedNodes({ flatten: true })
        .find((node: any) => node.nodeName === 'SELECT') as HTMLSelectElement

      expect(placeholderLabel?.textContent).to.equal('Select an option')

      // Change selection
      selectElement.value = 'option1'
      selectElement.dispatchEvent(new Event('change'))
      await el.updateComplete

      expect(placeholderLabel?.textContent).to.equal('First Option')
    })

    it('should handle disabled state correctly', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select disabled>
          <select>
            <option value="1">Option 1</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete

      const selectElement = el
        .shadowRoot!.querySelector('slot')!
        .assignedNodes({ flatten: true })
        .find((node: any) => node.nodeName === 'SELECT') as HTMLSelectElement

      const button = el.shadowRoot!.querySelector('gds-button')

      expect(el.disabled).to.be.true
      expect(selectElement.disabled).to.be.true
      expect(button?.hasAttribute('disabled')).to.be.true
    })

    it('should handle multiple select correctly', async () => {
      const el = await fixture<GdsSelect>(html`
        <gds-select>
          <select multiple>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </gds-select>
      `)

      await el.updateComplete

      expect(el.shadowRoot!.querySelector('.multiple')).to.exist
      expect(el.shadowRoot!.querySelector('gds-button')).to.not.exist // Chevron should not be present in multiple mode

      const fieldBase = el.shadowRoot!.querySelector('gds-field-base')
      expect(fieldBase?.getAttribute('align-items')).to.equal('flex-start')
    })
  })
})
