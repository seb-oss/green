import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/input/index.js'

@customElement('form-layout-1')
export class FormLayout1 extends LitElement {
  entries = Array.from({ length: 1000 }, (_, i) => i)

  render() {
    return html`${repeat(
      this.entries,
      () =>
        html`<form>
          <gds-div margin="s" padding="s">
            <gds-flex gap="s">
              <gds-card border="4xs" padding="s" border-radius="s">
                <gds-input label="Hello" supporting-text="sup text">
                  <span slot="extended-supporting-text"
                    >Extended supporting text</span
                  >
                </gds-input>
              </gds-card>
              <gds-card border="4xs" padding="s" border-radius="s">
                <gds-input label="Hello" supporting-text="sup text">
                  <span slot="extended-supporting-text"
                    >Extended supporting text</span
                  >
                </gds-input>
              </gds-card>
              <gds-card border="4xs" padding="s" border-radius="s">
                <gds-input label="Hello" supporting-text="sup text">
                  <span slot="extended-supporting-text"
                    >Extended supporting text</span
                  >
                </gds-input>
              </gds-card>
            </gds-flex>
          </gds-div>
        </form>`,
    )}`
  }
}
