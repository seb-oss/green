import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { DateTimeFormat, dateTimeFormats } from './date-time-formatter'

/**
 * @element gds-formatted-date
 * @status beta
 *
 * `gds-formatted-date` extends `gds-text` and formats the date to the desired format.
 *
 * @example
 * <gds-formatted-date
 *   value="2023-10-10T12:00:00Z"
 *   locale="sv-SE"
 *   format="dateOnlyNumbers">
 * </gds-formatted-date>
 */

@gdsCustomElement('gds-formatted-date')
export class GdsFormattedDate extends GdsFormattedText {
  /** The date value to be formatted, either Date or ISO string. */
  @property({ attribute: false })
  value?: Date | string

  /**
   * Specifies the date format.
   * @default 'dateOnlyNumbers'
   */
  @property({ type: String })
  format: DateTimeFormat = 'dateOnlyNumbers'

  /** The locale used for date formatting. */
  @property({ type: String })
  locale?: string

  get formattedValue() {
    if (this.format && this.format in dateTimeFormats) {
      return dateTimeFormats[this.format](
        this.value ?? this.element?.textContent ?? undefined,
        this.locale,
      )
    }

    return this.value?.toString() ?? ''
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    if (!this.value && this.textContent) {
      this.value = this.textContent
    }
  }
}
