import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withMarginProps,
  withPositioningProps,
  withSizeXProps,
  withSizeYProps,
} from '../../utils/mixins/declarative-layout-mixins'
import IMGStyles from './img.styles'

/**
 * @element gds-img
 *
 * `gds-img` is a custom element that make it possible to use some Style Expression Properties to style images.
 */
@gdsCustomElement('gds-img')
export class GdsImg extends withPositioningProps(
  withMarginProps(withSizeXProps(withSizeYProps(GdsElement))),
) {
  static styles = [tokens, IMGStyles]

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
   */
  @styleExpressionProperty({ selector: 'img' })
  'aspect-ratio'?: string

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
   */
  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-sys-space-${v})`,
  })
  'border-radius'?: string

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
    selector: 'img',
  })
  'object-fit'?: string

  /**
   * Controls the `object-position` of the img.
   * Supports all common CSS values.
   * @property position
   */
  @styleExpressionProperty({
    selector: 'img',
  })
  'object-position'?: string

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

  render() {
    return html`<img
      src="${ifDefined(this.src)}"
      alt="${ifDefined(this.alt)}"
    />`
  }
}
