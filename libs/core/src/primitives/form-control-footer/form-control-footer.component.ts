import { nothing } from 'lit'
import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsBadge } from '../../components/badge/badge.component'
import { IconTriangleExclamation } from '../../components/icon/icons/triangle-exclamation.component'
import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import FormControlFooterStyles from './form-control-footer.styles'

/**
 * @element gds-form-control-footer
 */
@gdsCustomElement('gds-form-control-footer', {
  dependsOn: [GdsBadge, IconTriangleExclamation],
})
export class GdsFormControlFooter extends GdsElement {
  static styles = [FormControlFooterStyles]

  @property({ type: Array })
  charCounter?: [number, GdsBadge['variant'] | boolean]

  @property()
  errorMessage?: string

  @watch('charCounter')
  @watch('errorMessage')
  private _handleVisibilityChange() {
    this.classList.toggle(
      'visually-hidden',
      !this.errorMessage && !this.charCounter,
    )
  }

  connectedCallback(): void {
    super.connectedCallback()
    this._handleVisibilityChange()
  }

  render() {
    return html`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${when(
            this.errorMessage,
            () => html`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `,
          )}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${this.#renderRemainingCharsBadge()}
      </div>
    </div>`
  }

  #renderRemainingCharsBadge() {
    if (!this.charCounter || this.charCounter[1] === false) return nothing

    const [remaining, variant] = this.charCounter

    return html`<gds-badge variant="${variant}">${remaining}</gds-badge>`
  }
}
