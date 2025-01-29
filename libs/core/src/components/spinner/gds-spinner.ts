import { property } from 'lit/decorators.js'
import { nothing } from 'lit/html.js'
import { when } from 'lit/directives/when.js'

import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { styles } from './spinner.styles'

/**
 * @summary A spinner component that indicates loading state.
 * @status beta
 *
 * @element gds-spinner
 *
 * @csspart spinner - The spinner element itself
 * @csspart label - The label element when present
 *
 * @cssproperty --gds-ref-pallet-base400 - Color for the spinner track
 * @cssproperty --gds-ref-pallet-base800 - Color for the spinner indicator
 */
@gdsCustomElement('gds-spinner')
export class GdsSpinner extends LitElement {
  static styles = [tokens, styles]

  /**
   * The size of the spinner. Can be 'sm', 'md', or 'lg'.
   */
  @property({ type: String })
  size: 'sm' | 'md' | 'lg' = 'md'

  /**
   * The type of overlay for the spinner. Can be 'fullscreen', 'cover', or empty for no overlay.
   */
  @property({ type: String })
  overlay: 'fullscreen' | 'cover' | '' = ''

  /**
   * Whether to show a backdrop behind the spinner when using overlay.
   */
  @property({ type: Boolean })
  backdrop = false

  /**
   * Optional label to display below the spinner.
   */
  @property({ type: String })
  label = ''

  /**
   * Whether the spinner is disabled.
   */
  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <div
        class=${this.#getWrapperClasses()}
        role="progressbar"
        aria-label="${this.label || 'Loading'}"
        aria-busy="true"
        part="base"
      >
        <div
          class=${this.#getSpinnerClasses()}
          part="spinner"
        ></div>
        ${when(
          this.label,
          () => html`<div class="spinner-label" part="label">${this.label}</div>`,
          () => nothing
        )}
      </div>
    `
  }

  #getSpinnerClasses(): string {
    const classes = {
      'gds-spinner': true,
      'gds-spinner-sm': this.size === 'sm',
      'gds-spinner-lg': this.size === 'lg',
      'gds-spinner-disabled': this.disabled
    }

    return Object.entries(classes)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(' ')
  }

  #getWrapperClasses(): string {
    const classes = {
      'gds-spinner-wrapper': true,
      'gds-spinner-fullscreen': this.overlay === 'fullscreen',
      'gds-spinner-cover': this.overlay === 'cover',
      'gds-spinner-backdrop': this.backdrop
    }

    return Object.entries(classes)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(' ')
  }
}
