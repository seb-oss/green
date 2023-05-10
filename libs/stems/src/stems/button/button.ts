import * as React from 'react'
import { LitElement, html, unsafeCSS } from 'lit'
import { customElement} from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import type { PropertyValues } from 'lit';

import '../icon/icon'
import '../ripple/ripple'
import { effectRipple } from '../../tools/ripple/ripple'

import styles from './style/button.styles.scss'

const sets = [
  'positive',
  'negative',
]

const variants = [
  'primary',
  'secondary',
  'tertiary',
]

const sizes = [
  'small',
  'medium',
  'large',
]

@customElement('gds-button')
export class Button extends LitElement {

  static get styles() {
    return unsafeCSS(styles);
  }

  lead = null
  trail  = null
  disabled = false
  ariaPressed = null
  ariaExpanded = null
  ariaLabel = null
  variant = null
  set = null
  size = null
  effect = null

  static get properties()  {
    return {
      lead: { type: String, reflect: true },
      trail: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      ariaPressed: { type: Boolean, reflect: true, attribute: 'aria-pressed' },
      ariaExpanded: { type: Boolean, reflect: true, attribute: 'aria-expanded' },
      ariaLabel: { type: String, reflect: true, attribute: 'aria-label' },
      variant: { type: String, reflect: true },
      set: { type: String, reflect: true },
      size: { type: String, reflect: true },
      effect: { type: String, reflect: true },
    }
  }

  render() {

    const variantController = 
      variants.includes(this.variant || '') ?
       `variant-${this.variant}` : ''
    
    const setController = 
      sets.includes(this.set || '') ?
       `set-${this.set}` : ''

    const sizeController = 
      sizes.includes(this.size || '') ?
       `size-${this.size}` : ''
    
       console.log( variantController + setController + sizeController);
       
    return html`
      <button 
        ?disabled="${this.disabled}"
        aria-label="${this.textContent}"
        ?aria-pressed="${this.ariaPressed}"
        ?aria-expanded="${this.ariaExpanded}"
        tabindex="0"
        @click="${effectRipple}"
      >   
        ${this.lead ? html`<gds-icon name=${this.lead}></gds-icon>` : ''}
        <slot></slot>
        ${this.trail ? html`<gds-icon name=${this.trail}></gds-icon>` : ''}
        ${this.effect ? html`<gds-ripple></gds-ripple>` : ''}
      </button>`
  }
}

export const ButtonReact = createComponent({
  tagName: 'gds-button',
  elementClass: Button,
  react: React,
})


