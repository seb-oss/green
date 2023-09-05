import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './style/helper.styles.scss'
import '../../icon/icon'
import '../../badge/badge'

/**
 * @element gds-input-helper
 *
 * @status beta
 */

// TODO
// - [ ] Add a badge component
// - [ ] Add a tooltip component
// - [ ] Add a button component
// - [ ] If it has tooltip disable content slot and visceversa


@customElement('gds-input-helper')
export class GdsInputHelper extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  slotIcon() {
    return html`
        <slot name="action" gds-allow="gds-icon"></slot>
    `;
  }

  slotBadge() {
    return html`
        <slot name="badge" gds-allow="gds-badge"></slot>
    `;
  }

  slotContent() {
    return this.textContent
    ? html`<slot part="content" gds-allow="#text"></slot>`
    : ''
  }

  
  @property({ type: String, reflect: true, attribute: 'data-tooltip' })
  helperTooltip = null

  render() { 
    const hasIconSlot = this.querySelector('[slot="action"]') !== null;
    const hasContentSlot = this.querySelector('[slot="action"]') !== null;
    const hasBadgeSlot = this.querySelector('[slot="badge"]') !== null;
    const IconSlot = html`${when( hasIconSlot, () => this.slotIcon())}`
    const ContentSlot = html`${when( hasContentSlot, () => this.slotContent())}`

    return html`
      <div class="gds-input-helper">
        <div class="gds-input-helper-header">
          <span class="gds-input-helper-title">Some text</span>
          <div class="gds-input-helper-options">
            <button 
              class="gds-input-helper-option" 
              data-tooltip=${ifDefined(this.helperTooltip)}>
              ${IconSlot}
            </button>
            ${when( hasBadgeSlot, () => this.slotBadge())}
          </div>
        </div>
        ${ContentSlot}
      </div>
  ` }
}
