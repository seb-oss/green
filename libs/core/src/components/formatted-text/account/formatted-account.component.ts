import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'

import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsFormattedText } from '../formatted-text'
import { AccountFormats, accountsFormats } from './account-formatter'

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
  protected format: AccountFormats = 'seb-account'

  get formattedValue() {
    return accountsFormats[this.format](this.account)
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)

    if (!this.account && this.element) {
      this.account = this.element.textContent ?? undefined
    }
  }
}
