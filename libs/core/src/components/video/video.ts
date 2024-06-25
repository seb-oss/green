import { property, query } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import VideoCSS from './video.style.css'

@gdsCustomElement('gds-video')
export class GdsVideo extends GdsElement {
  static styles = [tokens, VideoCSS]

  /**
   * @property ratio
   * Controls the aspect ratio of the image.
   * Supports all common aspect ratios like 16/9, 4/3, 1/1, etc.
   *
   * You can apply the aspect ratio like this:
   * ```html
   * <gds-video ratio="16/9"></gds-video>
   * ```
   * The above example will apply the aspect ratio of 16/9.
   *
   * You can also apply different aspect ratios for different screen sizes like this:
   * ```html
   * <gds-video ratio="l{16/9} m{4/3} s{1/1}"></gds-video>
   * ```
   * The above example will apply the aspect ratio of 16/9 for large screens, 4/3 for medium screens, and 1/1 for small screens.
   */
  @styleExpressionProperty({
    property: '--_ratio',
    valueTemplate: (v) => `${v}`,
  })
  ratio?: string

  /**
   * @property position
   * Controls the position of the video.
   * Supports all common positions absolute, relative, fixed etc.
   * This property is used to set the position of the video element when used as background video.
   */
  @styleExpressionProperty({
    property: '--_position',
    valueTemplate: (v) => v,
  })
  position?: string

  /**
   * @property inset
   * Controls the inset property of the container.
   * Supports all valid CSS inset values.
   *
   * @example
   * You can apply the inset like this:
   * ```html
   * <gds-video inset="0"></gds-video>
   * ```
   *
   * You can also apply different inset values for different screen sizes like this:
   * ```html
   * <gds-video inset="l{0} m{10px} s{20px}"></gds-video>
   * ```
   *
   */
  @styleExpressionProperty({
    property: '--_inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  /**
   * @property width
   * Controls the width property of the video.
   */
  @styleExpressionProperty({
    property: 'width',
    valueTemplate: (v) => v,
  })
  width?: string

  /**
   * @property height
   * Controls the height property of the video.
   */
  @styleExpressionProperty({
    property: 'height',
    valueTemplate: (v) => v,
  })
  height?: string

  /**
   * @property opacity
   * Controls the opacity property of the image.
   *
   * You can apply opacity like this:
   * ```html
   * <gds-img opacity="0.2"></gds-img>
   * ```
   * The above example will apply the opacity style of 0.2.
   * This is useful when you want to apply a transparent effect to the image when having a darkened background to increase the readability of the text.
   */
  @styleExpressionProperty({
    property: '--_opacity',
    valueTemplate: (v) => v,
  })
  opacity?: string

  /**
   * @property fit
   * Controls the object-fit property of the image.
   *
   * You can apply fit like this:
   * ```html
   * <gds-img fit="cover"></gds-img>
   * ```
   * The above example will apply the object-fit style of cover.
   */
  @styleExpressionProperty({
    property: '--_fit',
    valueTemplate: (v) => v,
  })
  fit?: string

  /**
   * @property events
   * Controls the pointer-events property of the video.
   * Supports all valid CSS pointer-events values.
   */
  @styleExpressionProperty({
    property: 'pointer-events',
    valueTemplate: (v) => v,
  })
  events?: string

  /**
   * @property radius
   * Controls the border-radius property of the video.
   * Supports all the size tokens from the design system.
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
   */
  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-sys-radii-${v})`,
  })
  radius?: string

  // Video properties
  @property() src?: string
  @property() poster?: string
  @property({ type: Boolean }) muted?: boolean
  @property({ type: Boolean }) playsinline?: boolean
  @property({ type: Boolean }) autoplay?: boolean
  @property({ type: Boolean }) loop?: boolean
  @query('video') videoElement!: HTMLVideoElement

  applyVideoSettings() {
    if (this.videoElement) {
      this.videoElement.src = this.src || ''
      this.videoElement.poster = this.poster || ''
      this.videoElement.muted = this.muted || false
      this.videoElement.autoplay = this.autoplay || false
      this.videoElement.loop = this.loop || false
      this.videoElement.playsInline = this.playsinline || false
    }
  }

  render() {
    return html`<figure><video></video></figure>`
  }

  firstUpdated() {
    this.applyVideoSettings()
  }
}
