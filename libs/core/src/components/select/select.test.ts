import { expect } from '@esm-bundle/chai'
import { fixture, html } from '@open-wc/testing'

import '@sebgroup/green-core/components/select' // Adjust the import path if needed

import { GdsSelect } from './select' // Adjust the import path if needed

describe('<gds-select>', () => {
  it('should render the placeholder correctly on the gds-select element', async () => {
    const el = await fixture<GdsSelect>(html`
      <gds-select placeholder="Select an option" label="Test Select">
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
        </select>
      </gds-select>
    `)
    await el.updateComplete

    // Check if the component exists
    expect(el).to.exist

    // Check if the placeholder is rendered inside the label element
    const placeholderLabel = el.shadowRoot?.querySelector('label#placeholder')
    expect(placeholderLabel).to.exist // Ensure the placeholder label is rendered
    expect(placeholderLabel?.textContent).to.equal('Select an option') // Check if the placeholder text is correct
  })

  it('should render with the correct size class', async () => {
    const elLarge = await fixture<GdsSelect>(html`
      <gds-select size="large" label="Large Select">
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
        </select>
      </gds-select>
    `)
    await elLarge.updateComplete

    // Check if the large size class is applied correctly
    const formControlHeaderLarge =
      elLarge.shadowRoot?.querySelector('.size-large')
    expect(formControlHeaderLarge).to.exist // Ensure the 'size-large' class is present in the shadow DOM

    const elSmall = await fixture<GdsSelect>(html`
      <gds-select size="small" label="Small Select">
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
        </select>
      </gds-select>
    `)
    await elSmall.updateComplete

    // Check if the small size class is applied correctly
    const formControlHeaderSmall =
      elSmall.shadowRoot?.querySelector('.size-small')
    expect(formControlHeaderSmall).to.exist // Ensure the 'size-small' class is present in the shadow DOM
  })

  it('should disable the select when the disabled attribute is set', async () => {
    const el = await fixture<GdsSelect>(html`
      <gds-select disabled label="Disabled Select">
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
        </select>
      </gds-select>
    `)
    await el.updateComplete

    // Check if the select element is disabled
    const selectElement = el.shadowRoot?.querySelector('select')
    expect(selectElement).to.exist // Ensure the select element is rendered
    expect(selectElement?.disabled).to.be.true // Verify that the select element is disabled

    // Ensure the button inside the component is also disabled
    const chevronButton = el.shadowRoot?.querySelector(
      'gds-button',
    ) as HTMLButtonElement
    expect(chevronButton?.disabled).to.be.true // Ensure the chevron button is disabled
  })

  it('should contain a native select element', async () => {
    const el = await fixture<GdsSelect>(html`
      <gds-select label="Native Select">
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
        </select>
      </gds-select>
    `)
    await el.updateComplete

    // Check if the component exists
    expect(el).to.exist

    // Ensure the native select element is inside the shadow DOM
    const selectElement = el.shadowRoot?.querySelector('select')
    expect(selectElement).to.exist // Ensure the select element is rendered in the shadow DOM
  })

  it('should handle multiple attribute correctly', async () => {
    const el = await fixture<GdsSelect>(html`
      <gds-select multiple label="Multiple Select">
        <select multiple>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </gds-select>
    `)
    await el.updateComplete

    // Check if the component exists
    expect(el).to.exist

    // Ensure the multiple attribute is set on the select element
    const selectElement = el.shadowRoot?.querySelector('select')
    expect(selectElement?.multiple).to.be.true // Ensure the select element has the multiple attribute
  })
})
