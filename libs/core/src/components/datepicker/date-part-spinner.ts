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

  render() {
    return html`${this.displayValue}`
  }

  @watch('value')
  private _refreshDisplayValue() {
    this.displayValue = this.#formatNumber(this.value, this.length)
  }

  #increment = () => {
    this.value = this.#clamp(parseInt(this.value.toString()) + 1)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
      })
    )
  }

  #decrement = () => {
    this.value = this.#clamp(this.value - 1)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
      })
    )
  }

  #handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    this.focus()
  }

  #handleFocus = () => {
    this.#clearInputBuffer()

    const range = new Range()
    range.setStart(this, 0)
    range.setEnd(this, 4)
    document.getSelection()?.removeAllRanges()
    document.getSelection()?.addRange(range)
  }

  #handleBlur = () => {
    this.#clearInputBuffer()
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
        this.#inputBuffer += key
        this.value = this.#clamp(parseInt(this.#inputBuffer))
        this.dispatchEvent(
          new CustomEvent('change', {
            detail: { value: this.value },
          })
        )
        handled = true
      }
    }

    if (handled) {
      e.preventDefault()
      e.stopPropagation()
    }
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
