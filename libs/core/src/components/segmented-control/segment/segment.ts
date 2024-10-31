import { unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import { gdsCustomElement, html } from '../../../scoping'
import { tokens } from '../../../tokens.style'
import { TransitionalStyles } from '../../../transitional-styles'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'
import style from './segment.style.css?inline'

/**
 * @element gds-segment
 */
@gdsCustomElement('gds-segment')
export class GdsSegment<ValueT = any> extends GdsElement {
  static styles = [...tokens, unsafeCSS(style)]

  /**
   * Whether the segment is selected
   * @attr selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false

  /**
   * Value can be used to tie arbitrary data to the segment.
   * @attr value
   */
  @property()
  value?: ValueT

  /**
   * Whether the segment is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /**
   * Controls the `min-width` css property of the segment.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'min-width'?: string

  /**
   * Controls the `max-width` css property of the segment.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'max-width'?: string

  /**
   * Controls the `width` css property of the segment.
   */
  @styleExpressionProperty()
  width?: string

  /**
   * Whether the segment is currently visible.
   */
  get isVisible() {
    return this._isVisible
  }
  // This is deliberatly not marked as private, since we're setting it from the parent component,
  // but it is not meant to be set by the consumer.
  _isVisible = true

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-segmented')
    this.setAttribute('role', 'listitem')
  }

  render() {
    return html`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`
  }
}
