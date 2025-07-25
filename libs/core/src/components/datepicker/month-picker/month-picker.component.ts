import { localized, msg } from '@lit/localize'
import { html } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import { addMonths, isSameMonth, lastDayOfMonth, subMonths } from 'date-fns'

import { GdsElement } from '../../../gds-element'
import { gdsCustomElement } from '../../../scoping'
import { tokens } from '../../../tokens.style'
import { TransitionalStyles } from '../../../transitional-styles'
import { watch } from '../../../utils/decorators/watch'
import { dateConverter } from '../../../utils/helpers/attribute-converters'
import MonthPickerStyles from '../common/datepicker.styles'

const months = [
  msg('January'),
  msg('February'),
  msg('March'),
  msg('April'),
  msg('May'),
  msg('June'),
  msg('July'),
  msg('August'),
  msg('September'),
  msg('October'),
  msg('November'),
  msg('December'),
]

/**
 * @element gds-month-picker
 * @status beta
 *
 * A month-picker is a widget that allows the user to select a month.
 *
 * @event change - Fired when a date is selected.
 * @event gds-date-focused - Fired when focus is changed. Can be cancelled using `event.preventDefault()`.
 */
@gdsCustomElement('gds-month-picker')
@localized()
export class GdsMonthPicker extends GdsElement {
  static styles = [tokens, MonthPickerStyles]
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
   * Whether to override the default hour set of mid day (12:00) in utc. Eg. -2 sets time to utc 10:00.
   */
  @property({ type: Number, attribute: 'utc-offset' })
  utcOffset = 0

  /**
   * Whether to hide extraneous months (that fall ouside of min and max month)
   */
  @property({ type: Boolean, attribute: 'hide-extraneous-months' })
  hideExtraneousMonths = false

  /**
   * Whether to hide current month visuals. If true the month right now will not have the outlined ring around it.
   */
  @property({ type: Boolean, attribute: 'no-current-month' })
  noCurrentMonth = false

  /**
   * The date that is currently focused.
   */
  @property({ converter: dateConverter })
  focusedDate = new Date()

  /**
   * The month that is currently focused.
   */
  @property({ type: Number })
  get focusedMonth() {
    return this.focusedDate.getMonth()
  }
  set focusedMonth(month: number) {
    const lastOfSelectedMonth = lastDayOfMonth(
      new Date(this.focusedYear, month, 1),
    )
    const newFocusedDate = new Date(this.focusedDate)

    newFocusedDate.setDate(
      Math.min(this.focusedDate.getDate(), lastOfSelectedMonth.getDate()),
    )
    newFocusedDate.setMonth(month)
    newFocusedDate.setHours(12 + this.utcOffset, 0, 0, 0)

    this.focusedDate = newFocusedDate
  }

  /**
   * The year that is currently focused.
   */
  @property({ type: Number })
  get focusedYear() {
    return this.focusedDate.getFullYear()
  }
  set focusedYear(year: number) {
    this.focusedDate = new Date(this.focusedDate.setFullYear(year))
  }

  /**
   * If displaying just first 3 characters of the month
   */
  @property({ type: Boolean, attribute: 'short-month-text' })
  shortMonthText = false

  /**
   * Sets the size of the buttons. Defaults to "large".
   */
  @property({ reflect: true })
  size: 'small' | 'large' = 'large'

  /**
   * If the month number should be displayed instead of month name
   */
  @property({ type: Boolean, attribute: 'month-number' })
  monthNumber = false

  /**
   * The accessible label for the month-picker.
   */
  @property()
  label?: string

  /**
   * Returns the date cell element for the given month number.
   */
  getMonthCell(monthNumber: number) {
    return this.shadowRoot?.querySelector(`#monthCell-${monthNumber}`)
  }

  @state()
  private _currentLocale = navigator.language

  @query('td[tabindex="0"]')
  private _elFocusedCell?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-month-picker')

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
    const currentMonth = new Date().getMonth()

    return html` <table role="grid" aria-label="${ifDefined(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({ length: 4 }).map(
          (_, rowIdx) => html`
            <tr role="row">
              ${months
                .slice(rowIdx * 3, rowIdx * 3 + 3)
                .map((month, colIdx) => {
                  const index = rowIdx * 3 + colIdx
                  if (index >= months.length) return html`<td inert></td>`
                  const cmonth = new Date(this.focusedYear, index, 1)
                  const isOutsideMinMax =
                    (cmonth < this.min || cmonth > this.max) &&
                    !isSameMonth(cmonth, this.min) &&
                    !isSameMonth(cmonth, this.max)

                  return when(
                    !this.hideExtraneousMonths || !isOutsideMinMax,
                    () =>
                      html`<td
                        class="${classMap({
                          small: this.size == 'small',
                          today:
                            !this.noCurrentMonth &&
                            currentYear == this.focusedYear &&
                            currentMonth == index,
                          disabled: Boolean(isOutsideMinMax),
                        })}"
                        ?disabled=${isOutsideMinMax}
                        tabindex="${this.focusedMonth == index ? 0 : -1}"
                        aria-selected="${this.#getSelectedMonth() == index
                          ? 'true'
                          : 'false'}"
                        @click=${() =>
                          isOutsideMinMax
                            ? null
                            : this.#setSelectedMonth(index)}
                        id="monthCell-${index}"
                      >
                        ${this.#getMonthText(index)}
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

  #getMonthText(index: number) {
    if (this.monthNumber) return index + 1
    const month = months[index]
    if (this.shortMonthText) return month.substring(0, 3)
    return month
  }

  #getSelectedMonth(): number {
    if (!this.value) return -1

    const month = this.value.getMonth()

    return month
  }

  #setSelectedMonth(month: number) {
    this.value = new Date(this.focusedYear, month, 1, 12 + this.utcOffset)

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
      if (this.focusedMonth > 0 && this.focusedDate > addMonths(this.min, 1))
        this.focusedMonth -= 1
      handled = true
    } else if (e.key === 'ArrowRight') {
      if (this.focusedMonth < 11 && this.focusedDate < subMonths(this.max, 1))
        this.focusedMonth += 1
      handled = true
    } else if (e.key === 'ArrowUp') {
      if (this.focusedMonth > 2 && this.focusedDate > addMonths(this.min, 3))
        this.focusedMonth -= 3
      handled = true
    } else if (e.key === 'ArrowDown') {
      if (this.focusedMonth < 9 && this.focusedDate < subMonths(this.max, 3))
        this.focusedMonth += 3
      handled = true
    } else if (e.key === 'Home') {
      if (new Date(this.focusedYear, 0, 1) > this.min) this.focusedMonth = 0
      else this.focusedMonth = this.min.getMonth()
      handled = true
    } else if (e.key === 'End') {
      if (new Date(this.focusedYear, 11, 1) < this.max) this.focusedMonth = 11
      else this.focusedMonth = this.max.getMonth()
      handled = true
    } else if (e.key === 'PageUp' || e.key === 'PageDown') {
      const isUp = e.key === 'PageUp'
      let newMonth = this.focusedMonth

      // Try moving up to 3 steps up or down in the same column
      for (let i = 0; i < 3; i++) {
        const next = newMonth + (isUp ? -3 : 3)
        if (next < 0 || next > 11) break
        const candidate = new Date(this.focusedYear, next, 1)
        if (isUp && candidate < this.min && !isSameMonth(candidate, this.min))
          break
        if (!isUp && candidate > this.max && !isSameMonth(candidate, this.max))
          break
        newMonth = next
      }

      if (newMonth !== this.focusedMonth) {
        this.focusedMonth = newMonth
      }
      handled = true
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (!this._elFocusedCell?.hasAttribute('disabled')) {
        this.#setSelectedMonth(this.focusedMonth)
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
