import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { classMap } from 'lit/directives/class-map.js'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import style from './listbox.styles'

import 'reflect-metadata'
export interface OptionsContainer extends HTMLElement {
  options: GdsOption[]
  multiple: boolean
}

/**
 * @element gds-option
 * @internal
 *
 * A listbox option is an option in a listbox widget.
 * This primitive corresponds to the aria `option` role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role
 *
 * Can be used together with the `gds-listbox` primitive.
 *
 * @slot - The default slot. Custom content can be used to display the option.
 */
@customElement('gds-option')
export class GdsOption extends LitElement {
  static styles = unsafeCSS(style)

  /**
   * The value of the option.
   */
  @property()
  value: any

  /**
   * Controls whether the option is visible or not.
   */
  @property({
    attribute: 'aria-hidden',
    reflect: true,
  })
  hidden: boolean = false

  /**
   * Returns true if the option is selected.
   * Setting this property will select or unselect the option.
   */
  @property({
    attribute: 'aria-selected',
    reflect: true,
  })
  selected: boolean = false

  /**
   * Sets this option as a placeholder.
   * A placehodler option does not have a value and will act as the default option.
   *
   * In a multiple select listbox, placeholder options will not be rendered in the list.
   */
  @property({ type: Boolean })
  placeholder: boolean = false

  constructor() {
    super()

    this.addEventListener('click', this.#emitSelect)
    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      this.#emitSelect()
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'option')

    this.updateComplete.then(() =>
      TransitionalStyles.instance.apply(this, 'gds-option')
    )
  }

  get parentElement() {
    return super.parentElement as OptionsContainer
  }

  /**
   * Focuses the option.
   *
   * @param options - Focus options
   */
  focus(options?: FocusOptions | undefined): void {
    this.setAttribute('tabindex', '0')
    super.focus(options)

    // This hack is here to make sure the option gets focus
    // when the containing popover is first opened, because
    // when this is called, the element may not yet be displayed
    // and therefore `super.focus()` does nothing until some
    // arbitrary amount of time has passed.
    if (document.activeElement !== this) {
      const iv = setInterval(() => {
        if (document.activeElement === this) clearInterval(iv)
        super.focus(options)
      }, 10)
    }
  }

  onblur = (e: FocusEvent) => {
    this.setAttribute('tabindex', '-1')
    this.dispatchEvent(
      new FocusEvent('gds-blur', {
        bubbles: true,
        composed: true,
        relatedTarget: e.relatedTarget,
      })
    )
  }

  render() {
    const isMultiple = this.parentElement.multiple

    const checkbox = html`<span
      class="checkbox ${classMap({ checked: this.selected })}"
    ></span>`

    if (!isMultiple) {
      if (this.selected) this.setAttribute('highlighted', '')
      else this.removeAttribute('highlighted')
    }

    return html`${when(isMultiple, () => checkbox)}<slot></slot>`
  }

  #emitSelect() {
    this.dispatchEvent(
      new CustomEvent('select', {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    )
  }
}
