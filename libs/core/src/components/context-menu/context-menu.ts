import { LitElement } from 'lit-element'
import { msg } from '@lit/localize'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { constrainSlots } from '../../utils/helpers'

import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import { property, queryAsync } from 'lit/decorators.js'

import '../../primitives/menu/menu'

/**
 * @element gds-context-menu
 * @status beta
 *
 * The context menu is presented in-context to the related data, so users don’t lose
 * their place in the app. It appears upon interaction with the 3 dot button and
 * displays a list of choices, one choice per line.
 *
 * @slot - The default slot. Only `gds-menu-item` elements are accepted here.
 */
@gdsCustomElement('gds-context-menu')
export class GdsContextMenu extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * Whether the context menu popover is open.
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * The label for the trigger button and popover.
   */
  @property()
  label = msg('Open context menu')

  @queryAsync('#trigger')
  private elTriggerBtn!: Promise<HTMLButtonElement>

  constructor() {
    super()
    constrainSlots(this)
  }

  connectedCallback() {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-context-menu')

    this.addEventListener('gds-menu-item-click', this.#handleItemClick)

    this.addEventListener('keydown', (e) => {
      if (this.open && e.key == 'Tab') {
        e.preventDefault()
        this.open = false
        this.elTriggerBtn.then((el) => el.focus())
      }
    })
  }

  render() {
    return html`<button
        id="trigger"
        class="ghost border-0 px-3 small"
        aria-label="${this.label}"
        @click=${() => (this.open = !this.open)}
      >
        <!-- <i class="sg-icon sg-icon-ellipsis"></i> -->
        ...
      </button>
      <gds-popover
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .label=${this.label}
        @gds-ui-state=${(e: CustomEvent) => (this.open = e.detail.open)}
      >
        <gds-menu>
          <slot allow="gds-menu-item"></slot>
        </gds-menu>
      </gds-popover>`
  }

  #handleItemClick() {
    this.open = false
  }
}
