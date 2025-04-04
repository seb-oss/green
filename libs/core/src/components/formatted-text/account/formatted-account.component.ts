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
  @property({ type: String })
  account?: string

  get formattedValue() {
    return accountsFormats['seb-account'](this.account)
  }
}
