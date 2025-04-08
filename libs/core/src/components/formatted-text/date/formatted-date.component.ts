import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { DateTimeFormat, dateTimeFormats } from './date-time-formatter'

/**
 * @element gds-formatted-date
 * @status beta
 *
 * `gds-formatted-date` extends `gds-text` and format the date value based on the provided format and locale.
 */

@gdsCustomElement('gds-formatted-date')
export class GdsFormattedDate extends GdsFormattedText {
  @property({ attribute: false })
  value?: Date | string

  @property({ type: String })
  format: DateTimeFormat = 'dateOnlyNumbers'

  @property({ type: String })
  locale?: string

  get formattedValue() {
    if (this.format && this.format in dateTimeFormats) {
      return dateTimeFormats[this.format](
        this.value ?? this.element?.textContent ?? undefined,
        this.locale,
      )
    }

    // TODO: Should this throw an error?
    // if (this.format) {
    //   console.warn(`${this.format} is not an available format`)
    // } else {
    //   console.warn('No format provided')
    // }

    return this.value?.toString() ?? ''
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    if (!this.value && this.element) {
      this.value = this.element.textContent ?? undefined
    }
  }
}
