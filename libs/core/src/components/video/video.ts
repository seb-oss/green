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

  // Styling properties
  @styleExpressionProperty({
    property: '--_ratio',
    valueTemplate: (v) => `${v}`,
  })
  ratio?: string

  @styleExpressionProperty({
    property: '--_position',
    valueTemplate: (v) => v,
  })
  position?: string

  @styleExpressionProperty({
    property: '--_inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  @styleExpressionProperty({
    property: 'width',
    valueTemplate: (v) => v,
  })
  width?: string

  @styleExpressionProperty({
    property: 'height',
    valueTemplate: (v) => v,
  })
  height?: string

  @styleExpressionProperty({
    property: '--_opacity',
    valueTemplate: (v) => v,
  })
  opacity?: string

  @styleExpressionProperty({
    property: '--_fit',
    valueTemplate: (v) => v,
  })
  fit?: string

  @styleExpressionProperty({
    property: 'pointer-events',
    valueTemplate: (v) => v,
  })
  events?: string

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
    return html`<figure><video></video></figure>`
  }

  // Lifecycle method that is called after the first render
  firstUpdated() {
    this.applyVideoSettings()
  }
}
