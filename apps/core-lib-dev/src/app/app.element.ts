import './app.element.scss'

import {
  GdsDropdown,
  GdsOption,
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import { setLocale } from '@sebgroup/green-core/localization'

const html = htmlTemplateTagFactory((strs: TemplateStringsArray) =>
  strs.join('')
)

export class AppElement extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    const title = 'core-lib-dev'

    registerTransitionalStyles()
    setLocale('sv')

    this.innerHTML = html`
      <div class="wrapper">
        <h1 class="mb-5">Green Core test app</h1>
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

            <input name="my-text" />

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </div>
      </div>
    `

    const dropdown = this.querySelector('#dropdown') as GdsDropdown

    dropdown.addEventListener('change', (e: CustomEvent) => {
      console.log('Value changed: ', e.detail.value)
      console.log('dropdown', dropdown.options)
      console.log('dd name', dropdown.name)
    })

    dropdown.addEventListener('gds-ui-state', (e: CustomEvent) =>
      console.log('UI state changed: ', e.detail)
    )

    const newOption = document.createElement(
      getScopedTagName('gds-option')
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
customElements.define('sebgroup-root', AppElement)
