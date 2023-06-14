import './app.element.scss'

import { GdsDropdown, GdsOption } from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core'

export class AppElement extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    const title = 'core-lib-dev'

    registerTransitionalStyles()

    this.innerHTML = `
    <div class="wrapper">
      <form id="my-form">

          <input name="my-input">

          <label id="my-label">A dropdown label</label>
          <gds-dropdown id="dropdown" name="my-dropdown" aria-labelledby="my-label">
            <gds-option>Select value</gds-option>
            <gds-option value="v1" aria-label="Custom layout">
              <div style="display: flex">
                <div>
                  <div><strong>Left side</strong></div>
                  <div>Under</div>
                </div>
                <div>
                  <div><strong>Right side</strong></div>
                  <div>Under</div>
                </div>
              </div>
            </gds-option>
            <gds-option value="v2">Value 2</gds-option>
            <gds-option value="v3">Value 3</gds-option>
            <p>Hello</p>
            <div>Some other crap</div>
            asdasd
            </gds-dropdown>

            <br />

            <button type="submit">Submit</button>

      </form>
    </div>
      `

    const dropdown = this.querySelector('#dropdown') as GdsDropdown
    dropdown.addEventListener('change', (e: CustomEvent) => {
      console.log('Value changed: ', e.detail.value)
      console.log('dropdown', dropdown.options)
    })
    dropdown.addEventListener('gds-ui-state', (e: CustomEvent) =>
      console.log('UI state changed: ', e.detail)
    )

    dropdown.value = 'v2'
    console.log('dropdown value', dropdown.value)

    const newOption = document.createElement('gds-option') as GdsOption
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
