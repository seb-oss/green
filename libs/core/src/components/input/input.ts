import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
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
      <div class="gds-input-core-base" data-badge="SEK">
        <label for="input">${this.slotLabel()}</label>
        <input type="text" id="input" placeholder=" " minlength="3" pattern="[a-z]+" required/>
      </div>
      `
  }

  // @property({ type: String, reflect: true, attribute: 'label' })
  // label = 'Label'
  
  render() { 
    const hasLeadSlot = this.querySelector('[slot="lead"]') !== null;
    const hasTrailSlot = this.querySelector('[slot="trail"]') !== null;
    const content = html`${when( hasLeadSlot, () => this.slotLead())}${this.slotBase()}${when( hasTrailSlot, () => this.slotTrail())}`

    return html`
    <div class="gds-input">
      <div class="gds-input-core">
        ${content}
      </div>
      <div class="gds-input-help">
        <span class="gds-input-help-text">Only lowercase, min-length 3 characters</span>
        <div class="gds-input-help-icon" data-badge="120">
          <gds-icon name="info"></gds-icon>
        </div>
      </div>
    </div>
  ` }
}
