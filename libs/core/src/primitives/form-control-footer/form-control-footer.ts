import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './form-control-footer.styles'

import '../../components/badge'
import '../../components/icon/icons/triangle-exclamation'

/**
 * @element gds-form-control-footer
 */
@gdsCustomElement('gds-form-control-footer')
export class GdsFormControlFooter extends GdsElement {
  static styles = [styles]

  @property({ type: Number })
  charCounter?: number

  @property()
  validationMessage?: string

  render() {
    return html`<div aria-live="polite">
      <div class="error-message">
        ${when(
          this.validationMessage,
          () => html`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `,
        )}
      </div>
      <div class="char-counter">
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
