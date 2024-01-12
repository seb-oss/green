import { LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { watch } from '../../utils/decorators'
import { Focusable } from '../../mixins/focusable'

/**
 * @element gds-date-part-spinner
 * @internal
 *
 * A spinner for a date part. Only inteded to be used by the datepicker component.
 */
@gdsCustomElement('gds-date-part-spinner')
export class GdsDatePartSpinner extends LitElement {
  static formAssociated = true

  @property({ type: Number })
  value = 0

  @property({ type: Number })
  length = 2

  @property({ type: Number, attribute: 'aria-valuemin' })
  min = 0

  @property({ type: Number, attribute: 'aria-valuemax' })
  max = Number.MAX_SAFE_INTEGER

  @state()
  displayValue = this.#formatNumber(this.value, this.length)

  // No need for a shadow root here
  protected createRenderRoot() {
    return this
  }

  #inputBuffer = ''

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'spinbutton')
    this.setAttribute('tabindex', '0')

    this.addEventListener('wheel', this.#handleWheel)
    this.addEventListener('keydown', this.#handleKeyDown)
    this.addEventListener('blur', this.#handleBlur)
    this.addEventListener('focus', this.#handleFocus)
    this.addEventListener('click', this.#handleClick)
    this.addEventListener('mousedown', this.#handleClick)
  }

  focus(options?: FocusOptions | undefined): void {
    super.focus(options)
    this.#handleFocus()
  }

  render() {
    return html`${this.displayValue}`
  }

  @watch('value')
  private _refreshDisplayValue() {
    this.displayValue = this.#formatNumber(this.value, this.length)
    this.setAttribute('aria-valuetext', this.value.toString())
  }

  #increment = () => {
    let current = parseInt(this.value.toString())

    if (Number.isNaN(current))
      current = this.length === 2 ? this.min : new Date().getFullYear() - 1

    this.value = this.#clamp(current + 1)

    this.#dispatchChangeEvent()
  }

  #decrement = () => {
    let current = parseInt(this.value.toString())

    if (Number.isNaN(current))
      current = this.length === 2 ? this.max : new Date().getFullYear() + 1

    this.value = this.#clamp(current - 1)

    this.#dispatchChangeEvent()
  }

  #handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    this.focus()
  }

  #handleFocus = () => {
    this.#clearInputBuffer()
  }

  #handleBlur = () => {
    if (this.#inputBuffer === '') return

    this.#clearInputBuffer()
    this.value = this.#clamp(parseInt(this.value.toString()))

    this.#dispatchChangeEvent()

    document.getSelection()?.removeAllRanges()
  }

  #handleWheel = (e: WheelEvent) => {
    e.stopPropagation()
    e.preventDefault()

    if (e.deltaY > 0) {
      this.#decrement()
    } else {
      this.#increment()
    }
  }

  #handleKeyDown = (e: KeyboardEvent) => {
    let handled = false
    if (e.key === 'ArrowUp') {
      this.#increment()
      handled = true
    } else if (e.key === 'ArrowDown') {
      this.#decrement()
      handled = true
    } else {
      const key = parseInt(e.key)
      if (!isNaN(key)) {
        this.#inputBuffer += key.toString()
        this.value = parseInt(this.#inputBuffer)

        if (this.#inputBuffer.length == this.length) {
          this.#focusNextSpinner()
          this.#dispatchChangeEvent()
        }

        handled = true
      }
    }

    if (handled) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  #focusNextSpinner() {
    let nextSpinner = this.nextElementSibling
    while (nextSpinner) {
      if (nextSpinner instanceof GdsDatePartSpinner) {
        nextSpinner.focus()
        break
      }
      nextSpinner = nextSpinner.nextElementSibling
    }
  }

  #dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value.toString() },
      })
    )
  }

  #formatNumber(num: number | string, padZeros: number) {
    return String(num).padStart(padZeros, '0')
  }

  #clamp(value: number) {
    return Math.max(this.min, Math.min(this.max, value))
  }

  #clearInputBuffer() {
    this.#inputBuffer = ''
  }
}
