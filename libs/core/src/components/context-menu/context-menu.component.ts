import { localized, msg } from '@lit/localize'
import { nothing } from 'lit'
import { property, query, queryAsync } from 'lit/decorators.js'
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
  getScopedTagName,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button/button.component'
import { IconDotGridOneHorizontal } from '../icon/icons/dot-grid-one-horizontal'
import { GdsPopover } from '../popover/popover.component'
import ContextMenuStyles from './context-menu.styles'

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
  dependsOn: [
    GdsMenuItem,
    GdsMenu,
    GdsPopover,
    GdsButton,
    IconDotGridOneHorizontal,
  ],
})
@localized()
export class GdsContextMenu extends withMarginProps(
  withLayoutChildProps(GdsElement),
) {
  static styles = [tokens, ContextMenuStyles]

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

  @queryAsync('slot[name="icon"]')
  private elIconSlot!: Promise<HTMLSlotElement>

  connectedCallback() {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-context-menu')

    this.#handleSlotChange()

    this.addEventListener('keydown', (e) => {
      if (this.open && e.key == 'Tab') {
        e.preventDefault()
        this.open = false
        this.elTriggerBtn.then((el) => el.focus())
      }
    })
  }

  render() {
    return html`<gds-button
        .rank=${'secondary'}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${() => (this.open = true)}
      >
        ${this.showLabel
          ? html`<slot
                name="icon"
                slot="lead"
                @slotchange=${this.#handleSlotChange}
              ></slot
              >${this.buttonLabel}`
          : html`<slot
              name="icon"
              @slotchange=${this.#handleSlotChange}
            ></slot>`}
      </gds-button>
      ${when(this.open, this.#renderPopover)}`
  }

  #handleSlotChange() {
    this.elIconSlot.then((el) => {
      if (
        !el.assignedNodes({ flatten: true }).some((node) => {
          return (
            node instanceof Element &&
            node.tagName.toLowerCase().startsWith('gds-icon')
          )
        })
      ) {
        const defaultIcon = document.createElement(
          getScopedTagName('gds-icon-dot-grid-one-horizontal'),
        )

        el.appendChild(defaultIcon as HTMLElement)

        this.requestUpdate()
      }
    })
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
