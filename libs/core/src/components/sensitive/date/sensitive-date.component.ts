import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { gdsCustomElement, html } from '../../../scoping'
import { GdsBlur } from '../../blur/blur.component'
import { GdsFormattedDate } from '../../formatted-text/date/formatted-date.component'

/**
 * @element gds-sensitive-date
 *
 * @status beta
 *
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)
 *
 * GdsSensitiveDate is used to display dates that need to be hidden
 *
 * The component renders the formatted date and conditionally hides it based on the `hide` property.
 *
 * @example
 * <gds-sensitive-date
 *   hide
 *   value="2025/1/1"
 *   locale="sv-SE">
 * </gds-sensitive-date>
 */
@gdsCustomElement('gds-sensitive-date', { dependsOn: [GdsBlur] })
export class GdsSensitiveDate extends GdsFormattedDate {
  /**
   * When true, hides the sensitive date.
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
