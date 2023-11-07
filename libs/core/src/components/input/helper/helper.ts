import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from '../../../utils/helpers'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './style/helper.styles.css'
import '../../icon/icon'
import '../../badge/badge'
import '../../button/button'
import '../../tooltip/tooltip'

/**
 * A custom input element that can be used in forms.
 * @element gds-input-helper
 * @slot label - The label or summary text.
 * @slot icon - The slot for the helper information icon.
 * @slot badge - The slot for the badge after icon.
 * @slot content - The slot for the content.
 */
@customElement('gds-input-helper')
export class GdsInputHelper extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  #internals: ElementInternals

  constructor() {
    super()
    this.#internals = this.attachInternals()
    constrainSlots(this)
  }

  connectedCallback() {
    super.connectedCallback()
  }

  /**
   * Whether the content is visible or not.
   * @type {boolean}
   * @reflect
   * @attribute content-visible
   */
  @property({ type: Boolean, reflect: true, attribute: 'content-visible' })
  isContentVisible = false

  /**
   * The tooltip text.
   * @type {string}
   * @reflect
   * @attribute tooltip
   */
  @property({ type: String, reflect: true, attribute: 'tooltip' })
  helperTooltip = null

  /**
   * The label text.
   * @type {string}
   * @reflect
   * @attribute label
   */
  @property({ type: String, reflect: true, attribute: 'label' })
  helperLabel = null

  /**
   * Toggles the visibility of the content.
   */
  toggleContent() {
    this.isContentVisible = !this.isContentVisible
  }

  /**
   * Returns the icon slot.
   * @returns {TemplateResult} The icon slot.
   */
  slotIcon() {
    const trailSlotContent = this.querySelector('[slot="action"]')
    const slottedIcon = trailSlotContent?.querySelector(
      '[slot="action"] gds-icon'
    )

    if (slottedIcon) {
      if (this.isContentVisible) {
        slottedIcon.setAttribute('name', 'x')
      } else {
        slottedIcon.setAttribute('name', 'info')
      }
    }

    return this.helperTooltip == null
      ? html`
          <slot
            name="action"
            @click=${this.toggleContent}
            gds-allow="gds-button"
          ></slot>
        `
      : html`
          <gds-tooltip content="${this.helperTooltip}" position="up">
            <slot
              name="action"
              @click=${this.toggleContent}
              gds-allow="gds-button"
            ></slot>
          </gds-tooltip>
        `
  }

  /**
   * Returns the badge slot.
   * @returns {TemplateResult} The badge slot.
   */
  slotBadge() {
    return html` <slot name="badge" gds-allow="gds-badge"></slot> `
  }

  /**
   * Returns the content slot.
   * @returns {TemplateResult} The content slot.
   */
  slotContent() {
    const slotContentNotEmpty =
      this.textContent?.trim() &&
      this.isContentVisible &&
      this.textContent?.trim() !== ' '

    return slotContentNotEmpty
      ? html`
          <div class="gds-input-helper-content">
            <slot part="content" gds-allow="#text"></slot>
          </div>
        `
      : null
  }

  render() {
    const getSlotContent = this.slotContent()
    const hasContent =
      this.textContent?.trim() && this.textContent?.trim() !== ' '
    const hasBadge = this.querySelector('[slot="badge"]') !== null
    const hasAction = this.querySelector('[slot="action"]') !== null
    const hasTooltip = this.helperTooltip !== null
    const hasLabel = this.helperLabel !== null

    return html`
      <div class="gds-input-helper">
        <div class="gds-input-helper-header">
          <!-- ${when(
            hasLabel,
            () => html`
              <span
                class="gds-input-helper-title ${hasContent
                  ? 'gds-input-helper-action'
                  : ''}"
                @click=${this.toggleContent}
              >
                ${this.helperLabel}
              </span>
            `
          )} -->
          ${when(
            hasLabel,
            () => html`
              ${hasContent
                ? html`
                    <button
                      class="gds-input-helper-title gds-input-helper-action"
                      @click=${this.toggleContent}
                    >
                      ${this.helperLabel}
                    </button>
                  `
                : html`
                    <span class="gds-input-helper-title">
                      ${this.helperLabel}
                    </span>
                  `}
            `
          )}
          <div class="gds-input-helper-options">
            ${when(hasBadge, () => this.slotBadge())}
            ${when(hasAction, () => this.slotIcon())}
            ${when(
              !hasAction && !hasTooltip && hasContent,
              () => html`
                <gds-button
                  variant="circle tertiary"
                  effect="ripple"
                  size="small"
                  slot="action"
                  @click=${this.toggleContent}
                >
                  <gds-icon name="info" slot="circle" />
                </gds-button>
              `
            )}
            ${when(
              !hasAction && hasContent && hasTooltip,
              () => html`
                <gds-tooltip content="${this.helperTooltip}" position="up">
                  <gds-button
                    variant="circle tertiary"
                    effect="ripple"
                    size="small"
                    slot=""
                    @click=${this.toggleContent}
                  >
                    <gds-icon name="info" slot="circle" />
                  </gds-button>
                </gds-tooltip>
              `
            )}
          </div>
        </div>
        ${ifDefined(getSlotContent)}
      </div>
    `
  }
}
