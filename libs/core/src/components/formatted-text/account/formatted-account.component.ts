import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { AccountFormats, accountsFormats } from './account-formatter'

/**
 * @element gds-formatted-account
 * @status beta
 *
 * `gds-formatted-account` extends `gds-text` and formats the account to the desired format.
 *
 * @example
 * <gds-formatted-account
 *   account="54400023423">
 * </gds-formatted-account>
 */
@gdsCustomElement('gds-formatted-account')
export class GdsFormattedAccount extends GdsFormattedText {
  /**
   * The account number or identifier to display.
   * For format 'seb-account', it needs to be 11 characters.
   * */
  @property()
  account?: number | string

  /**
   * Specifies the account format.
   * @default 'seb-account'
   */
  @property({ type: String })
  protected format: AccountFormats = 'seb-account'

  get formattedValue() {
    return accountsFormats[this.format](this.account)
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    if (!this.account && this.textContent) {
      this.account = this.textContent
    }
  }
}
