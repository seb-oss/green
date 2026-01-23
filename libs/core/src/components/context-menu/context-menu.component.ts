import { localized, msg } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { Placement } from '@floating-ui/dom'

import { GdsElement } from '../../gds-element'
import { GdsMenuItem } from '../../primitives/menu/menu-item.component'
import { GdsMenu } from '../../primitives/menu/menu.component'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button/button.component'
import { IconDotGridOneHorizontal } from '../icon/icons/dot-grid-one-horizontal'
import {
  applyTriggerAriaAttributes,
  GdsPopover,
} from '../popover/popover.component'

export { GdsMenuItem } from '../../primitives/menu/menu-item.component'
export { GdsMenuHeading } from '../../primitives/menu/menu-heading.component'

/**
 * @element gds-context-menu
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
  static styles = [tokens]

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

  #elTriggerBtn?: HTMLElement

  @query('slot[name="trigger"]')
  private _elTriggerSlot!: HTMLSlotElement

  connectedCallback() {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-context-menu')

    this.updateComplete.then(this.#handleTriggerSlotChange)
    this.addEventListener('keydown', (e) => {
      if (this.open && e.key == 'Tab') {
        this.open = false
        e.preventDefault()
      }
    })
  }

  render() {
    return html`<slot
        name="trigger"
        @slotchange=${this.#handleTriggerSlotChange}
        ><gds-button
          .rank=${'secondary'}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel
            ? html`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`
            : html`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${when(this.open, this.#renderPopover)}`
  }

  #setupButton = () => {
    if (!this.#elTriggerBtn)
      this.#elTriggerBtn =
        this.shadowRoot?.querySelector('#trigger') ?? undefined

    const btn = this.#elTriggerBtn
    if (btn && !btn.hasAttribute('data-gds-context-menu-trigger')) {
      btn.setAttribute('data-gds-context-menu-trigger', 'true')
      btn.addEventListener('click', () => {
        this.open = !this.open
      })
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          this.open = true
        }
      })
      applyTriggerAriaAttributes(btn, this.open, 'menu')
    }
  }

  #handleTriggerSlotChange = () => {
    const triggerBtn = this._elTriggerSlot
      .assignedNodes({ flatten: true })
      .find((node) => {
        return node instanceof HTMLElement
      })
    if (triggerBtn) {
      this.#elTriggerBtn = triggerBtn
    }
    this.#setupButton()
  }

  #renderPopover = () => {
    return html`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(this.#elTriggerBtn)}
      .anchorRef=${Promise.resolve(this.#elTriggerBtn)}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${'menu'}
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

  @watch('open', { waitUntilFirstUpdate: true })
  private _handleOpenChange() {
    if (!this.open) {
      requestAnimationFrame(() => this.#elTriggerBtn?.focus())
    }
  }
}
