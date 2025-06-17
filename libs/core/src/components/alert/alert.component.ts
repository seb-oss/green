import { localized, msg } from '@lit/localize'
import { nothing, PropertyValues } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { GdsButton } from '../button/button.component'
import { GdsCard } from '../card/card.component'

import '../icon/icons/circle-check.js'
import '../icon/icons/triangle-exclamation.js'
import '../icon/icons/circle-info.js'
import '../icon/icons/cross-small.js'
import '../button/index.js'

import { tokens } from '../../tokens.style'
import { alertStyles } from './alert.style'

// Type definitions
type AlertVariant =
  | 'information'
  | 'notice'
  | 'positive'
  | 'warning'
  | 'negative'
type AlertRole = 'alert' | 'status'
type DismissSource = 'timeout' | 'close' | 'escape'

// Constants
const VARIANT_CONFIG = {
  positive: { icon: 'circle-check', card: 'positive', label: 'Positive alert' },
  warning: {
    icon: 'triangle-exclamation',
    card: 'warning',
    label: 'Warning alert',
  },
  negative: {
    icon: 'triangle-exclamation',
    card: 'negative',
    label: 'Negative alert',
  },
  information: {
    icon: 'circle-info',
    card: 'information',
    label: 'Information alert',
  },
  notice: { icon: 'circle-info', card: 'notice', label: 'Notice alert' },
} as const

const FADE_DURATION = 300
const PROGRESS_INTERVAL = 100

/**
 * Alert component with responsive layout, optional icon, dismiss functionality,
 * auto-dismiss timer, and action button support.
 *
 * @slot - Alert message content
 * @fires close - Fired when alert is dismissed
 * @fires action - Fired when action button is clicked
 */
@gdsCustomElement('gds-alert', {
  dependsOn: [GdsButton, GdsCard],
})
@localized()
export class GdsAlert extends GdsElement {
  static styles = [tokens, alertStyles]

  @property({ type: String, reflect: true })
  variant: AlertVariant = 'information'

  @property({ type: String, reflect: true })
  role: AlertRole = 'alert'

  @property({ type: Boolean })
  dismissible = false

  @property({ type: Number, attribute: 'time-out' })
  timeOut = 0

  @property({ type: String, attribute: 'button-text' })
  buttonLabel = ''

  @state() private _progress = 100
  @state() private _isClosing = false
  @state() private _cardHidden = false

  @query('.close-btn') private _closeButton!: HTMLButtonElement
  @query('gds-button') private _actionButton!: HTMLElement

  private _timeoutId?: number
  private _progressIntervalId?: number
  private _alertRef: Ref<HTMLElement> = createRef()

  private _timerController = {
    hostConnected: () => {
      if (this.timeOut > 0) this._startTimer()
    },
    hostDisconnected: () => this._clearTimers(),
  }

  constructor() {
    super()
    this.addController(this._timerController)
  }

  protected updated(changed: PropertyValues) {
    if (changed.has('timeOut')) {
      this._clearTimers()
      if (this.timeOut > 0) this._startTimer()
    }
  }

  // Timer management
  private _startTimer() {
    const start = Date.now()
    this._progress = 100

    this._progressIntervalId = window.setInterval(() => {
      const elapsed = Date.now() - start
      this._progress = Math.max(
        0,
        ((this.timeOut - elapsed) / this.timeOut) * 100,
      )
    }, PROGRESS_INTERVAL)

    this._timeoutId = window.setTimeout(
      () => this._dismiss('timeout'),
      this.timeOut,
    )
  }

  private _clearTimers() {
    clearTimeout(this._timeoutId)
    clearInterval(this._progressIntervalId)
    this._timeoutId = this._progressIntervalId = undefined
  }

  private async _dismiss(source: DismissSource) {
    this._isClosing = true
    this._clearTimers()

    await this.updateComplete
    await new Promise((r) => setTimeout(r, FADE_DURATION))

    this.dispatchEvent(
      new CustomEvent('close', {
        detail: { source },
        bubbles: true,
        composed: true,
      }),
    )

    this._cardHidden = true
  }

  // Event handlers
  private _onButtonClick(e: Event) {
    this.dispatchEvent(
      new CustomEvent('action', {
        detail: { source: 'button', event: e },
        bubbles: true,
        composed: true,
      }),
    )
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.dismissible) {
      e.preventDefault()
      this._dismiss('escape')
    }
  }

  // Helpers
  private get _config() {
    return VARIANT_CONFIG[this.variant]
  }

  // Render methods
  private _renderIcon() {
    const icon = `gds-icon-${this._config.icon}`
    return html`${staticHtml`<${unsafeStatic(icon)} class="icon" solid aria-hidden="true" size="24px"></${unsafeStatic(icon)}>`}`
  }

  private _renderMessage() {
    return html`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`
  }

  private _renderActionButton(label: string) {
    return html`
      <gds-button
        class="action-button"
        variant="neutral"
        rank="primary"
        size="small"
        @click=${this._onButtonClick}
        aria-describedby="alert-message"
      >
        ${label.trim()}
      </gds-button>
    `
  }

  private _renderCloseButton() {
    return this.dismissible
      ? html`
          <div class="close-btn">
            <gds-button
              variant="neutral"
              rank="tertiary"
              size="small"
              aria-label=${msg('Dismiss alert')}
              @click=${() => this._dismiss('close')}
            >
              <gds-icon-cross-small size="20px"></gds-icon-cross-small>
            </gds-button>
          </div>
        `
      : nothing
  }

  private _renderTimerBar() {
    return this.timeOut > 0
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
        ${ref(this._alertRef)}
        role=${this.role}
        aria-label=${this._config.label}
        variant=${this._config.card}
        level="2"
        class=${classMap(classes)}
        @keydown=${this._handleKeyDown}
        id="alert-message"
        padding="m"
      >
        ${this._renderIcon()} ${this._renderMessage()}
        ${this.buttonLabel
          ? this._renderActionButton(this.buttonLabel)
          : nothing}
        ${this._renderCloseButton()} ${this._renderTimerBar()}
      </gds-card>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gds-alert': GdsAlert
  }
}
