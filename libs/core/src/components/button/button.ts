import { LitElement, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from 'utils/helpers'
import '../icon/icon'
import '../../primitives/ripple/ripple'
import { effectRipple } from '../../utils/ripple/ripple'
import styles from './style/button.styles.scss'

import { html } from 'utils/helpers/custom-element-scoping'

/**
 * @element gds-button
 * @summary A custom button element that can display a label, lead and trail icons, and a ripple effect on click.
 * @documentation https://seb.io/docs/component/button
 * @status beta
 * @since 1.0.0
 * 
 * @slot lead - An optional slot that allows a `gds-icon` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon` element to be placed after the label.
 * @slot label - A slot that allows text to be displayed as the button label.
 * @slot split - An optional slot that allows an icon to be placed in the middle of the button, splitting the label into two parts.
 * @slot circle - An optional slot that allows a `gds-icon` element to be placed in the center of the button, creating a circular button.
 *
 * @cssprop --gds-button-background-color - The background color of the button.
 * @cssprop --gds-button-color - The text color of the button.
 * @cssprop --gds-button-font-size - The font size of the button.
 * @cssprop --gds-button-height - The height of the button.
 * @cssprop --gds-button-width - The width of the button.
 *
 * @property {string} lead - The name of the lead icon to display.
 * @property {string} trail - The name of the trail icon to display.
 * @property {boolean} disabled - Whether the button is disabled.
 * @property {boolean} ariaPressed - Whether the button is pressed.
 * @property {boolean} ariaExpanded - Whether the button is expanded.
 * @property {string} ariaLabel - The label for the button, used for accessibility.
 * @property {string} variant - The variant of the button, which can include "split" or "circle".
 * @property {string} set - The set of icons to use for the lead and trail icons.
 * @property {string} size - The size of the button, which can be "small", "medium", or "large".
 * @property {string} effect - The type of ripple effect to use, which can be "center" or "full".
 *
 * @event click - Fired when the button is clicked, initiating the ripple effect.
 *
 * @example
 * <gds-button>Click me</gds-button>
 * <gds-button variant="split">Click me</gds-button>
 * <gds-button variant="circle">Click me</gds-button>
 */

@customElement('gds-button')
export class GdsButton extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String, reflect: true })
  lead = null

  @property({ type: String, reflect: true })
  trail = null

  @property({ type: Boolean, reflect: true })
  disabled = false

  @property({ type: Boolean, reflect: true, attribute: 'aria-pressed' })
  ariaPressed = null

  @property({ type: Boolean, reflect: true, attribute: 'aria-expanded' })
  ariaExpanded = null

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  ariaLabel = null

  @property({ type: String, reflect: true })
  variant = ''

  @property({ type: String, reflect: true })
  set = null

  @property({ type: String, reflect: true })
  size = null

  @property({ type: String, reflect: true })
  effect = null

  // Private members
  #internals: ElementInternals

  constructor() {
    super()
    this.#internals = this.attachInternals()
    constrainSlots(this)
  }

  connectedCallback() {
    super.connectedCallback()
  }

  slotLead() {
    return html`<slot name="lead" gds-allow="gds-icon"></slot>`
  }

  slotLabel() {
    return this.textContent
      ? html`<slot part="label" gds-allow="#text"></slot>`
      : ''
  }

  slotTrail() {
    return html`<slot name="trail" gds-allow="gds-icon"></slot>`
  }

  slotEffect() {
    return this.effect ? html`<gds-ripple></gds-ripple>` : ''
  }

  slotSplit() {
    if (!this.variant || !this.variant.includes('split')) { return ''}
    const slotElement = html`<slot name="split" gds-allow="gds-icon"></slot>`
    const rippleElement = this.effect ? html`<gds-ripple></gds-ripple>` : ''
    const buttonElement = html`
    <button 
      ?disabled="${this.disabled}"
      aria-label="${this.textContent}"
      ?aria-pressed="${this.ariaPressed}"
      ?aria-expanded="${this.ariaExpanded}"
      tabindex="0"
      @click="${effectRipple}"
    >
      ${slotElement}${rippleElement}
    </button>`
    return buttonElement
  }

  slotCircle() {
    return html`<slot name="circle" gds-allow="gds-icon"></slot>`
  }

  render() {
    if (this.variant.includes('circle')) { 
      const content = html`${this.slotCircle()}${this.slotEffect()}`
      return html`
      <button
        ?disabled="${this.disabled}"
        aria-label="${this.textContent}"
        ?aria-pressed="${this.ariaPressed}"
        ?aria-expanded="${this.ariaExpanded}"
        tabindex="0"
        @click="${effectRipple}"
      >${content}</button>`

    } else {
    const content = html`${this.slotLead()}${this.slotLabel()}${this.slotTrail()}${this.slotEffect()}`
    return html`
      <button
        ?disabled="${this.disabled}"
        aria-label="${this.textContent}"
        ?aria-pressed="${this.ariaPressed}"
        ?aria-expanded="${this.ariaExpanded}"
        tabindex="0"
        @click="${effectRipple}"
      >
        ${content}</button
      >${this.slotSplit()}
    `
    }
  }
}
