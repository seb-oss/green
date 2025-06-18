import { localized, msg } from '@lit/localize'
import { nothing, PropertyValues } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { GdsButton } from '../button/button.component'
import { GdsCard } from '../card/card.component'
import { IconCircleCheck } from '../icon/icons/circle-check.component'
import { IconCircleInfo } from '../icon/icons/circle-info.component'
import { IconCrossSmall } from '../icon/icons/cross-small.component'
import { IconTriangleExclamation } from '../icon/icons/triangle-exclamation.component'
import { alertStyles } from './alert.style'

// Type definitions
type DismissSource = 'timeout' | 'close' | 'escape'

// Constants
const VARIANT_CONFIG = {
  positive: { icon: 'circle-check', card: 'positive' },
  warning: {
    icon: 'triangle-exclamation',
    card: 'warning',
  },
  negative: {
    icon: 'triangle-exclamation',
    card: 'negative',
  },
  information: {
    icon: 'circle-info',
    card: 'information',
  },
  notice: { icon: 'circle-info', card: 'notice' },
} as const

const FADE_DURATION = 300
const PROGRESS_INTERVAL = 100

/**
 * @element gds-alert
 *
 * Alert component with responsive layout, optional icon, dismiss functionality,
 * auto-dismiss timer, and action button support.
 * @status beta
 *
 * @slot - Alert message content
 * @fires gds-close - Fired when alert is dismissed
 * @fires gds-action - Fired when action button is clicked
 */
@gdsCustomElement('gds-alert', {
  dependsOn: [
    GdsButton,
    GdsCard,
    IconCircleCheck,
    IconTriangleExclamation,
    IconCircleInfo,
    IconCrossSmall,
  ],
})
@localized()
export class GdsAlert extends GdsElement {
  static styles = [tokens, alertStyles]

  /**
   * The variant of the alert, which determines its appearance and icon.
   */
  @property({ type: String, reflect: true })
  variant: 'information' | 'notice' | 'positive' | 'warning' | 'negative' =
    'information'

  /**
   * The label for the alert, used for accessibility purposes.
   * This needs be set to something relevant to the content of the alert.
   */
  @property({ type: String })
  label = ''

  /**
   * The role of the alert, which can be 'alert' or 'status'.
   * 'alert' is used for critical messages that require immediate attention,
   * while 'status' is for informational messages. These corresponds to the
   * ARIA roles, which you can read more about on MDN:
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role
   */
  @property({ type: String, reflect: true })
  role: 'alert' | 'status' = 'alert'

  /**
   * The dismissibility of the alert, which determines whether it can be closed by the user.
   */
  @property({ type: Boolean })
  dismissible = false

  /**
   * The time in milliseconds after which the alert will automatically dismiss itself.
   * Set to 0 to disable auto-dismiss.
   */
  @property({ type: Number })
  timeout = 0

  /**
   * The text for the action button, if provided.
   * If not set, no action button will be rendered.
   */
  @property({ type: String, attribute: 'button-label' })
  buttonLabel = ''

  @state() private _progress = 100
  @state() private _isClosing = false
  @state() private _cardHidden = false

  #timeoutId?: number
  #progressIntervalId?: number
  #alertRef: Ref<HTMLElement> = createRef()

  #timerController = {
    hostConnected: () => {
      if (this.timeout > 0) this.#startTimer()
    },
    hostDisconnected: () => this.#clearTimers(),
  }

  constructor() {
    super()
    this.addController(this.#timerController)
  }

  protected updated(changed: PropertyValues) {
    if (changed.has('timeout')) {
      this.#clearTimers()
      if (this.timeout > 0) this.#startTimer()
    }
  }

  // Timer management
  #startTimer() {
    const start = Date.now()
    this._progress = 100

    this.#progressIntervalId = window.setInterval(() => {
      const elapsed = Date.now() - start
      this._progress = Math.max(
        0,
        ((this.timeout - elapsed) / this.timeout) * 100,
      )
    }, PROGRESS_INTERVAL)

    this.#timeoutId = window.setTimeout(
      () => this.#dismiss('timeout'),
      this.timeout,
    )
  }

  #clearTimers() {
    clearTimeout(this.#timeoutId)
    clearInterval(this.#progressIntervalId)
    this.#timeoutId = this.#progressIntervalId = undefined
  }

  async #dismiss(source: DismissSource) {
    this._isClosing = true
    this.#clearTimers()
    await this.updateComplete

    this.dispatchCustomEvent('gds-close', {
      detail: { source },
      bubbles: true,
      composed: true,
    })

    await new Promise((r) => setTimeout(r, FADE_DURATION))
    this._cardHidden = true
  }

  // Event handlers
  #handleButtonClick(e: Event) {
    this.dispatchCustomEvent('gds-action', {
      detail: { source: 'button', event: e },
      bubbles: true,
      composed: true,
    })
  }

  #handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.dismissible) {
      e.preventDefault()
      this.#dismiss('escape')
    }
  }

  // Helpers
  get #config() {
    return VARIANT_CONFIG[this.variant]
  }

  // Render methods
  #renderIcon() {
    const icon = `gds-icon-${this.#config.icon}`
    return html`${staticHtml`<${unsafeStatic(icon)} class="icon" solid aria-hidden="true" size="24px"></${unsafeStatic(icon)}>`}`
  }

  #renderMessage() {
    return html`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`
  }

  #renderActionButton(label: string) {
    return html`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${this.#handleButtonClick}
        aria-describedby="alert-message"
      >
        ${label.trim()}
      </gds-button>
    `
  }

  #renderCloseButton() {
    return this.dismissible
      ? html`
          <gds-button
            class="close-btn"
            variant="neutral"
            rank="tertiary"
            size="small"
            aria-label=${msg('Dismiss alert')}
            @click=${() => this.#dismiss('close')}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `
      : nothing
  }

  #renderTimerBar() {
    return this.timeout > 0
      ? html`
          <div
            class="timer-bar"
            role="timer"
            aria-label=${msg('Auto-dismiss timer')}
            aria-valuenow=${this._progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${this._progress}%"></div>
          </div>
        `
      : nothing
  }

  render() {
    if (this._cardHidden) return nothing

    const classes = {
      dismissing: this._isClosing,
      dismissible: this.dismissible,
    }

    return html`
      <gds-card
        ${ref(this.#alertRef)}
        role=${this.role}
        aria-label=${this.label}
        variant=${this.#config.card}
        class=${classMap(classes)}
        @keydown=${this.#handleKeyDown}
        id="alert-message"
        padding="m"
      >
        ${this.#renderIcon()} ${this.#renderMessage()}
        ${this.buttonLabel
          ? this.#renderActionButton(this.buttonLabel)
          : nothing}
        ${this.#renderCloseButton()} ${this.#renderTimerBar()}
      </gds-card>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gds-alert': GdsAlert
  }
}
