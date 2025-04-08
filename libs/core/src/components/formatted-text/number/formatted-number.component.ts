import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { NumberFormats, numberFormats } from '../formatters'

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
  value?: number | string

  @property({ type: String })
  locale?: string

  @property({ type: String })
  currency?: string

  @property()
  protected format: NumberFormats = 'decimalsAndThousands'

  get formattedValue() {
    return numberFormats[this.format](this.value, this.locale, this.currency)
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    if (!this.value && this.element) {
      this.value = this.element.textContent ?? undefined
    }
  }
}
