import { LitElement } from 'lit-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { constrainSlots } from '../../utils/helpers'

import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import { property, queryAsync } from 'lit/decorators.js'

/**
 * @element gds-context-menu
 * @status beta
 *
 * TODO: Add documentation
 */
@gdsCustomElement('gds-context-menu')
export class GdsContextMenu extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: Boolean, reflect: true })
  open = false

  @queryAsync('#trigger')
  private elTriggerBtn!: Promise<HTMLButtonElement>

  constructor() {
    super()
    constrainSlots(this)
  }

  connectedCallback() {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-context-menu')
  }

  render() {
    return html`<button
        id="trigger"
        class="ghost border-0 px-3 small"
        aria-label="Open context menu"
        @click=${() => (this.open = !this.open)}
      >
        <!-- <i class="sg-icon sg-icon-ellipsis"></i> -->
        Trigger
      </button>
      <gds-popover
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        @gds-ui-state=${(e: CustomEvent) => (this.open = e.detail.open)}
      >
        <gds-menu>
          <slot allow="gds-menu-item"></slot>
        </gds-menu>
      </gds-popover>`
  }
}
