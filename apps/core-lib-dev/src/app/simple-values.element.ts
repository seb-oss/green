import {
  GdsDropdown,
  GdsOption,
  GdsButton,
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

const html = htmlTemplateTagFactory((strs, ...values) =>
  strs.map((s, i) => s + values[i]).join(''),
)

export class SimpleValues extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    registerTransitionalStyles()

    this.innerHTML = html`
      <div class="card">
        <form id="my-form">
          <gds-form-validator></gds-form-validator>

          <gds-dropdown
            searchable
            multiple
            name="dropdown"
            id="dropdown"
            label="Select a value"
            required
          >
            <span slot="sub-label">Additional <i>label</i> information</span>
            <span slot="message">A message guiding the user</span>

            <gds-option isplaceholder>Select value</gds-option>
            <gds-option value="v1">Value 1</gds-option>
            <gds-option value="v2">Value 2</gds-option>
            <gds-option value="v3">Value 3</gds-option>
          </gds-dropdown>

          <gds-input
            name="my-text"
            label="Label goes here"
            supporting-text="Supporting text goes here"
            maxlength="140"
            variant="simplified"
            clearable
            required
            multiline
          >
            <gds-icon name="mail" slot="lead"></gds-icon>
            <gds-badge slot="trail" variant="surface">kr</gds-badge>
            <span slot="extended-supporting-text">
              Extended supporting text goes here.
              <a href="#">Can contain links</a>
            </span>
          </gds-input>

          <gds-button type="submit" name="the-button" value="derp"
            >Submit</gds-button
          >
          <gds-button type="reset" variant="secondary">Reset</gds-button>
        </form>
      </div>
    `

    const dropdown = this.querySelector('#dropdown') as GdsDropdown

    dropdown.addEventListener('change', (e: CustomEvent) => {
      console.log('Value changed: ', e.detail.value)
      console.log('dropdown', dropdown.options)
      console.log('dd name', dropdown.name)
    })

    dropdown.addEventListener('gds-ui-state', (e: CustomEvent) =>
      console.log('UI state changed: ', e.detail),
    )

    const newOption = document.createElement(
      getScopedTagName('gds-option'),
    ) as GdsOption
    newOption.value = { test: 'test' }
    newOption.innerHTML = 'New option'
    dropdown.appendChild(newOption)

    console.log(dropdown.options)

    const form = this.querySelector('#my-form') as HTMLFormElement
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('Form submitted', form.elements)

      const formData = new FormData(form) as any
      for (const entry of formData.entries()) {
        console.log('Form Data: ', entry)
      }
    })
  }
}
customElements.define('simple-values', SimpleValues)
