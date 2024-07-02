import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'
import { GdsContainer } from '../container'
import CardCSS from './card.style.css'

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
  static styles = [tokens, CardCSS]

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

  /**
   * Controls the border property of the card.
   * Supports all tokens from the design system.
   *
   * @property border
   *
   * Can be specified for each side using the size tokens like this:
   *
   * ```html
   * <gds-container border="4xs 0 0 0"></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   *
   * ```html
   * <gds-container border="s{2xs} m{3xs} l{4xs}"></gds-container>
   * ```
   *
   * When you want to apply the border in all breakpoints and sides you can use the following:
   *
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
   * Controls the border-radius property of the container.
   * Supports all the size tokens from the design system.
   *
   * You can apply radius in each corner like this:
   *
   * ```html
   * <gds-container radius="none none m m" ></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   *
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
   * Controls the backdrop-filter property of the container.
   * When you want to apply a backdrop blur filter to the container you can use this property.
   *
   * ```html
   * <gds-container filter="20px"></gds-container>
   * ```
   *
   * The above example will apply a backdrop blur filter of `20px`.
   *
   *  The filter also support breakpoint syntax like this:
   *
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
   *
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
