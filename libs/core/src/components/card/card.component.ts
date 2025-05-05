import { css } from 'lit'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div/div.component'

/**
 *  A container for content representing a single entity. e.g. a contact, article, or task.
 *
 * `gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults
 * and a shortcut property for specifiying different card variants.
 *
 * @element gds-card
 * @status beta
 *
 */
@gdsCustomElement('gds-card')
export class GdsCard extends GdsDiv {
  static styles = [
    tokens,
    css`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `,
  ]

  /**
   * Style Expression Property for the `box-shadow` property.
   *
   * Accepts shadow tokens from the design system.
   *
   * `xs`, `s`, `m`, `l`, `xl`
   *
   * @deprecated Use the `box-shadow` property instead.
   */
  @styleExpressionProperty({
    property: 'box-shadow',
    valueTemplate: (v) => `var(--gds-sys-shadow-${v})`,
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
    styleTemplate: function (_prop, v) {
      return `
      --_border-color: var(--gds-sys-color-l${(this as GdsCard).level}-background-${v});
      --_background-color: var(--gds-sys-color-l${(this as GdsCard).level}-background-${v});
      --_color: var(--gds-sys-color-l${(this as GdsCard).level}-content-${v});
      `
    },
  })
  variant = 'primary' /// This sets variables that are used in the default styles. Any other SEPs will override.

  constructor() {
    super()

    this.padding = 's;m{l}'
    this['border-radius'] = 'xs;m{s}'
    this['gap'] = 's;m{l}'
  }

  render() {
    return html`<slot></slot>`
  }
}
