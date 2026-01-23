import { localized, msg } from '@lit/localize'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import {
  withLayoutChildProps,
  withMarginProps,
  withPositioningProps,
} from '../../utils/mixins/declarative-layout-mixins'
import styles from './spinner.styles'

/**
 * @element gds-spinner
 * @status beta
 *
 * GDS Spinner Component
 *
 * A loading indicator with accessibility support and various display modes.
 *
 * @example Basic usage
 * ```html
 * <gds-spinner></gds-spinner>
 * ```
 *
 * @example With label
 * ```html
 * <gds-spinner label="Loading..." showLabel></gds-spinner>
 * ```
 *
 * @example Different sizes
 * ```html
 * <gds-spinner size="sm"></gds-spinner>
 * <gds-spinner size="md"></gds-spinner>
 * <gds-spinner size="lg"></gds-spinner>
 * ```
 *
 * @example Cover container
 * ```html
 * <div style="position: relative;">
 *   <!-- Container content -->
 *   <gds-spinner cover></gds-spinner>
 * </div>
 * ```
 *
 * @example Fullscreen
 * ```html
 * <gds-spinner fullscreen label="Loading application..." showLabel></gds-spinner>
 * ```
 *
 * @event gds-spinner-connected - When the spinner is connected and visible
 */
@gdsCustomElement('gds-spinner')
@localized()
export class GdsSpinner extends withMarginProps(
  withPositioningProps(withLayoutChildProps(GdsElement)),
) {
  /** All styles are defined in the external styles file */
  static styles = [tokens, styles]

  /**
   * The text to display as a label for the spinner
   */
  @property({ type: String })
  label: string = msg('Loading...')

  @property({ type: String, reflect: true, attribute: 'label-position' })
  labelPosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom'

  /**
   * Whether to display the label text visually
   * If false, the label is still available for screen readers
   */
  @property({ type: Boolean, reflect: true })
  showLabel = false

  /**
   * When true, covers the parent container with a semi-transparent backdrop
   * Parent must have position: relative
   */
  @property({ type: Boolean, reflect: true })
  cover = false

  /**
   * When true, covers the entire viewport with a fixed position backdrop
   */
  @property({ type: Boolean, reflect: true })
  fullscreen = false

  /**
   * Size variant of the spinner
   */
  @property({ type: String, reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md'

  /**
   * Whether the spinner is currently animating
   * @private
   */
  @state()
  private _isAnimating = false

  /**
   * Sets up accessibility attributes and initializes the spinner
   */
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'status')
    this.setAttribute('aria-live', 'polite')
    this._isAnimating = true
    this.dispatchCustomEvent('gds-spinner-connected')
  }

  /**
   * Cleans up document styles if fullscreen mode was used
   */
  disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.fullscreen) {
      this.fullscreen = false
      this._toggleRootStyles()
    }
    this._isAnimating = false
    super.disconnectedCallback()
  }

  /**
   * Updates the aria-label attribute based on the label property
   * @private
   */
  @watch('label')
  private _updateAriaLabel(): void {
    this.setAttribute('aria-label', this.label)
  }

  /**
   * Renders the spinner component
   */
  protected render() {
    return html`
      <div part="wrapper" class=${classMap(this.#getWrapperClasses())}>
        <span part="spinner" class="spinner"></span>
        ${when(
          this.showLabel,
          () =>
            html`<span part="label" class="spinner-label">${this.label}</span>`,
        )}
      </div>
    `
  }

  /**
   * Generates CSS classes for the wrapper element based on component state
   * @private
   */
  #getWrapperClasses() {
    return {
      'spinner-wrapper': true,
      'spinner-fullscreen': this.fullscreen,
      'spinner-cover': this.cover,
      'spinner-backdrop': this.cover || this.fullscreen,
      'spinner-animating': this._isAnimating,
      [`spinner-label-${this.labelPosition}`]: this.labelPosition,
    }
  }

  /**
   * Stores original document styles before applying fullscreen mode
   * @private
   */
  #originalStyles = {
    overflow: 'visible',
    overscrollBehavior: 'auto',
  }

  /**
   * Toggles document root styles when in fullscreen mode
   * Prevents scrolling of the document when fullscreen overlay is active
   * @private
   */
  @watch('fullscreen')
  private _toggleRootStyles() {
    const { style } = document.documentElement
    if (this.fullscreen) {
      // Save original styles before modifying
      this.#originalStyles = {
        overflow: style.overflow,
        overscrollBehavior: style.overscrollBehavior,
      }
      style.overflow = 'hidden'
      style.overscrollBehavior = 'none'
    } else {
      // Restore original styles
      style.overflow = this.#originalStyles.overflow
      style.overscrollBehavior = this.#originalStyles.overscrollBehavior
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gds-spinner': GdsSpinner
  }
}
