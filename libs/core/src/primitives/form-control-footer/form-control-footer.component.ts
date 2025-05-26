import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsBadge } from '../../components/badge/badge.component'
import { IconTriangleExclamation } from '../../components/icon/icons/triangle-exclamation.component'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './form-control-footer.styles'

/**
 * @element gds-form-control-footer
 */
@gdsCustomElement('gds-form-control-footer', {
  dependsOn: [GdsBadge, IconTriangleExclamation],
})
export class GdsFormControlFooter extends GdsElement {
  static styles = [styles]

  @property({ type: Number })
  charCounter?: number

  @property()
  errorMessage?: string

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties)
    if (
      changedProperties.has('errorMessage') ||
      changedProperties.has('charCounter')
    ) {
      this.classList.toggle('visually-hidden', !this.errorMessage)
    }
  }

  connectedCallback(): void {
    super.connectedCallback()

    if (!this.errorMessage && !this.charCounter) {
      this.classList.add('visually-hidden')
    }
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
        ${when(Number.isInteger(this.charCounter), () =>
          this.#renderRemainingCharsBadge(this.charCounter!),
        )}
      </div>
    </div>`
  }

  #renderRemainingCharsBadge(remaining: number) {
    let variant
    if (remaining < 0) {
      variant = 'negative'
    } else if (remaining < 20) {
      variant = 'warning'
    } else {
      variant = 'positive'
    }
    return html`<gds-badge variant="${variant}">${remaining}</gds-badge>`
  }
}
