import { LitElement, nothing, PropertyValues } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { live } from 'lit/directives/live.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js'

import { html } from '../../utils/helpers/custom-element-scoping'

import '../icon/icons/checkmark.js'
import '../icon/icons/triangle-exclamation.js'
import '../icon/icons/circle-info.js'
import '../icon/icons/cross-small.js'
import '../button/index.js'

import { tokens } from '../../tokens.style'
import { alertStyles } from './alert.style'

/**
 * Alert component with responsive layout, optional icon, dismiss functionality,
 * auto-dismiss timer, and action button support.
 *
 * @slot - Alert message content
 * @fires close - Fired when alert is dismissed
 * @fires action - Fired when action button is clicked
 */
@customElement('gds-alert')
export class GdsAlert extends LitElement {
  static styles = [tokens, alertStyles]

  @property({ type: String, reflect: true })
  type: 'info' | 'success' | 'warning' | 'error' = 'info'

  @property({ type: Boolean, attribute: 'show-icon' })
  showIcon = true

  @property({ type: Boolean })
  dismissible = false

  @property({ type: Number, attribute: 'time-out' })
  timeOut = 0 // milliseconds, 0 = no auto-dismiss

  @property({ type: String, attribute: 'button-text' })
  buttonText = '' // empty = no button

  @state() private _progress = 100
  @state() private _isClosing = false

  @query('.close-btn') private _closeButton!: HTMLButtonElement
  @query('gds-button') private _actionButton!: HTMLElement

  private _timeoutId?: number
  private _progressIntervalId?: number
  private _alertRef: Ref<HTMLElement> = createRef()

  // Reactive controller pattern for timer management
  private _timerController = {
    hostConnected: () => {
      if (this.timeOut > 0) this._startTimer()
    },
    hostDisconnected: () => {
      this._clearTimers()
    },
  }

  constructor() {
    super()
    this.addController(this._timerController)
  }

  protected firstUpdated() {
    // Announce alert to screen readers when it appears
    this._announceAlert()
  }

  protected updated(changed: PropertyValues) {
    if (changed.has('timeOut')) {
      this._clearTimers()
      if (this.timeOut > 0) this._startTimer()
    }

    // Re-announce if type changes
    if (changed.has('type') && changed.get('type') !== undefined) {
      this._announceAlert()
    }
  }

  private _announceAlert() {
    // Use live region announcement
    const alert = this._alertRef.value
    if (alert) {
      // Force re-announcement by toggling aria-live
      alert.removeAttribute('aria-live')
      requestAnimationFrame(() => {
        alert.setAttribute('aria-live', 'polite')
      })
    }
  }

  private _startTimer() {
    const start = Date.now()
    this._progress = 100

    this._progressIntervalId = window.setInterval(() => {
      this._progress = Math.max(
        0,
        ((start + this.timeOut - Date.now()) / this.timeOut) * 100,
      )
    }, 100)

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

  private async _dismiss(source: 'timeout' | 'close' | 'escape') {
    this._isClosing = true
    this._clearTimers()

    // Wait for fade animation
    await this.updateComplete
    await new Promise((resolve) => setTimeout(resolve, 300))

    this.dispatchEvent(
      new CustomEvent('close', {
        detail: { source },
        bubbles: true,
        composed: true,
      }),
    )

    this.remove()
  }

  private _onButtonClick(e: Event) {
    this.dispatchEvent(
      new CustomEvent('action', {
        detail: { source: 'button', event: e },
        bubbles: true,
        composed: true,
      }),
    )
  }

  // Keyboard handling
  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.dismissible) {
      e.preventDefault()
      this._dismiss('escape')
    }
  }

  private _getAriaLabel() {
    const labels = {
      info: 'Information alert',
      success: 'Success alert',
      warning: 'Warning alert',
      error: 'Error alert',
    }
    return labels[this.type]
  }

  private _renderIcon() {
    if (!this.showIcon) return nothing

    const icons = {
      success: 'checkmark',
      warning: 'triangle-exclamation',
      error: 'triangle-exclamation',
      info: 'circle-info',
    }
    const icon = `gds-icon-${icons[this.type] || icons.info}`

    // Add appropriate label for screen readers
    const iconLabels = {
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      info: 'Information',
    }

    return html`<span
      class="icon"
      role="img"
      aria-label=${iconLabels[this.type]}
    >
      ${staticHtml`<${unsafeStatic(icon)} aria-hidden="true"></${unsafeStatic(icon)}>`}
    </span>`
  }

  private _renderMessage() {
    const hasButton = !!this.buttonText

    return html`<div class="message" role="status">
      <span class="message-text">
        <slot @slotchange=${this._announceAlert}></slot>
      </span>
      ${hasButton
        ? html`
            <gds-button
              variant="neutral"
              rank="primary"
              size="small"
              @click=${this._onButtonClick}
              aria-describedby="alert-message"
            >
              ${this.buttonText}
            </gds-button>
          `
        : nothing}
    </div>`
  }

  private _renderCloseButton() {
    return this.dismissible
      ? html`<button
          class="close-btn"
          @click=${() => this._dismiss('close')}
          aria-label="Dismiss alert"
          type="button"
        >
          <gds-icon-cross-small
            size="l"
            aria-hidden="true"
          ></gds-icon-cross-small>
        </button>`
      : nothing
  }

  private _renderTimerBar() {
    return this.timeOut > 0
      ? html`<div
          class="timer-bar"
          role="timer"
          aria-label="Auto-dismiss timer"
          aria-valuenow=${this._progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="timer-progress" style="width: ${this._progress}%"></div>
        </div>`
      : nothing
  }

  private _getCardVariant() {
    const variants = {
      success: 'positive',
      warning: 'warning',
      error: 'negative',
      info: 'information',
    }
    return variants[this.type]
  }

  render() {
    const classes = {
      dismissing: this._isClosing,
      dismissible: this.dismissible,
    }

    return html`
      <gds-card
        ${ref(this._alertRef)}
        role="alert"
        aria-label=${this._getAriaLabel()}
        aria-live="polite"
        aria-atomic="true"
        variant=${this._getCardVariant()}
        level="2"
        class=${classMap(classes)}
        @keydown=${this._handleKeyDown}
        id="alert-message"
      >
        ${this._renderIcon()} ${this._renderMessage()}
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
