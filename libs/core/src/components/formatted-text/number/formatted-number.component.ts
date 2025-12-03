import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { NumberFormats, numberFormats } from '../formatters'

/**
 * @element gds-formatted-number
 * @status beta
 *
 * `gds-formatted-number` extends `gds-text` and formats the number to the desired format.
 *
 * @example
 * <gds-formatted-number
 *   value="1234.5"
 *   locale="sv-SE"
 *   currency="SEK"
 *   decimals={3}>
 * </gds-formatted-number>
 */
@gdsCustomElement('gds-formatted-number')
export class GdsFormattedNumber extends GdsFormattedText {
  /** The numerical value to display. */
  @property({ attribute: false })
  value?: number | string

  /** The locale used for number formatting. */
  @property({ type: String })
  locale?: string

  /** The currency used when formatting numbers. */
  @property({ type: String })
  currency?: string

  /** The number of decimal places to display. */
  @property({ type: Number })
  decimals?: number

  /**
   * Specifies the number format.
   * @default 'decimalsAndThousands'
   */
  @property({ type: String })
  protected format: NumberFormats = 'decimalsAndThousands'

  get formattedValue() {
    return numberFormats[this.format](
      this.value,
      this.locale,
      this.currency,
      this.decimals,
    )
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    if (!this.value && this.textContent) {
      this.value = this.textContent
    }
  }
}
