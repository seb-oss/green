import './app.element.scss'
import '@sebgroup/stems'
import { Dropdown, GdsOption } from '@sebgroup/stems'

export class AppElement extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    const title = 'stems-lib-dev'

    this.innerHTML = `
    <div class="wrapper">
      <form id="my-form">
        <input name="my-input">

        <div class="gds-form-item">
          <gds-dropdown id="dropdown" name="my-dropdown">
            <gds-option>Select value</gds-option>
            <gds-option value="v1"><strong><em>Value</em></strong> 1</gds-option>
            <gds-option value="v2">Value 2</gds-option>
            <gds-option value="v3">Value 3</gds-option>
            <p>Hello</p>
            <div>Some other crap</div>
            asdasd
          </gds-dropdown>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
      `

    const dropdown = this.querySelector('#dropdown') as Dropdown
    dropdown.addEventListener('change', (e: CustomEvent) => {
      console.log('Value changed: ', e.detail.value)
      console.log('dropdown', dropdown.values)
    })
    dropdown.addEventListener('ui-state', (e: CustomEvent) =>
      console.log('UI state changed: ', e.detail)
    )

    dropdown.value = 'v2'
    console.log('dropdown value', dropdown.value)

    const newOption = document.createElement('gds-option') as GdsOption
    newOption.value = { test: 'test' }
    newOption.innerHTML = 'New option'
    dropdown.appendChild(newOption)

    console.log(dropdown.values)

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
