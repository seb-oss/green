import { LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { html } from '../../../../libs/core/src/scoping'

import '../../../../libs/core/src/components/index'

@customElement('plain-form-controls')
export class PlainFormControls extends LitElement {
  protected createRenderRoot() {
    return this
  }

  @state()
  size = 'large'

  @state()
  plain = false

  @state()
  disabled = false

  @state()
  invalid = false

  @state()
  showSupportingText = false

  @state()
  showExtendedSupportingText = false

  #supportingText = 'This is a supporting text'
  #extendedSupportingText = html`This is an extended supporting text, whis may
    be a lot longer than the supporting text, and may even contain
    <a href="#">links</a> and other HTML elements.`

  render() {
    return html`<gds-flex
      flex-direction="column"
      gap="m"
      max-width="1200px"
      margin="0 auto"
    >
      <gds-richtext>
        <h1>Form control configurations</h1>
        <p>
          This test page shows all the form controls and provides a way to
          configure them, so you can see how they behave in different
          configurations.
        </p>
      </gds-richtext>
      <gds-card>
        <gds-flex>
          <label class="form-control"
            ><input
              type="checkbox"
              .checked=${this.plain}
              @change=${(e) => (this.plain = e.target.checked)} /><span
              >Plain</span
            ><i></i
          ></label>
          <label class="form-control"
            ><input
              type="checkbox"
              .checked=${this.disabled}
              @change=${(e) => (this.disabled = e.target.checked)} /><span
              >Disabled</span
            ><i></i
          ></label>
          <label class="form-control"
            ><input
              type="checkbox"
              .checked=${this.invalid}
              @change=${(e) => (this.invalid = e.target.checked)} /><span
              >Invalid</span
            ><i></i
          ></label>
          <label class="form-control"
            ><input
              type="checkbox"
              .checked=${this.showSupportingText}
              @change=${(e) =>
                (this.showSupportingText = e.target.checked)} /><span
              >Show supporting text</span
            ><i></i
          ></label>
          <label class="form-control"
            ><input
              type="checkbox"
              .checked=${this.showExtendedSupportingText}
              @change=${(e) =>
                (this.showExtendedSupportingText = e.target.checked)} /><span
              >Show extended supporting text</span
            ><i></i
          ></label>
        </gds-flex>
        <gds-flex width="300px">
          <gds-div padding="m">Size</gds-div>
          <gds-segmented-control
            .value=${this.size}
            @change=${(e: CustomEvent) => {
              this.size = (e.target as any).value
            }}
          >
            <gds-segment value="large">Large</gds-segment>
            <gds-segment value="small">Small</gds-segment>
          </gds-segmented-control>
        </gds-flex>
      </gds-card>
      <gds-flex
        border-width="4xs 0 4xs"
        border-color="secondary"
        margin="l"
        border-style="dashed"
        align-items="flex-end"
      >
        <gds-button size=${this.size} .disabled=${this.disabled}
          >Button</gds-button
        >
        <gds-input
          label="Firstname"
          size=${this.size}
          ?plain=${this.plain}
          .supportingText=${this.showSupportingText ? this.#supportingText : ''}
          .invalid=${this.invalid}
          .disabled=${this.disabled}
        >
          ${when(
            this.showExtendedSupportingText,
            () =>
              html`<span slot="extended-supporting-text">
                ${this.#extendedSupportingText}
              </span>`,
          )}
        </gds-input>
        <gds-dropdown
          label="Favorite pet"
          size=${this.size}
          ?plain=${this.plain}
          .supportingText=${this.showSupportingText ? this.#supportingText : ''}
          .invalid=${this.invalid}
          .disabled=${this.disabled}
        >
          <gds-option value="1">Option 1</gds-option>
          <gds-option value="2">Option 2</gds-option>
          <gds-option value="3">Option 3</gds-option>
        </gds-dropdown>
        <gds-select
          label="Favorite superhero"
          size=${this.size}
          ?plain=${this.plain}
          .supportingText=${this.showSupportingText ? this.#supportingText : ''}
          .invalid=${this.invalid}
          .disabled=${this.disabled}
        >
          <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </gds-select>
        <gds-datepicker
          label="Birthday"
          size=${this.size}
          ?plain=${this.plain}
          .supportingText=${this.showSupportingText ? this.#supportingText : ''}
          .invalid=${this.invalid}
          .disabled=${this.disabled}
        ></gds-datepicker>
        <gds-button size="small" size=${this.size} .disabled=${this.disabled}
          >Button</gds-button
        >
      </gds-flex>
      <gds-flex
        border-width="4xs 0 4xs"
        border-color="secondary"
        margin="l"
        border-style="dashed"
      >
        <gds-textarea
          label="About you"
          size=${this.size}
          ?plain=${this.plain}
          .supportingText=${this.showSupportingText ? this.#supportingText : ''}
          .invalid=${this.invalid}
          .disabled=${this.disabled}
        ></gds-textarea>
      </gds-flex>
    </gds-flex> `
  }
}
