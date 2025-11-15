import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/context-menu/index.js'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles.js'
registerTransitionalStyles()

@customElement('decl-layout-1')
export class DeclLayout1 extends LitElement {
  entries = Array.from({ length: 1000 }, (_, i) => i)

  render() {
    return html`${repeat(
      this.entries,
      () =>
        html`
            <gds-context-menu>
              <gds-menu-item>Item 1</gds-menu-item>
              <gds-menu-item>Item 2</gds-menu-item>
              <gds-menu-item>Item 3</gds-menu-item>
              <gds-menu-item>Item 1</gds-menu-item>
            </gds-context-menu>`,
    )}`
  }
}
