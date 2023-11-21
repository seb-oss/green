import { LitElement } from 'lit-element'
import { msg } from '@lit/localize'
import { classMap } from 'lit-html/directives/class-map.js'
import { property, queryAsync } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { constrainSlots } from '../../utils/helpers'

import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import '../../primitives/menu/menu'
import { Placement } from '@floating-ui/dom'

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
   * The label for the trigger button.
   */
  @property()
  buttonLabel = msg('Open context menu')

  /**
   * The label for the popover and menu. Should describe the context of the menu.
   */
  @property()
  label = ''

  /**
   * The placement of the popover relative to the trigger.
   */
  @property()
  placement: Placement = 'bottom-start'

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
        class="ghost border-0 small ${classMap({ highlighted: this.open })}"
        aria-label="${this.buttonLabel}"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${() => (this.open = !this.open)}
      >
        <slot name="trigger">
          <i class="sg-icon sg-icon-ellipsis"></i>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${(e: CustomEvent) => (this.open = e.detail.open)}
      >
        <gds-menu aria-label=${this.label}>
          <slot allow="gds-menu-item"></slot>
        </gds-menu>
      </gds-popover>`
  }

  #handleItemClick() {
    this.open = false
  }
}
