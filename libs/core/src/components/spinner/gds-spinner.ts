import { PropertyValues } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { styles } from './gds-spinner.styles'
import {
  GdsSpinnerProperties,
  SpinnerConfig,
  SpinnerSize,
} from './gds-spinner.types'

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
 * @fires gds-spinner-shown - When the spinner is connected and visible
 * @fires gds-spinner-hidden - When the spinner is disconnected and hidden
 */
@gdsCustomElement('gds-spinner')
export class GdsSpinner extends GdsElement {
  /**
   * Default configuration values for the spinner
   */
  static readonly CONFIG: SpinnerConfig = {
    defaultLabel: 'Loading content',
    fullscreenZIndex: 9999,
  }

  /** All styles are defined in the external styles file */
  static styles = styles

  /**
   * The text to display as a label for the spinner
   */
  @property({ type: String }) label?: string

  /**
   * Whether to display the label text visually
   * If false, the label is still available for screen readers
   */
  @property({ type: Boolean, reflect: true }) showLabel = false

  /**
   * When true, covers the parent container with a semi-transparent backdrop
   * Parent must have position: relative
   */
  @property({ type: Boolean, reflect: true }) cover = false

  /**
   * When true, covers the entire viewport with a fixed position backdrop
   */
  @property({ type: Boolean, reflect: true }) fullscreen = false

  /**
   * Size variant of the spinner
   */
  @property({ type: String, reflect: true }) size: SpinnerSize = 'default'

  /**
   * Whether the spinner is currently animating
   * @private
   */
  @state()
  private _isAnimating = false

  /**
   * Stores original document styles before applying fullscreen mode
   * @private
   */
  #originalStyles = {
    overflow: 'visible',
    overscrollBehavior: 'auto',
  }

  /**
   * Sets up accessibility attributes and initializes the spinner
   */
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'status')
    this.setAttribute('aria-live', 'polite')
    this.#updateAriaLabel()
    this._isAnimating = true
    this.dispatchEvent(new CustomEvent('gds-spinner-shown'))
  }

  /**
   * Cleans up document styles if fullscreen mode was used
   */
  disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.fullscreen) {
      this.#toggleRootStyles(false)
    }
    this._isAnimating = false
    this.dispatchEvent(new CustomEvent('gds-spinner-hidden'))
    super.disconnectedCallback()
  }

  /**
   * Updates the component when properties change
   */
  protected updated(
    changedProperties: PropertyValues<GdsSpinnerProperties>,
  ): void {
    super.updated(changedProperties)
    if (changedProperties.has('label')) {
      this.#updateAriaLabel()
    }
    if (changedProperties.has('fullscreen')) {
      this.#toggleRootStyles(this.fullscreen)
    }
  }

  /**
   * Updates the aria-label attribute based on the label property
   * @private
   */
  #updateAriaLabel(): void {
    this.setAttribute(
      'aria-label',
      this.label || GdsSpinner.CONFIG.defaultLabel,
    )
  }

  /**
   * Renders the spinner component
   */
  protected render() {
    return html`
      <div part="wrapper" class=${classMap(this.#getWrapperClasses())}>
        <span part="spinner" class="gds-spinner"></span>
        ${when(
          this.label && this.showLabel,
          () =>
            html`<span part="label" class="spinner-label">${this.label}</span>`,
          () => null,
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
      'gds-spinner-wrapper': true,
      'gds-spinner-fullscreen': this.fullscreen,
      'gds-spinner-cover': this.cover,
      'gds-spinner-backdrop': this.cover || this.fullscreen,
      'gds-spinner-animating': this._isAnimating,
    }
  }

  /**
   * Toggles document root styles when in fullscreen mode
   * Prevents scrolling of the document when fullscreen overlay is active
   * @private
   */
  #toggleRootStyles(isFullscreen: boolean) {
    const { style } = document.documentElement
    if (isFullscreen) {
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
