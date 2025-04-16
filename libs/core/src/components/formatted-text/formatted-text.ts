import { PropertyValues } from 'lit'
import { query } from 'lit/decorators.js'

import { GdsText } from '../text'

/**
 * Abstract base class for Green Core formatted texts.
 *
 * @internal
 */
export abstract class GdsFormattedText extends GdsText {
  abstract get formattedValue(): string

  @query('[tag]')
  protected element?: Element

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties)

    if (this.element) {
      this.element.innerHTML = this.formattedValue
    }
  }
}
