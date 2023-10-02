import {
  GdsDropdown,
  GdsOption,
  htmlTemplateTagFactory,
  getScopedTagName,
} from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

const html = htmlTemplateTagFactory((strs, ...values) =>
  strs.map((s, i) => s + values[i]).join('')
)

export class AppElement extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    registerTransitionalStyles()

    this.innerHTML = html`
      <div class="card">
        <form id="my-form">
          <gds-dropdown
            id="dropdown"
            label="Select a value"
            style="width: 200px"
          >
            <span slot="sub-label">Additional <i>label</i> information</span>
            <span slot="message">A message guiding the user</span>
            <gds-option isplaceholder>Select value</gds-option>
          </gds-dropdown>

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    `

    const dropdown = this.querySelector('#dropdown') as GdsDropdown

    ;[1, 2, 3].forEach((num) => {
      const o = document.createElement(
        getScopedTagName('gds-option')
      ) as GdsOption
      o.value = { val: `test${num}` }
      o.innerHTML = `Test option ${num}`
      dropdown.appendChild(o)
    })

    // With this, `dropdown.value = { val: 'test2' }` will select the second option correctly
    dropdown.compareWith = (a, b) => a?.val === b?.val
  }
}
customElements.define('complex-values', AppElement)
