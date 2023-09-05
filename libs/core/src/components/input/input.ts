import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './style/input.styles.scss'
import '../icon/icon'

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
        <slot name="trail" gds-allow="gds-icon"></slot>
      </div>
    `;
  }

  slotBase() {
    return html`  
      <div class="gds-input-core-base" data-badge=${this.badgeCore}>
        <label for="input">${this.placeholder}</label>
        <input type="text" id="input" placeholder=" " minlength="3" pattern="[a-z]+" required/>
      </div>
      `
  }

  slotHelp() {
    return html`
    <div class="gds-input-help">
      <span class="gds-input-help-text">${this.slotLabel()}</span>
      <div class="gds-input-help-icon" data-badge="120" tooltip="Tooltip content">
        <slot name="help" gds-allow="gds-icon"></slot>
        <!-- <gds-icon name="info"></gds-icon> -->
        On hover should show tooltip content
      </div>
      </div>
      <details>
        <summary>Hello there</summary>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </details>
    `
  }

  @property({ type: String, reflect: true, attribute: 'data-badge' })
  badgeCore = 'SEK'
 
  // @property({ type: String, reflect: true, attribute: 'data-help' })
  // helpText = 'Supports text and 20ch max'
  
  render() { 
    const hasLeadSlot = this.querySelector('[slot="lead"]') !== null;
    const hasTrailSlot = this.querySelector('[slot="trail"]') !== null;
    const hasHelpSlot = this.querySelector('[slot="help"]') !== null;
    const content = html`${when( hasLeadSlot, () => this.slotLead())}${this.slotBase()}${when( hasTrailSlot, () => this.slotTrail())}`
    const help = html`${when( hasHelpSlot, () => this.slotHelp())}`

    return html`
    <div class="gds-input">
      <div class="gds-input-core">
        ${content}
      </div>
      <slot name="helper" gds-allow="gds-input-helper"></slot>
        <!-- ${help} -->
    </div>
  ` }
}
