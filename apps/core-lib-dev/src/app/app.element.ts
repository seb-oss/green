import './app.element.scss'

import {
  GdsDropdown,
  GdsOption,
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core'

const html = htmlTemplateTagFactory((strs: TemplateStringsArray) =>
  strs.join('')
)

export class AppElement extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    const title = 'core-lib-dev'

    registerTransitionalStyles()

    this.innerHTML = html`
      <div class="wrapper">
        <h1 class="mb-5">Green Core test app</h1>
        <div class="card">
          <form id="my-form">
            <gds-dropdown
              id="dropdown"
              name="my-dropdown"
              label="Select a value"
            >
              <gds-option>Select value</gds-option>
              <gds-option value="v1">Value 1</gds-option>
              <gds-option value="v2">Value 2</gds-option>
              <gds-option value="v3">Value 3</gds-option>
            </gds-dropdown>

            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    `

    const dropdown = this.querySelector('#dropdown') as GdsDropdown

    dropdown.addEventListener('change', (e: CustomEvent) => {
      console.log('Is Droopdown? ', e.target instanceof GdsDropdown)
      console.log('Value changed: ', e.detail.value)
      console.log('dropdown', dropdown.options)
    })

    dropdown.addEventListener('gds-ui-state', (e: CustomEvent) =>
      console.log('UI state changed: ', e.detail)
    )

    dropdown.value = 'v2'
    console.log('dropdown value', dropdown.value)

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
        console.log(entry)
      }
    })
  }
}
customElements.define('sebgroup-root', AppElement)
