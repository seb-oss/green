import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/layout/card/index.js'
//import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/datepicker/index.js'
import '@sebgroup/green-core/components/dropdown/index.js'
import '@sebgroup/green-core/components/form/summary/index.js'
import '@sebgroup/green-core/components/coachmark/index.js'
import '@sebgroup/green-core/components/button/fab/index.js'

@customElement('form-validation')
export class FormValidationExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`<gds-card border="4xs/base300" padding="m" border-radius="s">
      <form>
        <!-- <gds-input
          required
          label="Name"
          placeholder="Enter your name"
        ></gds-input> -->
        <gds-fab position="fixed; <s { static }" inset="auto 5rem 5rem auto"
          >FAB!</gds-fab
        >
        <gds-datepicker
          label="Birth date"
          .validator=${{
            validate: (el: any) => {
              console.log('Inside datepicker validator', el.value)
              if (el.value === undefined)
                return [
                  { ...el.validity, valid: false, customError: true },
                  'This field is required',
                ]
            },
          }}
        ></gds-datepicker>
        <gds-dropdown
          label="Favorite pet"
          .validator=${{
            validate: (el: any) => {
              console.log('Inside custom validator', el.value)
              if (el.value !== 'cat')
                return [
                  { ...el.validity, valid: false, customError: true },
                  'Only cats are allowed!',
                ]
            },
          }}
        >
          <gds-option>Pick favorite</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-form-summary></gds-form-summary>
        <gds-button type="submit">Submit</gds-button>
        <gds-button id="reset-button" type="reset">Reset</gds-button>
      </form>
      <!-- <gds-coachmark .target=${['#reset-button']}>
          <div>Hey, I'm a coachmark!</div>
        </gds-coachmark> -->
    </gds-card>`
  }
}
