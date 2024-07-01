import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../../gds-element'
import { GdsFlex } from '../flex'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'

import ContainerCSS from './container.style.css'

/**
 * The `gds-container` is a custom element that provides a flexible container system.
 * It can be used to create a container with different styles and configurations.
 * The container can be customized with different properties like padding, gap, display, position, and background.
 * It can be used in combination with other elements like `gds-grid`, `gds-card`, `gds-img`, `gds-text` etc.
 *
 * @element gds-container
 * @status beta
 *
 */

@gdsCustomElement('gds-container')
export class GdsContainer extends GdsFlex {
  static styles = [tokens, ContainerCSS]

  /**
   * Controls the opacity property of the container.
   *
   * You can apply opacity like this:
   *
   * ```html
   * <gds-container opacity="0.2"></gds-container>
   * ```
   *
   * @property opacity
   */
  @styleExpressionProperty({
    property: 'opacity',
    valueTemplate: (v) => v,
  })
  opacity?: string

  /**
   * Controls the backdrop-filter property of the container.
   * When you want to apply a backdrop blur filter to the container you can use this property.
   *
   * @property filter
   *
   * @example
   * ```html
   * <gds-container filter="20px"></gds-container>
   * ```
   *
   * The above example will apply a backdrop blur filter of `20px`.
   *
   *  The filter also support breakpoint syntax like this:
   * ```html
   * <gds-container filter="s{20px} m{40px} l{60px}"></gds-container>
   * ```
   *
   * The above example will apply the filter style of `20px` for `small` devices, `40px` for `medium` devices, and `60px` for large devices.
   */
  @styleExpressionProperty({
    property: 'backdrop-filter',
    valueTemplate: (v) => `blur(${v})`,
  })
  filter?: string

  /**
   * Controls the border-radius property of the container.
   * Supports all the size tokens from the design system.
   *
   * @property radius
   *
   * @example
   * You can apply radius in each corner like this:
   * ```html
   * <gds-container radius="none none m m" ></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   * ```html
   * <gds-container radius="s{none none xs} m{none xs none xs} l{s}" ></gds-container>
   * ```
   *
   * Each corner can have a different radius value and also different values for different breakpoints.
   *
   *  * These are the available values you can use to define Border Radius
   *
   * `0, 4XS, 3XS, 2XS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL, 7XL, 8XL, MAX`
   *
   */
  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  radius?: string

  /**
   * Controls the background property of the card.
   * Supports all the color tokens from the design system.
   *
   * @property background
   *
   * Adding transparency to the background color:
   * ```html
   * <gds-container background="primary/0.2"></gds-container>
   * ```
   * The above example will apply the background style of `primary` with `20%` transparency.
   */

  @styleExpressionProperty({
    property: 'background',
    valueTemplate: (v) => {
      const [colorName, transparency] = v.split('/')
      if (transparency) {
        return `color-mix(in srgb, var(--gds-sys-color-${colorName}) ${parseFloat(transparency) * 100}%, transparent 0%)`
      } else {
        return `var(--gds-sys-color-${colorName})`
      }
    },
  })
  background?: string

  /**
   * Controls the color property of the container.
   * Supports all the color tokens from the design system.
   *
   * @property color
   *
   * @example
   * ```html
   * <gds-container color="primary"></gds-container>
   * ```
   * The above example will apply the color style of `primary`.
   */
  @styleExpressionProperty({
    property: 'color',
    valueTemplate: (v) => {
      const [colorName, transparency] = v.split('/')
      if (transparency) {
        return `color-mix(in srgb, var(--gds-sys-color-${colorName}) ${parseFloat(transparency) * 100}%, transparent 0%)`
      } else {
        return `var(--gds-sys-color-${colorName})`
      }
    },
  })
  color?: string

  /**
   * Controls the border property of the card.
   * Supports all tokens from the design system.
   *
   * @property border
   *
   * Can be specified for each side using the size tokens like this:
   * ```html
   * <gds-container border="4xs 0 0 0"></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   * ```html
   * <gds-container border="s{2xs} m{3xs} l{4xs}"></gds-container>
   * ```
   *
   * When you want to apply the border in all breakpoints and sides you can use the following:
   * ```html
   * <gds-container border="4xs"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: (v) => {
      const [size, color] = v.split('/')
      return `var(--gds-space-${size}) solid ${color ? `var(--gds-sys-color-${color})` : 'currentColor'}`
    },
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values.length > 1 ? values[1] : top
      const bottom = values.length > 2 ? values[2] : top
      const left = values.length > 3 ? values[3] : top
      return `border-top: ${top}; border-right: ${right}; border-bottom: ${bottom}; border-left: ${left};`
    },
  })
  border?: string

  /**
   * Controls the mask-image property of the container.
   * Adds a predefined style of mask to the container.
   *
   * @property mask
   *
   * @example
   *
   * ```html
   * <gds-container mask="top"></gds-container>
   * ```
   * The above example will apply the mask style of `top` with `40%` transparency.
   *
   */
  @styleExpressionProperty({
    property: 'mask-image',
    valueTemplate: (v) =>
      `linear-gradient(to ${v}, currentColor 40%, transparent)`,
  })
  mask?: string

  render() {
    return html`<slot></slot>`
  }
}
