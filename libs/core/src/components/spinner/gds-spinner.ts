/**
 * @fileoverview GDS Spinner Component - A loading indicator with accessibility support
 * @module gds-spinner
 */

import { css } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './gds-spinner.styles'

/**
 * GdsSpinner Component
 * A loading indicator web component that supports various sizes and display modes.
 *
 * @extends {GdsElement}
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <gds-spinner size="md" text="Loading..."></gds-spinner>
 *
 * <!-- Screen reader only text -->
 * <gds-spinner size="md" text="Loading..." .visualText=${false}></gds-spinner>
 *
 * <!-- Cover container -->
 * <gds-spinner size="md" text="Loading..." cover></gds-spinner>
 * ```
 *
 * @csspart spinner - The spinning circle element
 * @csspart text - The loading text element
 *
 * @fires gds-element-disconnected - Fired when the element is removed from the DOM
 */
@gdsCustomElement('gds-spinner')
export class GdsSpinner extends GdsElement {
  /**
   * Component styles combining design tokens, host styles, and component-specific styles
   * @type {Array<CSSStyleSheet>}
   */
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }
    `,
    styles,
  ]

  /**
   * Loading text to be displayed. Can be shown visually or for screen readers only.
   * @type {string|undefined}
   */
  @property({ type: String })
  text?: string

  /**
   * Controls text visibility mode.
   * When true, text is visible and announced to screen readers.
   * When false, text is only announced to screen readers.
   * @type {boolean}
   * @default true
   */
  @property({ type: Boolean })
  visualText: boolean = true

  /**
   * When true, adds a semi-transparent backdrop over the container.
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean })
  cover: boolean = false

  /**
   * When true, spinner covers the entire viewport with backdrop.
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean })
  fullscreen: boolean = false

  /**
   * Controls the size of the spinner.
   * @type {'default'|'sm'|'md'|'lg'}
   * @default 'default'
   */
  @property({ type: String })
  size: 'default' | 'md' | 'lg' | 'sm' = 'default'

  /**
   * Lifecycle method called when component is added to DOM.
   * Sets up accessibility attributes and applies transition styles.
   * @return {void}
   */
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'status')
    this.setAttribute('aria-busy', 'true')
    TransitionalStyles.instance.apply(this, 'gds-spinner')
  }

  /**
   * Generates CSS classes for the wrapper element based on component state.
   * @private
   * @return {string} Space-separated class names
   */
  private _getWrapperClasses(): string {
    const classes = ['gds-spinner-wrapper']

    if (this.fullscreen) {
      classes.push('gds-spinner-fullscreen')
    }

    if (this.cover) {
      classes.push('gds-spinner-cover')
    }

    if (this.cover || this.fullscreen) {
      classes.push('gds-spinner-backdrop')
    }

    return classes.join(' ')
  }

  /**
   * Generates CSS classes for the spinner element based on size.
   * @private
   * @return {string} Space-separated class names
   */
  private _getSpinnerClasses(): string {
    return `gds-spinner ${this.size ? `gds-spinner-${this.size}` : ''}`
  }

  /**
   * Renders text content based on visibility preference.
   * @private
   * @return {TemplateResult|null} The text element template or null if no text
   */
  private _renderText() {
    if (!this.text) return null

    if (this.visualText) {
      return html`<span class="spinner-text" aria-live="polite"
        >${this.text}</span
      >`
    } else {
      return html`<span class="sr-only" aria-live="polite">${this.text}</span>`
    }
  }

  /**
   * Renders the spinner component template.
   * @return {TemplateResult} The component's template
   */
  render() {
    return html`
      <div role="status" aria-live="polite">
        <div class=${this._getWrapperClasses()}>
          <span class=${this._getSpinnerClasses()}></span>
          ${this._renderText()}
        </div>
      </div>
    `
  }
}
