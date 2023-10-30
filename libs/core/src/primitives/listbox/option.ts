import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { classMap } from 'lit/directives/class-map.js'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'

import style from './option.styles'

import 'reflect-metadata'
import { watch } from '../../utils/decorators'
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
 *
 * @event gds-select - Fired when the option is selected.
 * @event gds-blur - Fired when the option loses focus.
 * @event gds-focus - Fired when the option gains focus.
 */
@gdsCustomElement('gds-option')
export class GdsOption extends LitElement {
  static styles = style

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
  get hidden(): boolean {
    return this.#hidden
  }
  set hidden(value: string | boolean) {
    if (this.isPlaceholder) return

    this.#hidden = value === 'true' || value === true
    this.setAttribute('aria-hidden', value.toString())
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
      this.#emitSelect()
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'option')

    if (this.isPlaceholder) {
      this.#hidden = true
      this.setAttribute('aria-hidden', 'true')
    }

    this.updateComplete.then(() =>
      TransitionalStyles.instance.apply(this, 'gds-option')
    )
  }

  get parentElement() {
    return super.parentElement as OptionsContainer
  }

  @watch('isplaceholder')
  handlePlaceholderStatusChange() {
    if (this.isPlaceholder) {
      this.#hidden = true
      this.setAttribute('aria-hidden', 'true')
    } else {
      this.#hidden = false
      this.setAttribute('aria-hidden', 'false')
    }
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

  onfocus = (e: FocusEvent) => {
    this.dispatchEvent(
      new FocusEvent('gds-focus', {
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
      new CustomEvent('gds-select', {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    )
  }
}
