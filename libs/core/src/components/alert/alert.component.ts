import { localized, msg } from '@lit/localize'
import { nothing, PropertyValues } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, getScopedTagName, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { GdsButton } from '../button/button.component'
import { GdsCard } from '../card/card.component'
import { IconCircleCheck } from '../icon/icons/circle-check.component'
import { IconCircleInfo } from '../icon/icons/circle-info.component'
import { IconCrossSmall } from '../icon/icons/cross-small.component'
import { IconTriangleExclamation } from '../icon/icons/triangle-exclamation.component'
import AlertStyles from './alert.styles'

// Type definitions
type DismissSource = 'timeout' | 'close' | 'escape'

// Constants
const VARIANT_CONFIG = {
  positive: { icon: 'circle-check', card: 'positive' },
  warning: {
    icon: 'circle-info',
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
 * @status beta
 *
 * Alert component with responsive layout, optional icon, dismiss functionality,
 * auto-dismiss timer, and action button support.
 *
 * @slot - Alert message content
 * @event gds-close - Fired when alert is dismissed
 * @event gds-action - Fired when action button is clicked
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
  static styles = [tokens, AlertStyles]

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

  #observer?: IntersectionObserver
  #isVisible = false
  #remaining = 0
  #lastTick = 0

  #timerController = {
    hostConnected: () => {
      if (this.timeout > 0) {
        this.#setupObserver()
      }
    },
    hostDisconnected: () => {
      this.#disconnectObserver()
      this.#clearTimers()
    },
  }

  constructor() {
    super()
    this.addController(this.#timerController)
  }

  protected updated(changed: PropertyValues) {
    if (changed.has('timeout')) {
      this.#disconnectObserver()
      this.#clearTimers()
      // Reset remaining when timeout changes
      this.#remaining = Math.max(0, this.timeout)
      this._progress = 100
      if (this.timeout > 0) this.#setupObserver()
    }
  }

  #setupObserver() {
    if (this.#observer) return
    if (!this.#remaining) this.#remaining = Math.max(0, this.timeout)

    this.#observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const ratio = entry?.intersectionRatio ?? 0
        const nowVisible = ratio >= 0.1
        if (nowVisible && !this.#isVisible) {
          this.#isVisible = true
          this.#resumeTimer()
        } else if (!nowVisible && this.#isVisible) {
          this.#isVisible = false
          this.#pauseTimer()
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 1],
      },
    )

    this.#observer.observe(this)
  }

  #disconnectObserver() {
    if (this.#observer) {
      this.#observer.disconnect()
      this.#observer = undefined
    }
    this.#isVisible = false
  }

  // Timer management (pausable)
  #startTicking() {
    this.#lastTick = Date.now()
    this.#progressIntervalId = window.setInterval(() => {
      const now = Date.now()
      const dt = now - this.#lastTick
      this.#lastTick = now
      this.#remaining = Math.max(0, this.#remaining - dt)
      this._progress =
        this.timeout > 0
          ? Math.max(0, (this.#remaining / this.timeout) * 100)
          : 0

      if (this.#remaining <= 0) {
        this.#dismiss('timeout')
      }
    }, PROGRESS_INTERVAL)
  }

  #resumeTimer() {
    if (this.#remaining <= 0 || this.#timeoutId || this.#progressIntervalId)
      return
    this.#startTicking()
  }

  #pauseTimer() {
    this.#clearTimers()
  }

  #clearTimers() {
    clearTimeout(this.#timeoutId)
    clearInterval(this.#progressIntervalId)
    this.#timeoutId = this.#progressIntervalId = undefined
  }

  async #dismiss(source: DismissSource) {
    this._isClosing = true
    this.#disconnectObserver()
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
    return html`${staticHtml`<${unsafeStatic(getScopedTagName(icon))} class="icon" solid aria-hidden="true" size="24px"></${unsafeStatic(getScopedTagName(icon))}>`}`
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
        class="action"
        .variant=${this.variant}
        rank="secondary"
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
            class="close"
            .variant=${this.variant}
            rank="secondary"
            size="small"
            aria-label=${msg('Dismiss alert')}
            @click=${() => this.#dismiss('close')}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `
      : nothing
  }

  #renderProgressBar() {
    return this.timeout > 0
      ? html`
          <div
            class=${classMap({
              'progress-container': true,
              [this.variant]: true,
            })}
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
      'has-action': this.buttonLabel,
      timeout: this.timeout > 0,
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
        <div class="wrapper">
          ${this.#renderIcon()} ${this.#renderMessage()}
        </div>
        ${!this.timeout && this.buttonLabel
          ? this.#renderActionButton(this.buttonLabel)
          : nothing}
        ${this.#renderCloseButton()} ${this.#renderProgressBar()}
      </gds-card>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gds-alert': GdsAlert
  }
}
