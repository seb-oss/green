import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { IconCheckmark } from '../../components/icon/icons/checkmark.component'
import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import rbcbToggleStyles from '../../shared-styles/rbcb-toggle.style'
import { checkboxToggle } from '../../shared-styles/rbcb-toggle.template'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators'
import { Focusable } from '../../utils/mixins/focusable'
import style from './option.styles'

export interface OptionsContainer extends HTMLElement {
  options: GdsOption[]
  multiple: boolean
}

/**
 * @element gds-option
 *
 * A listbox option is an option in a listbox widget.
 * This primitive corresponds to the aria `option` role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role
 *
 * Can be used together with the `gds-listbox` primitive.
 *
 * @slot - The default slot. Custom content can be used to display the option.
 *
 * @event gds-select - Fired when the option is selected.
 * @event gds-blur - Fired when the option loses focus.
 * @event gds-focus - Fired when the option gains focus.
 */
@gdsCustomElement('gds-option', { dependsOn: [IconCheckmark] })
export class GdsOption extends Focusable(GdsElement) {
  static styles = [tokens, rbcbToggleStyles, style]

  /**
   * The value of the option.
   */
  @property()
  value: any

  /**
   * Controls whether the option is visible or not.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  get hidden(): boolean {
    return this.#hidden
  }
  set hidden(value: string | boolean) {
    const strValue = value.toString()
    this.#hidden = strValue === 'true'
    this.#hidden
      ? this.setAttribute('inert', '')
      : this.removeAttribute('inert')
  }
  #hidden = false

  /**
   * Returns true if the option is selected.
   * Setting this property will select or unselect the option.
   */
  @property({
    attribute: 'aria-selected',
    reflect: true,
  })
  selected = false

  /**
   * Sets this option as a placeholder.
   * A placehodler option does not have a value and will act as the default option.
   *
   * In a multiple select listbox, placeholder options will not be rendered in the list.
   */
  @property({ type: Boolean, reflect: true })
  isPlaceholder = false

  constructor() {
    super()

    this.addEventListener('click', this.#emitSelect)
    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      this.#emitSelect(e)
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'option')

    this.updateComplete.then(() => {
      if (this.isPlaceholder) {
        this.hidden = true
      }
      TransitionalStyles.instance.apply(this, 'gds-option')
    })
  }

  get parentElement() {
    return super.parentElement as OptionsContainer
  }

  @watch('isPlaceholder')
  private _handlePlaceholderStatusChange() {
    if (this.isPlaceholder) {
      this.hidden = true
    } else {
      this.hidden = false
    }
  }

  render() {
    const isMultiple = this.parentElement?.multiple

    if (!isMultiple) {
      if (this.selected) this.setAttribute('highlighted', '')
      else this.removeAttribute('highlighted')
    }

    return html`<div class="item">
      ${when(isMultiple, () =>
        checkboxToggle({
          checked: this.selected,
        }),
      )} <slot></slot>
    </div>`
  }

  #emitSelect(e: MouseEvent | KeyboardEvent) {
    e.stopPropagation()
    this.dispatchCustomEvent('gds-select', {
      bubbles: true,
      composed: true,
      detail: {
        value: this.value,
      },
    })
  }
}
