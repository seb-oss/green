import { localized, msg } from '@lit/localize'
import { nothing } from 'lit'
import { property, queryAsync } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'
import { Placement } from '@floating-ui/dom'

import { GdsElement } from '../../gds-element'
import { GdsMenuItem } from '../../primitives/menu/menu-item.component'
import { GdsMenu } from '../../primitives/menu/menu.component'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsPopover } from '../popover/popover.component'
import styles from './context-menu.styles'

export { GdsMenuItem }
export { GdsMenuHeading } from '../../primitives/menu/menu-heading.component'

/**
 * @element gds-context-menu
 * @status stable
 *
 * The context menu is presented in-context to the related data, so users don’t lose
 * their place in the app. It appears upon interaction with the 3 dot button and
 * displays a list of choices, one choice per line.
 *
 * @event gds-menu-item-click - Fired when a menu item is clicked.
 * @event gds-ui-state - Fired when the menu is opened or closed.
 *
 * @slot - The default slot. Only `gds-menu-item` elements are accepted here.
 */
@gdsCustomElement('gds-context-menu', {
  dependsOn: [GdsMenuItem, GdsMenu, GdsPopover],
})
@localized()
export class GdsContextMenu extends withMarginProps(
  withLayoutChildProps(GdsElement),
) {
  static styles = [tokens, styles]

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
  @property({
    attribute: 'button-label',
  })
  buttonLabel: string = msg('Open context menu')

  /**
   * Whether to show the label on the trigger button.
   */
  @property({
    attribute: 'show-label',
    type: Boolean,
  })
  showLabel = false

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

  connectedCallback() {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-context-menu')

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
        class="icon border-0 small ${classMap({ highlighted: this.open })}"
        aria-label=${this.buttonLabel ?? this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${() => (this.open = true)}
      >
        <slot name="trigger">
          ${this.showLabel ? (this.buttonLabel ?? this.label) : nothing}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${when(this.open, this.#renderPopover)}`
  }

  #renderPopover = () => {
    return html`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${this.elTriggerBtn}
      .anchorRef=${this.elTriggerBtn}
      .label=${this.label}
      .placement=${this.placement}
      @gds-ui-state=${(e: CustomEvent) => (this.open = e.detail.open)}
    >
      <gds-menu
        aria-label=${this.label ?? this.buttonLabel}
        @gds-menu-item-click=${this.#handleItemClick}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`
  }

  #handleItemClick() {
    this.open = false
  }
}
