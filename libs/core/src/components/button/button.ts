import * as React from 'react'
import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'

import { randomId, constrainSlots } from 'utils/helpers'
import { watch, observeLightDOM } from 'utils/decorators'

import '../icon/icon'
import '../../primitives/ripple/ripple'
import { effectRipple } from '../../utils/ripple/ripple'

import styles from './style/button.styles.scss'

@customElement('gds-button')
export class GdsButton extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  // @property({ type: String, reflect: true }) 
  // lead = null;
  
  // @property({ type: String, reflect: true }) 
  // trail = null;
  
  @property({ type: Boolean, reflect: true }) 
  disabled = false;
  
  @property({ type: Boolean, reflect: true, attribute: 'aria-pressed' }) 
  ariaPressed = null;
  
  @property({ type: Boolean, reflect: true, attribute: 'aria-expanded' }) 
  ariaExpanded = null;
  
  @property({ type: String, reflect: true, attribute: 'aria-label' }) 
  ariaLabel = null;
  
  @property({ type: String, reflect: true }) 
  variant = null;
  
  @property({ type: String, reflect: true }) 
  set = null;
  
  @property({ type: String, reflect: true }) 
  size = null;
  
  @property({ type: String, reflect: true }) 
  effect = null;

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

  render() {
    return html` <button
      ?disabled="${this.disabled}"
      aria-label="${this.textContent}"
      ?aria-pressed="${this.ariaPressed}"
      ?aria-expanded="${this.ariaExpanded}"
      tabindex="0"
      @click="${effectRipple}"
    >
      <slot name="lead" gds-allow="gds-icon"></slot>
      <span><slot></slot></span>
      <slot name="trail" gds-allow="gds-icon"></slot>
      ${this.effect ? html`<gds-ripple></gds-ripple>` : ''}
    </button>`
  }
}

export const ButtonReact = createComponent({
  tagName: 'gds-button',
  elementClass: GdsButton,
  react: React,
})

// ${this.lead ? html`<gds-icon name=${this.lead}></gds-icon>` : ''}
// ${this.trail ? html`<gds-icon name=${this.trail}></gds-icon>` : ''}
// ${this.lead ? html`<slot name="lead"><gds-icon name="${this.lead}"></gds-icon></slot>`: ''}
// ${this.trail ? html`<slot name="trail"><gds-icon name="${this.trail}"></gds-icon></slot>`: ''}