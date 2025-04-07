import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { accountsFormats } from './account-formatter'

/**
 * @element gds-formatted-account
 * @status beta
 *
 * `gds-formatted-account` extends `gds-text` and format the date value based on the provided format and locale.
 *
 */
@gdsCustomElement('gds-formatted-account')
export class GdsFormattedAccount extends GdsFormattedText {
  @property()
  account?: number | string

  @property()
  format?: number | string = 'seb-account'

  get formattedValue() {
    return accountsFormats['seb-account'](
      this.account ?? this.element?.textContent ?? undefined,
    )
  }
}
