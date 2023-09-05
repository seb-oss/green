import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './style/input.styles.scss'
import '../icon/icon'
import '../badge/badge'

/**
 * @element gds-input
 *
 * @status beta
 */

@customElement('gds-input')
export class GdsInput extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String, reflect: true })
  lead = null

  @property({ type: String, reflect: true })
  trail = null

  /** Placeholder text to show as a hint when the input is empty. */
  @property() placeholder = '';
  
  slotLabel() {
    return this.textContent
      ? html`<slot part="label" gds-allow="#text"></slot>`
      : ''
  }

  slotLead() {
      return html`
        <div class="gds-input-core-lead">
          <slot name="lead" gds-allow="gds-icon"></slot>
        </div>
      `;
  }

  slotTrail() {
    return html`
      <div class="gds-input-core-trail">
        <!-- This should be a button and hold -->
        <slot name="trail" gds-allow="gds-icon"></slot>
      </div>
    `;
  }

  slotBase() {
    return html`  
      <div class="gds-input-core-base">
        <label for="input">${this.placeholder}</label>
        <input type="text" id="input" placeholder=" " minlength="3" pattern="[a-z]+" required/>
      </div>
      `
  }

  slotBadge() {
    return html`
      <div class="gds-input-badge">
        <slot name="badge" gds-allow="gds-badge"></slot>
      </div>
    `;
  }

  render() { 
    const hasLeadSlot = this.querySelector('[slot="lead"]') !== null;
    const hasTrailSlot = this.querySelector('[slot="trail"]') !== null;
    const hasBadgeSlot = this.querySelector('[slot="badge"]') !== null;
    const content = html`${when( hasLeadSlot, () => this.slotLead())}${this.slotBase()}${when( hasBadgeSlot, () => this.slotBadge())}${when( hasTrailSlot, () => this.slotTrail())}`

    return html`
      <div class="gds-input">
        <div class="gds-input-core">
          ${content}
        </div>
        <slot name="helper" gds-allow="gds-input-helper"></slot>
      </div>
  ` }
}
