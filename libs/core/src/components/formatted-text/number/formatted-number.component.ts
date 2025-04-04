import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { numberFormats } from '../formatters'

/**
 * @element gds-formatted-number
 * @status beta
 *
 * `gds-formatted-number` extends `gds-text` and format the date value based on the provided format and locale.
 *
 */
@gdsCustomElement('gds-formatted-number')
export class GdsFormattedNumber extends GdsFormattedText {
  @property({ attribute: false })
  value?: number

  @property({ type: String })
  locale?: string

  @property({ type: String })
  currency?: string

  get formattedValue() {
    return numberFormats.decimalsAndThousands(
      this.value,
      this.locale,
      this.currency,
    )
  }
}
