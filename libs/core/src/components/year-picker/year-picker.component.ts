import { localized } from '@lit/localize'
import { html } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch'
import { dateConverter } from '../../utils/helpers/attribute-converters'
import YearPickerStyles from './year-picker.styles'

/**
 * @element gds-year-picker
 * @status beta
 *
 * A year-picker is a widget that allows the user to select a year.
 *
 * @event change - Fired when a date is selected.
 * @event gds-date-focused - Fired when focus is changed. Can be cancelled using `event.preventDefault()`.
 */
@gdsCustomElement('gds-year-picker')
@localized()
export class GdsYearPicker extends GdsElement {
  static styles = [tokens, YearPickerStyles]
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * The currently selected date.
   */
  @property()
  value?: Date

  /**
   * The minimum date that can be selected. Eg. min="2025-03-01"
   */
  @property({ converter: dateConverter })
  min = new Date(new Date().getFullYear() - 10, 0, 1)
  //@ property({ type: Date })

  /**
   * The maximum date that can be selected. Eg. max="2025-09-30"
   */
  @property({ converter: dateConverter })
  max = new Date(new Date().getFullYear() + 10, 0, 1)
  //@ property({ type: Date })

  /**
   * Whether to hide extraneous years (that fall ouside of min and max)
   */
  @property({ type: Boolean, attribute: 'hide-extraneous-years' })
  hideExtraneousYears = false

  /**
   * How many columns that will be displayed (default 5)
   */
  @property({ type: Number })
  columns = 5

  /**
   * How many rows that will be displayed at max (default 5)
   */
  @property({ type: Number })
  rows = 5

  /**
   * Whether to hide current year visuals. If true the year right now will not have the outlined ring around it.
   */
  @property({ type: Boolean, attribute: 'no-current-year' })
  noCurrentYear = false

  /**
   * Whether to show controls to change visible years (normaly you see 5*5=25 years at the same time).
   */
  @property({ reflect: true })
  controls: 'none' | 'always' | 'ifneeded' = 'ifneeded'

  /**
   * The date that is currently focused.
   */
  @property({ converter: dateConverter, attribute: 'focused-date' })
  focusedDate = new Date()

  /**
   * The year that is currently focused.
   */
  @property({ type: Number, attribute: 'focused-year' })
  get focusedYear() {
    return this.focusedDate.getFullYear()
  }
  set focusedYear(year: number) {
    this.focusedDate = new Date(year, 0, 1, 12)
  }

  /**
   * Sets the size of the buttons. Defaults to "large".
   */
  @property({ reflect: true })
  size: 'small' | 'large' = 'large'

  /**
   * The accessible label for the year-picker.
   */
  @property()
  label?: string

  /**
   * Returns the date cell element for the given year number.
   */
  getYearCell(yearNumber: number) {
    return this.shadowRoot?.querySelector(`#yearCell-${yearNumber}`)
  }

  /**
   * Returns the year of the first cell.
   */
  getStartYear() {
    const totalCells = this.columns * this.rows
    const totalYears = this.max.getFullYear() - this.min.getFullYear() + 1
    //Center the years in the grid if there are fewer years than cells
    let startYear =
      this.min.getFullYear() - Math.floor((totalCells - totalYears) / 2)
    if (this.focusedYear < startYear)
      do {
        startYear -= totalCells
      } while (this.focusedYear < startYear)
    else if (this.focusedYear > startYear + totalCells - 1)
      do {
        startYear += totalCells
      } while (this.focusedYear > startYear + totalCells - 1)

    return startYear
  }

  /**
   * Returns a year iterator between the min and max dates for use in the year dropdown.
   */
  get #years() {
    const minYear = this.min.getFullYear()
    const maxYear = this.max.getFullYear()
    const isOutsideRange = this.#isValueOutsideRange
    const valueYear = this.value?.getFullYear()
    return {
      *[Symbol.iterator]() {
        if (isOutsideRange) yield valueYear
        for (let i = minYear; i <= maxYear; i++) yield i
      },
    }
  }

  get #isValueOutsideRange() {
    if (!this.value) return false
    return (
      this.value.getFullYear() < this.min.getFullYear() ||
      this.value.getFullYear() > this.max.getFullYear()
    )
  }

  @state()
  private _currentLocale = navigator.language

  @query('td[tabindex="0"]')
  private _elFocusedCell?: HTMLElement

  private _elFocusedButton?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-year-picker')

    this.addEventListener('keydown', this.#handleKeyDown)
    window.addEventListener('lit-localize-status', (e: CustomEvent) => {
      if (e.detail.status === 'ready')
        this._currentLocale = e.detail.readyLocale
    })
  }

  // focus() {
  //   console.log('Super Focused')
  //   super.focus()
  //   this._elFocusedCell?.focus()
  // }

  render() {
    const currentYear = new Date().getFullYear()
    const startYear = this.getStartYear()

    return html` <gds-div overflow="auto">
      ${this.#useControls()
        ? html`<gds-flex
            justify-content="space-around"
            align-items="center"
            class="controls"
          >
            <gds-button
              id="prev"
              rank="tertiary"
              label="Previous years"
              @click=${this.#setPreviousYearsClick}
              @focusin=${this.#handleButtonFocus}
              @focusout=${this.#handleButtonFocus}
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <span id="range">${this.#getRange()}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${this.#setNextYearsClick}
              @focusin=${this.#handleButtonFocus}
              @focusout=${this.#handleButtonFocus}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`
        : null}
      <table role="grid" aria-label="${ifDefined(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({ length: this.rows }).map(
            (_, rowIdx) => html`
              <tr role="row">
                ${Array.from({ length: this.columns }).map((_, colIdx) => {
                  const year = startYear + rowIdx * this.columns + colIdx
                  const isDisabled =
                    year < this.min.getFullYear() ||
                    year > this.max.getFullYear()
                  if (this.hideExtraneousYears && isDisabled)
                    return html`<td inert></td>`
                  return html`
                    <td
                      class="${classMap({
                        small: this.size == 'small',
                        today: !this.noCurrentYear && currentYear == year,
                        disabled: isDisabled,
                      })}"
                      ?disabled=${isDisabled}
                      tabindex="${this.focusedYear == year && !isDisabled
                        ? 0
                        : -1}"
                      aria-selected="${this.#getSelectedYear() == year &&
                      !isDisabled
                        ? 'true'
                        : 'false'}"
                      @click=${() =>
                        isDisabled ? null : this.#setSelectedYear(year)}
                      id="yearCell-${rowIdx * this.columns + colIdx}"
                    >
                      ${year}
                    </td>
                  `
                })}
              </tr>
            `,
          )}
        </tbody>
      </table></gds-div
    >`
  }

  #useControls() {
    if (this.controls === 'none') return false
    if (
      this.controls === 'always' ||
      this.min.getFullYear() < this.getStartYear() ||
      this.max.getFullYear() > this.getStartYear() + this.rows * this.columns
    ) {
      return true
    }
    return false
  }

  #getSelectedYear(): number {
    if (!this.value) return -1
    const year = this.value.getFullYear()
    return year
  }

  #setSelectedYear(year: number) {
    if (year < this.min.getFullYear() || year > this.max.getFullYear()) {
      return
    }
    this.value = new Date(year, 1, 1, 12)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: false,
        composed: false,
      }),
    )
  }

  #setPreviousYearsClick = (_e: MouseEvent) => {
    this.#setPreviousYears()
    _e.preventDefault()
  }

  #setNextYearsClick = (_e: MouseEvent) => {
    this.#setNextYears()
    _e.preventDefault()
  }

  #setPreviousYears() {
    const totalCells = this.columns * this.rows
    const minYear = this.min.getFullYear()
    let newYear = this.focusedYear - totalCells
    if (newYear < minYear) newYear = minYear
    this.focusedYear = newYear
  }

  #setNextYears() {
    const totalCells = this.columns * this.rows
    const maxYear = this.max.getFullYear()
    let newYear = this.focusedYear + totalCells
    if (newYear > maxYear) newYear = maxYear
    this.focusedYear = newYear
  }

  #getRange() {
    const totalCells = this.columns * this.rows
    const startYear = this.getStartYear()
    const endYear = startYear + totalCells - 1
    return startYear + ' - ' + endYear
  }

  #handleButtonFocus = (e: FocusEvent) => {
    this._elFocusedButton = e.target as HTMLElement
  }

  #handleButtonBlur = () => {
    delete this._elFocusedButton
  }

  @watch('value')
  private _valueChanged() {
    if (!this.value) return
    this.focusedDate = this.value
  }

  #handleKeyDown(e: KeyboardEvent) {
    let handled = false
    if (this._elFocusedButton) return
    if (e.key === 'ArrowLeft') {
      if (this.focusedYear > this.min.getFullYear()) this.focusedYear -= 1
      handled = true
    } else if (e.key === 'ArrowRight') {
      if (this.focusedYear < this.max.getFullYear()) this.focusedYear += 1
      handled = true
    } else if (e.key === 'ArrowUp') {
      if (this.focusedYear > this.min.getFullYear())
        this.focusedYear -= this.columns
      if (this.focusedYear < this.min.getFullYear())
        this.focusedYear = this.min.getFullYear()
      handled = true
    } else if (e.key === 'ArrowDown') {
      if (this.focusedYear < this.max.getFullYear())
        this.focusedYear += this.columns
      if (this.focusedYear > this.max.getFullYear())
        this.focusedYear = this.max.getFullYear()
      handled = true
    } else if (e.key === 'Home') {
      this.focusedYear = this.min.getFullYear()
      handled = true
    } else if (e.key === 'End') {
      this.focusedYear = this.max.getFullYear()
      handled = true
    } else if (e.key === 'PageUp') {
      this.#setPreviousYears()
      handled = true
    } else if (e.key === 'PageDown') {
      this.#setNextYears()
      handled = true
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (!this._elFocusedCell?.hasAttribute('disabled')) {
        this.#setSelectedYear(this.focusedYear)
      }
      handled = true
    }

    /*const proceed = this.dispatchCustomEvent('gds-date-focused', {
        detail: newFocusedDate,
        bubbles: false,
        composed: false,
    })*/

    if (handled) {
      e.preventDefault()
      e.stopPropagation()

      this.updateComplete.then(() => {
        this._elFocusedCell?.focus()
      })
    }
  }
}
