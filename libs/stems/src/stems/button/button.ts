import * as React from 'react'
import { LitElement, html, css, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import '../icon/icon'

import styles from './stem.styles.scss'

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

  static get properties()  {
    return {
      lead: { type: String, reflect: true },
      trail: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      ariaPressed: { type: Boolean, reflect: true, attribute: 'aria-pressed' },
      ariaExpanded: { type: Boolean, reflect: true, attribute: 'aria-expanded' },
      ariaLabel: { type: String, reflect: true, attribute: 'aria-label' },
    }
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <button 
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
