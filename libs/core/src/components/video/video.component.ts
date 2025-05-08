import { property, query } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withPositioningProps,
  withSizeXProps,
  withSizeYProps,
} from '../../utils/mixins/declarative-layout-mixins'
import VideoCSS from './video.style'

/**
 * `gds-video` is a custom video element that provides configurable .mp4 video playback that can be used as background or hero video without controls.
 * The video can be customized with different properties like ratio, position, inset, width, height, opacity, fit, and radius.
 *
 * @element gds-video
 * @status beta
 *
 */
@gdsCustomElement('gds-video')
export class GdsVideo extends withSizeXProps(
  withSizeYProps(
    withMarginProps(withLayoutChildProps(withPositioningProps(GdsElement))),
  ),
) {
  static styles = [tokens, VideoCSS]

  /**
   * Controls the aspect ratio of the image.
   * Supports all common aspect ratios like 16/9, 4/3, 1/1, etc.
   *
   * You can apply the aspect ratio like this:
   *
   * ```html
   * <gds-video aspect-ratio="16/9"></gds-video>
   * ```
   *
   * The above example will apply the aspect ratio of 16/9.
   *
   * You can also apply different aspect ratios for different screen sizes like this:
   *
   * ```html
   * <gds-video aspect-ratio="l{16/9} m{4/3} s{1/1}"></gds-video>
   * ```
   *
   *  The above example will apply the aspect ratio of 16/9 for large screens, 4/3 for medium screens, and 1/1 for small screens.
   *
   * @property ratio
   */
  @styleExpressionProperty()
  'aspect-ratio'?: string

  /**
   * Controls the `object-position` of the video.
   * Supports all common CSS values.
   * @property position
   */
  @styleExpressionProperty({
    selector: 'video',
  })
  'object-position'?: string

  /**
   * Controls the opacity property of the image.
   *
   * You can apply opacity like this:
   *
   * ```html
   * <gds-img opacity="0.2"></gds-img>
   * ```
   *
   * The above example will apply the opacity style of 0.2.
   * This is useful when you want to apply a transparent effect to the image when having a darkened background to increase the readability of the text.
   * @property opacity
   */
  @styleExpressionProperty()
  opacity?: string

  /**
   * Controls the object-fit property of the image.
   *
   * You can apply fit like this:
   *
   * ```html
   * <gds-img object-fit="cover"></gds-img>
   * ```
   *
   *  The above example will apply the object-fit style of cover.
   *
   * @property fit
   */
  @styleExpressionProperty({
    selector: 'video',
  })
  'object-fit'?: string

  /**
   * Controls the pointer-events property of the video.
   * Supports all valid CSS pointer-events values.
   *
   * @property events
   */
  @styleExpressionProperty({
    selector: 'video',
  })
  'pointer-events'?: string

  /**
   * Controls the border-radius property of the video.
   * Supports all the size tokens from the design system.
   *
   * @example
   * You can apply radius in each corner like this:
   *
   * ```html
   * <gds-div border-radius="none none m m" ></gds-div>
   * ```
   *
   * Also for different breakpoints like this:
   *
   * ```html
   * <gds-div border-radius="s{none none xs} m{none xs none xs} l{s}" ></gds-div>
   * ```
   *
   * Each corner can have a different radius value and also different values for different breakpoints.
   * @property radius
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `var(--gds-sys-space-${v})`,
  })
  'border-radius'?: string

  // Video properties
  @property() src?: string
  @property() poster?: string
  @property({ type: Boolean }) muted?: boolean
  @property({ type: Boolean }) playsinline?: boolean
  @property({ type: Boolean }) autoplay?: boolean
  @property({ type: Boolean }) loop?: boolean
  @query('video') videoElement!: HTMLVideoElement

  // Method to programmatically apply video settings
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
    return html`<video></video>`
  }

  firstUpdated() {
    this.applyVideoSettings()
  }
}
