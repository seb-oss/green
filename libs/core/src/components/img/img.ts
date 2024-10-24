import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import IMGCSS from './img.style'

/**
 * `gds-img` is a custom element that provides a flexible image system.
 * It can be used to create an image with different styles and configurations.
 *
 * The image can be customized with different properties like ratio, position, inset, width, height, opacity, fit, and radius.
 *
 * @element gds-img
 * @status beta
 *
 */
@gdsCustomElement('gds-img')
export class GdsImg extends GdsElement {
  static styles = [tokens, IMGCSS]

  /**
   * Controls the aspect ratio of the image.
   * Supports all common aspect ratios like 16/9, 4/3, 1/1, etc.
   *
   * You can apply the aspect ratio like this:
   * ```html
   * <gds-img aspect-ratio="16/9"></gds-img>
   * ```
   * The above example will apply the aspect ratio of 16/9.
   *
   * You can also apply different aspect ratios for different screen sizes like this:
   * ```html
   * <gds-img aspect-ratio="l{16/9} m{4/3} s{1/1}"></gds-img>
   * ```
   *
   * The above example will apply the aspect ratio of 16/9 for large screens, 4/3 for medium screens, and 1/1 for small screens.
   *
   * @property ratio
   */
  @styleExpressionProperty({
    property: 'aspect-ratio',
    valueTemplate: (v) => v,
  })
  'aspect-ratio'?: string

  /**
   * Controls the `object-position` of the img.
   * Supports all common CSS values.
   * @property position
   */
  @styleExpressionProperty({
    property: 'object-position',
    selector: 'img',
    valueTemplate: (v) => v,
  })
  position?: string

  /**
   * Controls the inset property of the container.
   * Supports all valid CSS inset values.
   *
   * @example
   * You can apply the inset like this:
   * ```html
   * <gds-img inset="0"></gds-img>
   * ```
   *
   * You can also apply different inset values for different screen sizes like this:
   * ```html
   * <gds-img inset="l{0} m{10px} s{20px}"></gds-img>
   * ```
   *
   * @property inset
   */
  @styleExpressionProperty({
    property: 'inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  /**
   * Controls the width property of the image.
   *
   * @property width
   */
  @styleExpressionProperty({
    property: 'width',
    valueTemplate: (v) => v,
  })
  width?: string

  /**
   * Controls the height property of the image.
   *
   *  @property height
   */
  @styleExpressionProperty({
    property: 'height',
    valueTemplate: (v) => v,
  })
  height?: string

  /**
   * Controls the opacity property of the image.
   *
   * You can apply opacity like this:
   * ```html
   * <gds-img opacity="0.2"></gds-img>
   * ```
   * The above example will apply the opacity style of 0.2.
   * This is useful when you want to apply a transparent effect to the image when having a darkened background to increase the readability of the text.
   *
   * @property opacity
   */
  @styleExpressionProperty({
    property: 'opacity',
    valueTemplate: (v) => v,
  })
  opacity?: string

  /**
   * Controls the object-fit property of the image.
   *
   * You can apply fit like this:
   * ```html
   * <gds-img object-fit="cover"></gds-img>
   * ```
   *
   *  The above example will apply the object-fit style of cover.
   *
   * @property fit
   */
  @styleExpressionProperty({
    property: 'object-fit',
    selector: 'img',
    valueTemplate: (v) => v,
  })
  'object-fit'?: string

  /**
   * The image source URL.
   *
   * @property src
   */
  @property()
  src?: string

  /**
   * The image alt text.
   *
   * @property alt
   */
  @property()
  alt?: string

  /**
   * Controls the border-radius property of the image.
   * Supports all the size tokens from the design system.
   *
   * You can apply radius in each corner like this:
   * ```html
   * <gds-img border-radius="none none m m" ></gds-img>
   * ```
   *
   * Also for different breakpoints like this:
   * ```html
   * <gds-img border-radius="s{xs} m{xs} l{s}"></gds-img>
   * ```
   *
   * Each corner can have a different radius value and also different values for different breakpoints.
   * The radius styles are predefined in the tokens file and will be applied automatically based on the token value.
   *
   * @example
   * ```html
   * <gds-img border-radius="m"></gds-img>
   * <gds-img border-radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >
   *    Specific breakpoints and sides
   * </gds-img>
   * ```
   *
   * @property radius
   */
  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  'border-radius'?: string

  render() {
    return html`<img src="${this.src}" alt="${this.alt}" />`
    // return html`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`
  }
}
