import { css } from 'lit'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsContainer } from '../container'

/**
 *  A container for content representing a single entity. e.g. a contact, article, or task.
 *
 * `gds-card` inherits all properties from `gds-container`, but comes with some predefined defaults
 * and a shortcut property for specifiying different card variants.
 *
 * @element gds-card
 * @status beta
 *
 */
@gdsCustomElement('gds-card')
export class GdsCard extends GdsContainer {
  static styles = [
    tokens,
    css`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `,
  ]

  /**
   * Controls the box-shadow property.
   *
   * These are the available values you can use to define shadow size
   *
   * `xs`, `s`, `m`, `l`, `xl`
   *
   */
  @styleExpressionProperty({
    property: 'box-shadow',
    valueTemplate: (v) => `var(--gds-shadow-${v})`,
  })
  shadow?: string

  /**
   * Shortcut for setting the border, background and text color of the card to the specified color variant, such as 'primary', 'secondary', 'tertiary', etc.
   *
   * You can find all available variants in the L2 section of the [Color System documentation page](./?path=/docs/style-colors--docs)
   *
   * Supports Style Expression syntax for setting the value responsively.
   *
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
    styleTemplate: function (_prop, v) {
      return `
      --_border-color: var(--gds-color-l${(this as GdsCard).level}-background-${v});
      --_background-color: var(--gds-color-l${(this as GdsCard).level}-background-${v});
      --_color: var(--gds-color-l${(this as GdsCard).level}-content-${v});
      `
    },
  })
  variant = 'primary' /// This sets variables that are used in the default styles. Any other SEPs will override.

  constructor() {
    super()

    // Default values for cards
    this.padding = 's; m{l}'
    this['border-radius'] = 'xs; m{s}'
    this['border-width'] = '4xs'
  }

  render() {
    return html`<slot></slot>`
  }
}
