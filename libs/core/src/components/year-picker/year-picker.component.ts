import { localized, msg } from '@lit/localize'
import { html } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import {
  addMonths,
  addYears,
  isSameYear,
  lastDayOfMonth,
  setHours,
  subMonths,
  subYears,
} from 'date-fns'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch'
import { dateConverter } from '../../utils/helpers/attribute-converters'
import style from './year-picker.styles'

/**
 * Used to customize the appearance of a date in the year picker.
 */
export type CustomizedDate = {
  /**
   * The date to customize.
   */
  date: Date

  /**
   * The color of the indicator.
   */
  color?: string

  /**
   * The type of indicator.
   */
  indicator?: 'dot'

  /**
   * Whether the date is disabled or not.
   */
  disabled: boolean
}

const years = [
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
  2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
]

/**
 * @element gds-year-picker
 * @status stable
 *
 * A year-picker is a widget that allows the user to select a year.
 *
 * @event change - Fired when a date is selected.
 * @event gds-date-focused - Fired when focus is changed. Can be cancelled using `event.preventDefault()`.
 */
@gdsCustomElement('gds-year-picker')
@localized()
export class GdsYearPicker extends GdsElement {
  static styles = [tokens, style]
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
   * Whether to hide extraneous years (that fall ouside of min and max years)
   */
  @property({ type: Boolean, attribute: 'hide-extraneous-years' })
  hideExtraneousYears = false

  /**
   * Whether to hide current year visuals. If true the year right now will not have the outlined ring around it.
   */
  @property({ type: Boolean, attribute: 'no-current-year' })
  noCurrentYear = false

  /**
   * The date that is currently focused.
   */
  @property({ converter: dateConverter })
  focusedDate = new Date()

  /**
   * The year that is currently focused.
   */
  @property({ type: Number })
  get focusedYear() {
    return this.focusedDate.getFullYear()
  }
  set focusedYear(year: number) {
    this.focusedDate = new Date(year, 1, 1, 12)
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

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-year-picker')

    this.addEventListener('keydown', this.#handleKeyDown)
    window.addEventListener('lit-localize-status', (e: CustomEvent) => {
      if (e.detail.status === 'ready')
        this._currentLocale = e.detail.readyLocale
    })
  }

  focus() {
    super.focus()
    this._elFocusedCell?.focus()
  }

  render() {
    const currentYear = new Date().getFullYear()
    const columns = 5

    return html` <table role="grid" aria-label="${ifDefined(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({ length: columns }).map(
          (_, rowIdx) => html`
            <tr role="row">
              ${years
                .slice(rowIdx * columns, rowIdx * columns + columns)
                .map((year, colIdx) => {
                  //const index = rowIdx * columns + colIdx
                  //if (index >= years.length) return html`<td inert></td>`
                  const cyear = new Date(this.focusedYear, 1, 1)
                  const isOutsideMinMax =
                    (cyear < this.min || cyear > this.max) &&
                    !isSameYear(cyear, this.min) &&
                    !isSameYear(cyear, this.max)

                  return when(
                    !this.hideExtraneousYears || !isOutsideMinMax,
                    () =>
                      html`<td
                        class="${classMap({
                          small: this.size == 'small',
                          today: !this.noCurrentYear && currentYear == year,
                          disabled: Boolean(isOutsideMinMax),
                        })}"
                        ?disabled=${isOutsideMinMax}
                        tabindex="${this.focusedYear == year ? 0 : -1}"
                        aria-selected="${this.#getSelectedYear() == year
                          ? 'true'
                          : 'false'}"
                        @click=${() =>
                          isOutsideMinMax ? null : this.#setSelectedYear(year)}
                        id="yearCell-${year}"
                      >
                        ${year}
                      </td>`,
                    () => html`<td inert></td>`,
                  )
                })}
            </tr>
          `,
        )}
      </tbody>
    </table>`
  }

  #getSelectedYear(): number {
    if (!this.value) return -1
    const year = this.value.getFullYear()
    return year
  }

  #setSelectedYear(year: number) {
    this.value = new Date(year, 1, 1, 12)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: false,
        composed: false,
      }),
    )
  }

  @watch('value')
  private _valueChanged() {
    if (!this.value) return
    this.focusedDate = this.value
  }

  #handleKeyDown(e: KeyboardEvent) {
    let handled = false
    if (e.key === 'ArrowLeft') {
      if (this.focusedYear > this.min.getFullYear()) this.focusedYear -= 1
      handled = true
    } else if (e.key === 'ArrowRight') {
      if (this.focusedYear < this.max.getFullYear()) this.focusedYear += 1
      handled = true
    } else if (e.key === 'ArrowUp') {
      if (this.focusedYear > this.min.getFullYear() + 4) this.focusedYear -= 5
      handled = true
    } else if (e.key === 'ArrowDown') {
      if (this.focusedYear < this.max.getFullYear() - 4) this.focusedYear += 5
      handled = true
    } else if (e.key === 'Home') {
      this.focusedYear = this.min.getFullYear()
      handled = true
    } else if (e.key === 'End') {
      this.focusedYear = this.max.getFullYear()
      handled = true
    } else if (e.key === 'PageUp' || e.key === 'PageDown') {
      handled = true
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (!this._elFocusedCell?.hasAttribute('disabled')) {
        this.#setSelectedYear(this.focusedYear)
      }
      handled = true
    }
    if (handled) {
      e.preventDefault()
      e.stopPropagation()

      this.updateComplete.then(() => {
        this._elFocusedCell?.focus()
      })
    }
  }
}
