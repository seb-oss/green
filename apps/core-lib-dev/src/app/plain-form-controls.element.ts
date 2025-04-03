import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

@customElement('plain-form-controls')
export class PlainFormControls extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <gds-flex border-width="4xs 0 4xs" border-color="secondary" margin="l">
        <gds-input label="Firstname" plain></gds-input>
        <gds-dropdown label="Favorite pet" plain>
          <gds-option value="1">Option 1</gds-option>
          <gds-option value="2">Option 2</gds-option>
          <gds-option value="3">Option 3</gds-option>
        </gds-dropdown>
        <gds-select label="Favorite superhero" plain>
          <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </gds-select>
        <gds-datepicker label="Birthday" plain></gds-datepicker>
        <gds-button size="large">Button</gds-button>
      </gds-flex>
      <gds-flex border-width="4xs 0 4xs" border-color="secondary" margin="l">
        <gds-textarea label="About you" plain></gds-textarea>
      </gds-flex>
    `
  }
}
