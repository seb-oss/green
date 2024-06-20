import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import CardCSS from './card.style.css'

/**
 * @element gds-card
 * The `gds-card` is a custom element that provides a flexible card system.
 *
 * @status beta
 *
 */
@gdsCustomElement('gds-card')
export class GdsCard extends GdsElement {
  static styles = [tokens, CardCSS]

  /**
   * @property overflow
   * Controls the overflow property of the card.
   * Supports all valid CSS overflow values.
   */
  @styleExpressionProperty({
    property: 'overflow',
    valueTemplate: (v) => v,
  })
  overflow?: string

  /**
   * @property shadow
   * Controls the box-shadow property of the card.
   * Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:
   * ```html
   * <gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
   * ```
   * The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
   * The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.
   *
   */
  @styleExpressionProperty({
    property: 'box-shadow',
    valueTemplate: (v) => `var(--gds-shadow-${v})`,
  })
  shadow?: string

  /**
   * @property radius
   * Controls the border-radius property of the card.
   * Supports all the size tokens from the design system.
   * You can apply radius in each corner like this:
   * ```html
   * <gds-card radius="none none m m" ></gds-card>
   * ```
   * Also for different breakpoints like this:
   * ```html
   * <gds-card radius="s{xs} m{xs} l{s}"></gds-card>
   * ```
   *
   * Each corner can have a different radius value and also different values for different breakpoints.
   * The radius styles are predfied on the tokens file and will be applied automativally based on the token value.
   *
   * @example
   * ```html
   * <gds-card radius="m">All breakpoints</gds-card>
   * <gds-card
   *  radius="s{none none xs} m{none xs none xs} l{s}"
   * >
   *    Specific breakpoints and sides
   * </gds-card>
   * ```
   *
   */
  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-sys-radii-${v})`,
  })
  radius?: string

  /**
   * @property background
   * Controls the background property of the card.
   * Supports all the color tokens from the design system.
   */
  @styleExpressionProperty({
    property: 'background',
    valueTemplate: (v) => `var(--gds-sys-color-${v})`,
  })
  background?: string

  /**
   * @property border
   * Controls the border property of the card.
   * Supports all tokens from the design system.
   * Can be specified for each side useing the color token like this:
   * ```html
   * <gds-card border="currentColor transparent transparent transparent"></gds-card>
   * ```
   *
   * Also for different breakpoints like this:
   * ```html
   * <gds-card border="s{currentColor} m{currentColor} l{currentColor}"></gds-card>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `1px solid ${v}`,
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values[1]
      const bottom = values[2]
      const left = values[3]
      return `border-top: ${top}; border-right: ${right}; border-bottom: ${bottom}; border-left: ${left};`
    },
  })
  border?: string

  render() {
    return html`<slot></slot>`
  }
}
