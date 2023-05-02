import * as React from 'react'
import { LitElement, html, css, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import '../icon/icon'

import styles from './style/button.styles.scss'
import './style/button.tokens.css'

const sets = [
  'positive',
  'negative',
]

const variants = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'link',
]

const states = [
  'active',
  'focus',
  'hover',
  'visited',
  'disabled',
  'loading',
]

const sizes = [
  'small',
  'medium',
  'large',
]

@customElement('gds-button')
export class Button extends LitElement {
  static styles = css`
    // TODO: Figure out how to load scss here
  `
  
  lead = null
  trail  = null
  disabled = false
  ariaPressed = null
  ariaExpanded = null
  ariaLabel = null
  variant = null
  state = null
  set = null
  size = null

  static get properties()  {
    return {
      lead: { type: String, reflect: true },
      trail: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      ariaPressed: { type: Boolean, reflect: true, attribute: 'aria-pressed' },
      ariaExpanded: { type: Boolean, reflect: true, attribute: 'aria-expanded' },
      ariaLabel: { type: String, reflect: true, attribute: 'aria-label' },
      variant: { type: String, reflect: false, attribute: 'data-variant' },
      state: { type: String, reflect: false, attribute: 'data-state' },
      set: { type: String, reflect: false, attribute: 'data-set' },
      size: { type: String, reflect: false, attribute: 'data-size' },
    }
  }

  render() {

    const variantController = 
      variants.includes(this.variant || '') ?
       `gds-button gds-button--${this.variant}` : ''

    const stateController = 
      states.includes(this.state || '') ?
       `gds-button-state--${this.state}` : ''
    
    const setController = 
      sets.includes(this.set || '') ?
       `gds-button-set--${this.set}` : ''

    const sizeController = 
      sizes.includes(this.size || '') ?
       `gds-button-size--${this.size}` : ''
    
    return html`
      <style>
        ${styles}
      </style>
      <button 
        class=${`${variantController}${stateController}${setController}${sizeController}`}
        ?disabled="${this.disabled}"
        aria-label="${this.textContent}"
        ?aria-pressed="${this.ariaPressed}"
        ?aria-expanded="${this.ariaExpanded}"
        tabindex="0"
      >   
        ${this.lead ? html`<gds-icon name=${this.lead}></gds-icon>` : ''}
        <slot></slot>
        ${this.trail ? html`<gds-icon name=${this.trail}></gds-icon>` : ''}
      </button>
    `
  }

}

export const ButtonReact = createComponent({
  tagName: 'gds-button',
  elementClass: Button,
  react: React,
})
