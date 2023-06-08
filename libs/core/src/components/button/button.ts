import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from 'utils/helpers'
import '../icon/icon'
import '../../primitives/ripple/ripple'
import { effectRipple } from '../../utils/ripple/ripple'
import styles from './style/button.styles.scss'

/**
 * @element gds-button
 * A button consist of lead and trail icon, the label and ripple effect on click event.
 *
 * @status beta
 *
 * @slot lead - This slot is optional and allows gds-icon.
 * @slot trail - This slot is optional and allows gds-icon.
 * @slot label - Allows test
 * @slot split - Allows icon and changes the button structure
 * @event click - Fired will initiate the ripple effect.
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
    if (!this.variant || !this.variant.includes('split')) {
      return ''
    }
    const slotElement = html`<slot name="split" gds-allow="gds-icon"></slot>`
    const rippleElement = this.effect ? html`<gds-ripple></gds-ripple>` : ''
    const buttonElement = html`<button @click="${effectRipple}">
      ${slotElement}${rippleElement}
    </button>`
    return buttonElement
  }

  render() {
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
