import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { gdsCustomElement, html } from '../../../scoping'
import { GdsBlur } from '../../blur/blur.component'
import { GdsFormattedAccount } from '../../formatted-text/account/formatted-account.component'

/**
 * @element gds-sensitive-account
 *
 * @status beta
 *
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitiv/account)
 *
 * GdsSensitiveAccount is used to display accounts that need to be hidden
 *
 * The component renders the formatted account and conditionally hides it based on the `hide` property.
 *
 * @example
 * <gds-sensitive-account
 *   hide
 *   account="54400023423">
 * </gds-sensitive-account>
 */
@gdsCustomElement('gds-sensitive-account', { dependsOn: [GdsBlur] })
export class GdsSensitiveAccount extends GdsFormattedAccount {
  /**
   * When true, hides the sensitive account.
   * @default false
   */
  @property({ type: Boolean })
  hide = false

  render() {
    return when(
      this.hide,
      () => html`<gds-blur>${super.render()}</gds-blur>`,
      () => super.render(),
    )
  }
}
