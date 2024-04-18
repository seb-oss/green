import { HTMLTemplateResult, LitElement } from 'lit'
import { Ref, createRef, ref } from 'lit/directives/ref.js'
import { state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  ListboxKbNavController,
  ListboxKbNavigation,
} from '../../controllers/listbox-kb-nav-controller'
import { unwrap } from '../../utils/helpers/unwrap-slots'
import { GdsMenuItem } from './menu-item'
import { TransitionalStyles } from '../../transitional-styles'

/**
 * @element gds-menu
 * @internal
 *
 * A menu generally represents a grouping of common actions or functions that the user can invoke.
 * This primitive corresponds to the aria menu role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role
 *
 * * @slot - The default slot. Only `gds-menu-item` elements should be used here.
 */
@gdsCustomElement('gds-menu')
export class GdsMenu extends GdsElement implements ListboxKbNavigation {
  #slotRef: Ref<HTMLSlotElement> = createRef()

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  constructor() {
    super()
    new ListboxKbNavController(this)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'menu')

    // This component should have the same style as listbox, so we just apply `gds-listbox` here.
    TransitionalStyles.instance.apply(this, 'gds-listbox')
  }

  get navigableItems() {
    if (!this.#slotRef.value) return []

    return (
      (unwrap(this.#slotRef.value).assignedElements() as GdsMenuItem[]).filter(
        (o) =>
          !o.hasAttribute('isplaceholder') &&
          o.gdsElementName === 'gds-menu-item',
      ) || []
    )
  }

  /**
   * Focuses the first item in the menu.
   */
  focus() {
    this.navigableItems[0]?.focus()
  }

  render() {
    return html`${this._tStyles}<slot ${ref(this.#slotRef)}></slot>`
  }
}
