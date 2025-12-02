import { PropertyValues } from 'lit'
import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { gdsCustomElement, html } from '../../../scoping'
import { GdsBlur } from '../../blur/blur.component'
import { numberFormats } from '../../formatted-text'
import { GdsFormattedNumber } from '../../formatted-text/number/formatted-number.component'

/**
 * @element gds-sensitive-number
 *
 * @status beta
 *
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitiv/number)
 *
 * GdsSensitiveNumber is used to display numbers that need to be hidden,
 * helping to protect sensitive numerical data.
 *
 * The component renders the formatted number and conditionally hides it based on the `hide` property.
 *
 * @example
 * <gds-sensitive-number
 *   hide
 *   value="1234"
 *   locale="sv-SE"
 *   decimals={3}>
 * </gds-sensitive-number>
 */
@gdsCustomElement('gds-sensitive-number', { dependsOn: [GdsBlur] })
export class GdsSensitiveNumber extends GdsFormattedNumber {
  /**
   * When true, hides the sensitive number.
   * @default false
   */
  @property({ type: Boolean })
  hide = false

  get formattedValue() {
    if (this.hide) {
      return numberFormats[this.format](
        0,
        this.locale,
        this.currency,
        this.decimals,
      )
    }

    return super.formattedValue
  }

  render() {
    return when(
      this.hide,
      () => html`<gds-blur>${super.render()}</gds-blur>`,
      () => super.render(),
    )
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties)

    if (this.element) {
      this.element.ariaLabel = super.formattedValue
    }
  }
}
