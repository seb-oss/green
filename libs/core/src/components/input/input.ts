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

  @property({ type: String, reflect: true, attribute: "label" })
  label = "Label"
  
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
        <!-- This should be a button -->
        <slot name="trail" gds-allow="gds-icon"></slot>
      </div>
    `;
  }

  slotBase() {
    return html`  
      <div class="gds-input-core-base">
        <label for="input">${this.label}</label>
        <input id="input" placeholder=" " />
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
  
  private inputElement: HTMLInputElement | null = null;
  private exludeAttr = ['placeholder', 'id', 'label'];

  private reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }
  }

  update(changedProperties: Map<PropertyKey, unknown>) {
    super.update(changedProperties);
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById('input') as HTMLInputElement;
    }
    this.reflectAttributesToInput();
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
