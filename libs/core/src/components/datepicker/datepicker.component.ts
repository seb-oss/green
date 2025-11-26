import { localized, msg } from '@lit/localize'
import { nothing } from 'lit'
import { property, query, queryAll, queryAsync, state } from 'lit/decorators.js'
import { join } from 'lit/directives/join.js'
import { map } from 'lit/directives/map.js'
import { repeat } from 'lit/directives/repeat.js'
import { until } from 'lit/directives/until.js'
import { when } from 'lit/directives/when.js'
import { isSameDay } from 'date-fns'

import { GdsButton } from '../../components/button/button.component'
import { GdsDropdown } from '../../components/dropdown/dropdown.component'
import { GdsFlex } from '../../components/flex/flex.component'
import { gdsCustomElement, html } from '../../scoping'
import formControlHostStyle from '../../shared-styles/form-control-host.style'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators'
import {
  dateArrayConverter,
  dateConverter,
} from '../../utils/helpers/attribute-converters'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsCalendar } from '../calendar/calendar.component'
import { GdsFormControlElement } from '../form/form-control'
import { IconCalendar } from '../icon/icons/calendar.component'
import { IconCalenderAdd } from '../icon/icons/calender-add.component'
import { IconChevronLeft } from '../icon/icons/chevron-left.component'
import { IconChevronRight } from '../icon/icons/chevron-right.component'
import { GdsPopover } from '../popover/popover.component'
import { GdsDatePartSpinner } from './date-part-spinner'
import DatepickerStyles from './datepicker.styles'

type DatePart = 'year' | 'month' | 'day'

type DateFormatLayout = {
  delimiter: string
  layout: { token: 'y' | 'm' | 'd'; name: DatePart }[]
}

@localized()
class Datepicker extends GdsFormControlElement<Date> {
  static styles = [tokens, formControlHostStyle, DatepickerStyles]

  get type() {
    return 'gds-datepicker'
  }

  /**
   * The Date value of the datepicker. This can be set to undefined to clear the datepicker.
   * This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.
   */
  @property({ converter: dateConverter })
  get value(): Date | undefined {
    return super.value
  }
  set value(value: Date | undefined) {
    super.value = value
  }

  /**
   * The minimum date that can be selected.
   */
  @property({ converter: dateConverter })
  min = new Date(new Date().getFullYear() - 10, 0, 1)

  /**
   * The maximum date that can be selected.
   */
  @property({ converter: dateConverter })
  max = new Date(new Date().getFullYear() + 10, 0, 1)

  /**
   * Controls whether the datepicker popover is open.
   */
  @property({ type: Boolean })
  open = false

  /**
   * The supporting text displayed between the label and the field itself
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Whether to use the small variant of the datepicker field.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  /**
   * Hides the header and the footer, while still keeping the accessible label
   *
   * Always set the `label` attribute, and if you need to hide it, add this attribute and keep `label` set.
   */
  @property({ type: Boolean })
  plain = false

  /**
   * Whether to show a column of week numbers in the calendar.
   */
  @property({ type: Boolean, attribute: 'show-week-numbers' })
  showWeekNumbers = false

  /**
   * Whether to hide the label above the input field.
   */
  @property({ type: Boolean, attribute: 'hide-label' })
  hideLabel = false

  /**
   * Whether the Clear button is shown under the calendar.
   */
  @property({ type: Boolean, attribute: 'clearable' })
  clearable = false

  /**
   * Whether to hide the Today button under the calendar.
   */
  @property({ type: Boolean, attribute: 'hide-today-button' })
  hideTodayButton = false

  /**
   * Controls the time component of dates selected in the calendar popover or spinbuttons in the field.
   *
   * The time will be set in UTC.
   */
  @property({ type: Number, attribute: 'utc-hours' })
  get utcHours() {
    return this.#utcHours
  }
  set utcHours(value) {
    this.#utcHours = value
    this._internalValue?.setUTCHours(value, 0, 0, 0)
  }
  #utcHours = 12

  /**
   * The date format to use. Accepts a string with the characters `y`, `m` and `d` in any order, separated by a delimiter.
   * For example, `y-m-d` or `d/m/y`. All three characters must be present.
   *
   * This will determine the structure of the input field.
   *
   * Defaults to `y-m-d`.
   */
  @property()
  get dateformat() {
    return this._dateFormatLayout.layout
      .map((f) => f.token)
      .join(this._dateFormatLayout.delimiter)
  }
  set dateformat(dateformat: string) {
    this._dateFormatLayout = this.#parseDateFormat(dateformat)
  }

  /**
   * Whether to disable weekends in the calendar.
   */
  @property({ type: Boolean, attribute: 'disabled-weekends' })
  disabledWeekends = false

  /**
   * An array of dates that should be disabled in the calendar.
   */
  @property({ converter: dateArrayConverter, attribute: 'disabled-dates' })
  disabledDates?: Date[]

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  /**
   * Get the currently focused date in the calendar popover. If no date is focused, or the calendar popover
   * is closed, the value will be undefined.
   */
  async getFocusedDate(): Promise<Date | undefined> {
    if (this.open) return this._elCalendar.then((el) => el.focusedDate)
    else return undefined
  }

  /**
   * Get a string representation of the currently displayed value in the input field. The formatting will match the dateformat attribute.
   */
  get displayValue() {
    return this._elField.innerText.replace(/\s+/g, '')
  }

  /**
   * A reference to the calendar button element inside the shadow root.
   * Inteded for use in integration tests.
   */
  @queryAsync('#calendar-button')
  test_calendarButton!: Promise<HTMLButtonElement>

  /**
   * A reference to the clear button element inside the shadow root.
   * Inteded for use in integration tests.
   */
  @query('#clear-button')
  test_clearButton!: HTMLButtonElement

  /**
   * A reference to the today button element inside the shadow root.
   * Inteded for use in integration tests.
   */
  @query('#today-button')
  test_todayButton!: HTMLButtonElement

  /**
   * A reference to a date cell element (<td>) inside the shadow root of the calendar primitive.
   * Intended for use in integration tests.
   */
  async test_getDateCell(dayNumber: number) {
    return this._elCalendar.then((el) => el.getDateCell(dayNumber))
  }

  @state()
  private _focusedMonth = new Date().getMonth()

  @state()
  private _focusedYear = new Date().getFullYear()

  @state()
  private _dateFormatLayout = this.#parseDateFormat('y-m-d')

  @queryAsync('#calendar')
  private _elCalendar!: Promise<GdsCalendar>

  @queryAsync('#calendar-button')
  private _elTrigger!: Promise<HTMLButtonElement>

  @queryAsync('#field')
  private _elFieldAsync!: Promise<HTMLDivElement>

  @queryAll('[role=spinbutton]')
  private _elSpinners!: NodeListOf<GdsDatePartSpinner>

  @query('#field')
  private _elField!: HTMLDivElement

  #valueOnOpen?: Date

  constructor() {
    super()
    GdsDatePartSpinner.define()
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-datepicker')
  }

  focus(options?: FocusOptions): void {
    this._getValidityAnchor()?.focus(options)
  }

  render() {
    return html`
      ${when(
        !this.plain,
        () =>
          html`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${when(
              this.supportingText.length > 0,
              () =>
                html`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`,
            )}
            <slot
              id="supporting-text-slot"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot
              id="sub-label-slot"
              name="sub-label"
              slot="supporting-text"
            ></slot>
          </gds-form-control-header>`,
      )}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${this.#handleFieldClick}
        @copy=${this.#handleClipboardCopy}
        @paste=${this.#handleClipboardPaste}
        id="field"
      >
        <div class="spinners">
          ${join(
            map(
              this._dateFormatLayout.layout,
              (f, i) =>
                html`<gds-date-part-spinner
                  id="spinner-${i}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${f.token === 'y' ? 4 : 2}
                  .value=${this.#spinnerState[f.name]}
                  aria-valuemin=${this.#getMinSpinnerValue(f.name)}
                  aria-valuemax=${this.#getMaxSpinnerValue(f.name)}
                  aria-label=${this.#getSpinnerLabel(f.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${this.#getMaxSpinnerValue(f.name).toString()
                    .length}
                  @keydown=${this.#handleSpinnerKeydown}
                  @change=${(e: CustomEvent) =>
                    this.#handleSpinnerChange(e.detail.value, f.name)}
                  @focus=${this.#handleSpinnerFocus}
                  @touchend=${(e: MouseEvent) => {
                    this.open = true
                    e.preventDefault()
                  }}
                ></gds-date-part-spinner>`,
            ),
            html`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`,
          )}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size === 'small' ? 'xs' : 'small'}"
          rank="tertiary"
          variant=${this.invalid ? 'negative' : ''}
          aria-label="${msg('Open calendar modal')}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${when(
            this.size === 'small',
            () =>
              html`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,
            () => html`<gds-icon-calender-add></gds-icon-calender-add>`,
          )}
        </gds-button>
      </gds-field-base>

      ${when(
        this.#shouldShowFooter(),
        () =>
          html`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid ? this.errorMessage : undefined}
          >
            ${
              ``
              // @deprecated
              // Wrapped in a slot for backwards compatibility with the deprecated message slot
              // Remove for 2.0 release
            }
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`,
      )}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${this.#handlePopoverStateChange}
        label=${this.label}
        id="calendar-popover"
        .placement=${'bottom-end'}
        .calcMinWidth=${() => (this.showWeekNumbers ? '350px' : '305px')}
        .useModalInMobileView=${true}
        @focusin=${async (e: FocusEvent) => {
          const isPopover = (e.target as GdsPopover)?.id === 'calendar-popover'
          if (!isPopover) return
          this._elCalendar.then((cal) => cal.focus())
        }}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${this.#handleDecrementFocusedMonth}
              aria-label=${msg('Switch to previous month')}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${this.#handleMonthChange}
              .maxHeight=${300}
              label="${msg('Month')}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${msg('January')}</gds-option>
              <gds-option value="1">${msg('February')}</gds-option>
              <gds-option value="2">${msg('March')}</gds-option>
              <gds-option value="3">${msg('April')}</gds-option>
              <gds-option value="4">${msg('May')}</gds-option>
              <gds-option value="5">${msg('June')}</gds-option>
              <gds-option value="6">${msg('July')}</gds-option>
              <gds-option value="7">${msg('August')}</gds-option>
              <gds-option value="8">${msg('September')}</gds-option>
              <gds-option value="9">${msg('October')}</gds-option>
              <gds-option value="10">${msg('November')}</gds-option>
              <gds-option value="11">${msg('December')}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${this.#handleYearChange}
              .maxHeight=${300}
              label="${msg('Year')}"
              size="small"
              class="year"
              hide-label
            >
              ${repeat(
                this.#years,
                (year) => year,
                (year) => html`<gds-option value=${year}>${year}</gds-option>`,
              )}
            </gds-dropdown>
            <gds-button
              @click=${this.#handleIncrementFocusedMonth}
              aria-label=${msg('Switch to next month')}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${this.#handleCalendarChange}
            @gds-date-focused=${this.#handleCalendarFocusChange}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${when(
            this.clearable || !this.hideTodayButton,
            () => html`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${when(
                  this.clearable,
                  () =>
                    html` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${(e: MouseEvent) => {
                        e.stopPropagation()
                        this.value = undefined
                        this.open = false
                        this.#dispatchInputEvent()
                        this.#dispatchChangeEvent()
                      }}
                      aria-label=${msg('Clear selected date')}
                    >
                      ${msg('Clear')}
                    </gds-button>`,
                )}
                ${until(this.#renderBackToValidRangeButton(), nothing)}
                ${when(
                  !this.hideTodayButton,
                  () =>
                    html` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${(e: MouseEvent) => {
                        e.stopPropagation()
                        this.#focusDate(new Date())
                      }}
                      aria-label=${msg("Select today's date")}
                    >
                      ${msg('Today')}
                    </gds-button>`,
                )}
              </gds-flex>
            `,
          )}
        </gds-div>
      </gds-popover>
    `
  }

  #shouldShowFooter() {
    return !this.plain
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._elSpinners[0]
  }

  async #renderBackToValidRangeButton() {
    const focusedDate = await this.getFocusedDate()

    let buttonTxt = ''
    let buttonAction: (e: MouseEvent) => void

    if (focusedDate && focusedDate > this.max) {
      buttonTxt = msg('Last available date')
      buttonAction = (e: MouseEvent) => {
        e.stopPropagation()
        this.#focusDate(this.max)
      }
    } else if (focusedDate && focusedDate < this.min) {
      buttonTxt = msg('First available date')
      buttonAction = (e: MouseEvent) => {
        e.stopPropagation()
        this.#focusDate(this.min)
      }
    }

    return html`${when(
      buttonTxt.length > 0,
      () =>
        html`<gds-button rank="tertiary" size="small" @click=${buttonAction}>
          ${buttonTxt}
        </gds-button>`,
      () => nothing,
    )}`
  }

  #focusDate(d: Date) {
    const focusDate = new Date(d)
    this._elCalendar
      .then((el) => (el.focusedDate = focusDate))
      .then(this.#handleCalendarFocusChange)
  }

  @watch('value')
  private _handleValueChange() {
    if ((this.value as any) === '') this.value = undefined

    // Reset spinner state if value is unset
    if (!this.value) {
      this.#spinnerState = {
        year: 'yyyy',
        month: 'mm',
        day: 'dd',
      }
      return
    }

    const date = this.value
    this._focusedMonth = date.getMonth()
    this._focusedYear = date.getFullYear()

    // Update spinner state
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    this.#spinnerState = { year, month, day }
  }

  @watch('open')
  private _handleOpenChange() {
    if (this.open) {
      this.#valueOnOpen = this.value
      this._elCalendar.then((el) => el.focus())
    }
  }

  #getSpinnerLabel(name: DatePart) {
    const labels = {
      year: msg('Year'),
      month: msg('Month'),
      day: msg('Day'),
    }
    return `${labels[name]} ${this.label}`
  }

  #getMinSpinnerValue(name: DatePart) {
    const min = {
      year: 1900,
      month: 1,
      day: 1,
    }
    return min[name]
  }

  #getMaxSpinnerValue(name: DatePart) {
    const max = {
      year: 9999,
      month: 12,
      day: 31,
    }
    return max[name]
  }

  #dispatchChangeEvent() {
    this.updateComplete.then(() =>
      this.dispatchStandardEvent('change', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #dispatchInputEvent() {
    this.updateComplete.then(() =>
      this.dispatchStandardEvent('input', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #handleSpinnerFocus = (e: FocusEvent) => {
    this._elTrigger.then((field) => {
      document.getSelection()?.removeAllRanges()
      const range = new Range()
      range.setStart(field.firstChild!, 0)
      range.setEnd(field.lastChild!, 4)
      document.getSelection()?.addRange(range)
    })
  }

  #handleClipboardCopy = (e: ClipboardEvent) => {
    this._elFieldAsync.then((field) => {
      if (e.currentTarget !== field) return
      e.preventDefault()
      e.clipboardData?.setData('text/plain', this.displayValue)
    })
  }

  #handleClipboardPaste = (e: ClipboardEvent) => {
    this._elFieldAsync.then((field: HTMLElement) => {
      if (e.currentTarget !== field) return
      e.preventDefault()
      const pasted = e.clipboardData?.getData('text/plain')
      if (!pasted) return

      let pastedDate = new Date('-')
      const invalid = 'Invalid Date'

      // Try to parse the date with the dateformat
      const parts = pasted.split(this._dateFormatLayout.delimiter)
      if (parts.length === 3) {
        const layout = this._dateFormatLayout.layout
        const year = parseInt(parts[layout.findIndex((f) => f.token === 'y')])
        const month =
          parseInt(parts[layout.findIndex((f) => f.token === 'm')]) - 1
        const day = parseInt(parts[layout.findIndex((f) => f.token === 'd')])
        if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
          pastedDate = new Date(`${year}-${month + 1}-${day}`)
        }
      }
      if (pastedDate.toString() === invalid) {
        pastedDate = new Date(pasted)
        if (pastedDate.toString() === invalid) {
          return
        }
      }

      this.value = pastedDate
      this.#dispatchChangeEvent()
    })
  }

  #handleFieldClick = (e: MouseEvent) => {
    this._elSpinners[0]?.focus()
  }

  #handleCalendarChange = (e: CustomEvent<Date>) => {
    e.stopPropagation()
    const date = new Date(e.detail)
    date.setUTCHours(this.utcHours, 0, 0, 0)
    this.value = date
    this.open = false
    this.#dispatchChangeEvent()
    this.#dispatchInputEvent()
  }

  #handleMonthChange = (e: CustomEvent) => {
    e.stopPropagation()
    this._focusedMonth = (e.target as GdsDropdown)?.value
  }

  #handleYearChange = (e: CustomEvent) => {
    e.stopPropagation()
    this._focusedYear = (e.target as GdsDropdown)?.value
  }

  #handleIncrementFocusedMonth = (_e: MouseEvent) => {
    if (this._focusedMonth < 11) {
      this._focusedMonth++
    } else if (
      this._focusedMonth == 11 &&
      this._focusedYear != this.max.getFullYear()
    ) {
      this._focusedMonth = 0
      this._focusedYear++
    }
  }

  #handleDecrementFocusedMonth = (_e: MouseEvent) => {
    if (this._focusedMonth > 0) {
      this._focusedMonth--
    } else if (
      this._focusedMonth == 0 &&
      this._focusedYear != this.min.getFullYear()
    ) {
      this._focusedMonth = 11
      this._focusedYear--
    }
  }

  #handleCalendarFocusChange = async () => {
    this._focusedMonth = (await this._elCalendar).focusedMonth
    this._focusedYear = (await this._elCalendar).focusedYear
    this.value = new Date((await this._elCalendar).focusedDate)
    this.requestUpdate()
    this.#dispatchInputEvent()
  }

  #handlePopoverStateChange = async (e: CustomEvent) => {
    if (e.target !== e.currentTarget) return
    this.open = e.detail.open

    if (e.detail.reason === 'close') {
      const calValue = (await this._elCalendar).value

      if (!calValue) {
        this.value = undefined
        this.#dispatchChangeEvent()
        return
      }

      const hasChanged = !isSameDay(
        calValue || new Date(0),
        this.#valueOnOpen || new Date(0),
      )
      if (hasChanged) {
        this.value = new Date(calValue)
        this.#dispatchChangeEvent()
      }
      if (this.value) {
        this._focusedMonth = this.value.getMonth()
        this._focusedYear = this.value.getFullYear()
      }
    }

    if (e.detail.reason === 'cancel') {
      this.value = this.#valueOnOpen
      this.#dispatchInputEvent()
    }
  }

  #handleSpinnerKeydown = (e: KeyboardEvent) => {
    const index = Array.from(this._elSpinners).findIndex(
      (spinner) => spinner === e.target,
    )
    if (e.key === 'ArrowRight') {
      const next = this._elSpinners[index + 1]
      if (next) next.focus()
    }
    if (e.key === 'ArrowLeft') {
      const prev = this._elSpinners[index - 1]
      if (prev) prev.focus()
    }
  }

  /**
   * Takes a dateformat string from the dateformat attribute and turns it to a DateFormatLayout object used in rendering the template.
   */
  #parseDateFormat(dateformat: string): DateFormatLayout {
    const delimiter = dateformat.replace(/[a-z0-9]/gi, '')[0]
    const format = dateformat.split(delimiter)
    const year = format.findIndex((f) => f === 'y')
    const month = format.findIndex((f) => f === 'm')
    const day = format.findIndex((f) => f === 'd')

    if (year === -1 || month === -1 || day === -1)
      throw new Error('Invalid date format for <gds-datepicker>')

    const ordered = [year, month, day].sort((a, b) => a - b)
    const orderedFormat = ordered
      .map((i) => format[i])
      .map((f) => ({
        token: f,
        name: f === 'y' ? 'year' : f === 'm' ? 'month' : 'day',
      })) as DateFormatLayout['layout']

    return { delimiter, layout: orderedFormat }
  }

  #handleSpinnerChange = (val: string, name: DatePart) => {
    this.#spinnerState[name] = val

    const newDate = new Date()
    newDate.setFullYear(parseInt(this.#spinnerState.year))
    newDate.setMonth(parseInt(this.#spinnerState.month) - 1)
    newDate.setDate(parseInt(this.#spinnerState.day))
    newDate.setUTCHours(this.utcHours, 0, 0, 0)

    if (newDate.toString() === 'Invalid Date') return

    this.value = newDate

    this.#dispatchChangeEvent()
    this.#dispatchInputEvent()
  }

  /**
   * The spinner state keeps track of the spinner values regardless of whether a complete date has been enter yet.
   */
  #spinnerState = {
    year: 'yyyy',
    month: 'mm',
    day: 'dd',
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
}

/**
 * @element gds-datepicker
 * A form control that allows the user to select a date.
 *
 *
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be displayed in a panel when the user clicks the info button.
 * @slot message - ***(deprecated - use `errorMessage` property instead)*** Error message to show below the input field whem there is a validation error.
 * @slot sub-label - ***(deprecated - use `supporting-text` property instead)*** Renders between the label and the trigger button.
 *
 * @event change - Fired when the value of the dropdown is changed through user interaction (not when value prop is set programatically).
 * @event gds-ui-state - Fired when the dropdown is opened or closed.
 */
@gdsCustomElement('gds-datepicker', {
  dependsOn: [
    GdsFlex,
    GdsButton,
    GdsDropdown,
    GdsCalendar,
    GdsPopover,
    IconCalendar,
    IconCalenderAdd,
    IconChevronLeft,
    IconChevronRight,
  ],
})
export class GdsDatepicker extends withSizeXProps(
  withMarginProps(withLayoutChildProps(Datepicker)),
) {}
