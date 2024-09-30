import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'
import { GdsContainer } from '../container'

/**
 * The `gds-card` is a custom element that provides a flexible card system.
 * It can be used to create a card with different styles and configurations.
 * The card can be customized with different properties like shadow, border, radius, and background.
 * It is designed to be used in different scenarios like displaying content, images, or other elements.
 * It can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.
 *
 * @element gds-card
 * @status beta
 *
 */
@gdsCustomElement('gds-card')
export class GdsCard extends GdsContainer {
  static styles = [tokens]

  /**
   * Controls the box-shadow property of the card.
   *
   * Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:
   *
   * ```html
   * <gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
   * ```
   * The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
   *
   * The shadow styles are predfied on the tokens and will be applied automativally based on the token value.
   *
   * These are the available values you can use to define shadow
   *
   * `XS`, `S`, `M`, `L`, `XL`
   *
   */
  @styleExpressionProperty({
    property: 'box-shadow',
    valueTemplate: (v) => `var(--gds-shadow-${v})`,
  })
  shadow?: string

  render() {
    return html`<slot></slot>`
  }
}
