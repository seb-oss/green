import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/card/index.js'

@customElement('decl-layout-1')
export class DeclLayout1 extends LitElement {
  entries = Array.from({ length: 1000 }, (_, i) => i)

  render() {
    return html`${repeat(
      this.entries,
      () =>
        html`<gds-div margin="s" padding="s">
          <gds-flex gap="s">
            <gds-card border="4xs" padding="s" border-radius="s"
              >1</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >2</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >3</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >1</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >2</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >3</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >1</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >2</gds-card
            >
            <gds-card border="4xs" padding="s" border-radius="s"
              >3</gds-card
            >
          </gds-flex>
        </gds-div>`,
    )}`
  }
}
