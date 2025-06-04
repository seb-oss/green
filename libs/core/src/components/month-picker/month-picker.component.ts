import { localized, msg } from '@lit/localize'
import { html } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import {
  addMonths,
  isSameMonth,
  lastDayOfMonth,
  setHours,
  subMonths,
} from 'date-fns'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch'
import { dateConverter } from '../../utils/helpers/attribute-converters'
import style from './month-picker.styles'

/**
 * Used to customize the appearance of a date in the month picker.
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
 * @status stable
 *
 * A month-picker is a widget that allows the user to select a month.
 *
 * @event change - Fired when a date is selected.
 * @event gds-date-focused - Fired when focus is changed. Can be cancelled using `event.preventDefault()`.
 */
@gdsCustomElement('gds-month-picker')
@localized()
export class GdsMonthPicker extends GdsElement {
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
  //The currently selected month.
  //@property({ type: Number })
  //value = -1

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

  // /**
  //  * The minimum month of current year that can be selected.
  //  */
  //@property({ type: Number })
  //minMonth = 0

  // /**
  //  * The maximum month of current year that can be selected.
  //  */
  //@property({ type: Number })
  //maxMonth = 11

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
    newFocusedDate.setHours(12, 0, 0, 0)

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
   * Sets the size of the button. Defaults to "medium".
   */
  @property({ reflect: true })
  size: 'small' | 'large' = 'large'

  /**
   * If the month number should be displayed after the month name
   */
  @property({ type: Boolean, attribute: 'month-number' })
  monthNumber = false

  /**
   * The accessible label for the month-picker.
   */
  @property()
  label?: string

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
    //Test data
    //console.log('Min: ' + this.min)
    //console.log('Max: ' + this.max)
    //this.focusedYear = 2024

    return html` <table role="grid" aria-label="${ifDefined(this.label)}">
      <tbody role="rowgroup">
        ${months.map((month, index) => {
          const cmonth = new Date(this.focusedYear, index, 1)
          const isOutsideMinMax =
            (cmonth < this.min || cmonth > this.max) &&
            !isSameMonth(cmonth, this.min) &&
            !isSameMonth(cmonth, this.max)

          return html`
            ${when(index % 3 == 0, () => html`<tr role="row"></tr>`)}
            ${when(
              !this.hideExtraneousMonths || !isOutsideMinMax,
              () =>
                html` <td
                  class="${this.size == 'small' ? 'small' : ''}
                  ${!this.noCurrentMonth &&
                  currentYear == this.focusedYear &&
                  currentMonth == index
                    ? 'today'
                    : ''} ${isOutsideMinMax ? 'disabled' : ''}"
                  tabindex="${this.focusedMonth == index ? 0 : -1}"
                  aria-selected="${this.#getSelectedMonth() == index
                    ? 'true'
                    : 'false'}"
                  @click=${() =>
                    isOutsideMinMax ? null : this.#setSelectedMonth(index)}
                >
                  ${this.shortMonthText ? month.substring(0, 3) : month}
                  ${this.monthNumber ? ' (' + (index + 1) + ')' : ''}
                </td>`,
              () => html`<td inert></td>`,
            )}
            ${when(index % 3 == 2, () => html`</tr>`)}
          `
        })}
      </tbody>
    </table>`
  }

  #getSelectedMonth(): number {
    if (!this.value) return -1

    // Get the month from the value
    const month = this.value.getMonth()

    // Check if the month is within the min and max range
    //if (month < this.min || month > this.max) return -1

    return month
  }

  #setSelectedMonth(month: number) {
    //this.value = month
    //console.log('Selected year: ' + this.focusedYear)
    //console.log('Selected month: ' + month)
    //this.value = new Date(new Date().getFullYear(), month, 1, 12)
    this.value = new Date(this.focusedYear, month, 1, 12)

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: month,
        bubbles: false,
        composed: false,
      }),
    )
  }

  #setSelectedDate(date: Date) {
    // Set the time to midday to avoid timezone issues
    const dateOnMidDay = setHours(date, 12)

    this.value = dateOnMidDay

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: dateOnMidDay,
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
    } else if (e.key === 'PageUp') {
      if (
        this.focusedMonth == 3 ||
        this.focusedMonth == 6 ||
        this.focusedMonth == 9
      ) {
        if (new Date(this.focusedYear, 0, 1) > this.min) this.focusedMonth = 0
        else if (new Date(this.focusedYear, 3, 1) > this.min)
          this.focusedMonth = 3
        else if (new Date(this.focusedYear, 6, 1) > this.min)
          this.focusedMonth = 6
      } else if (
        this.focusedMonth == 4 ||
        this.focusedMonth == 7 ||
        this.focusedMonth == 10
      ) {
        if (new Date(this.focusedYear, 1, 1) > this.min) this.focusedMonth = 1
        else if (new Date(this.focusedYear, 4, 1) > this.min)
          this.focusedMonth = 4
        else if (new Date(this.focusedYear, 7, 1) > this.min)
          this.focusedMonth = 7
      } else if (
        this.focusedMonth == 5 ||
        this.focusedMonth == 8 ||
        this.focusedMonth == 11
      ) {
        if (new Date(this.focusedYear, 2, 1) > this.min) this.focusedMonth = 2
        else if (new Date(this.focusedYear, 5, 1) > this.min)
          this.focusedMonth = 5
        else if (new Date(this.focusedYear, 8, 1) > this.min)
          this.focusedMonth = 8
      }
      handled = true
    } else if (e.key === 'PageDown') {
      if (
        this.focusedMonth == 0 ||
        this.focusedMonth == 3 ||
        this.focusedMonth == 6
      ) {
        if (new Date(this.focusedYear, 9, 1) < this.max) this.focusedMonth = 9
        else if (new Date(this.focusedYear, 6, 1) < this.max)
          this.focusedMonth = 6
        else if (new Date(this.focusedYear, 3, 1) < this.max)
          this.focusedMonth = 3
      } else if (
        this.focusedMonth == 1 ||
        this.focusedMonth == 4 ||
        this.focusedMonth == 7
      ) {
        if (new Date(this.focusedYear, 10, 1) < this.max) this.focusedMonth = 10
        else if (new Date(this.focusedYear, 7, 1) < this.max)
          this.focusedMonth = 7
        else if (new Date(this.focusedYear, 4, 1) < this.max)
          this.focusedMonth = 4
      } else if (
        this.focusedMonth == 2 ||
        this.focusedMonth == 5 ||
        this.focusedMonth == 8
      ) {
        if (new Date(this.focusedYear, 11, 1) < this.max) this.focusedMonth = 11
        else if (new Date(this.focusedYear, 8, 1) < this.max)
          this.focusedMonth = 8
        else if (new Date(this.focusedYear, 2, 1) < this.max)
          this.focusedMonth = 2
      }
      handled = true
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (!this._elFocusedCell?.hasAttribute('disabled')) {
        console.log('Selected year: ' + this.focusedYear)
        console.log('Selected month: ' + this.focusedMonth)
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
