import * as React from 'react'
import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property, state, query } from 'lit/decorators.js'
import { ifDefined } from 'lit-html/directives/if-defined';

import { createComponent } from '@lit-labs/react'

import { randomId, constrainSlots } from 'utils/helpers'
import { watch, observeLightDOM } from 'utils/decorators'

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
  lead = null;
  
  @property({ type: String, reflect: true }) 
  trail = null;
  
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
      ${this.textContent ? html`<slot part="label" gds-allow="#text"></slot>` : ''}
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
