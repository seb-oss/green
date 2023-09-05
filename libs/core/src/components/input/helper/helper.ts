import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './style/helper.styles.scss'
import '../../icon/icon'

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

  slotContent() {
    return this.textContent
    ? html`<slot part="content" gds-allow="#text"></slot>`
    : ''
  }

  // This should be a component on its own or a primitive badge
  @property({ type: String, reflect: true, attribute: 'data-badge' })
  badgeHelper = '120'
 
  @property({ type: String, reflect: true, attribute: 'data-tooltip' })
  helperTooltip = null

  render() { 
    const hasIconSlot = this.querySelector('[slot="action"]') !== null;
    const hasContentSlot = this.querySelector('[slot="action"]') !== null;
    const IconSlot = html`${when( hasIconSlot, () => this.slotIcon())}`
    const ContentSlot = html`${when( hasContentSlot, () => this.slotContent())}`

    return html`
      <div class="gds-input-helper">
        <div class="gds-input-helper-header">
          <span class="gds-input-helper-title">Some text</span>
          <button 
            class="gds-input-helper-action" 
            data-badge=${this.badgeHelper} 
            data-tooltip=${ifDefined(this.helperTooltip)}>
               ${IconSlot}
          </button>
        </div>
        ${ContentSlot}
      </div>
  ` }
}
