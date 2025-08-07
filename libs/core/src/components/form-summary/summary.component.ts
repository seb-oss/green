import { msg, str } from '@lit/localize'
import { nothing } from 'lit'
import { property, queryAsync } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { GdsButton } from '../button/button.component'
import { GdsCard } from '../card/card.component'
import { GdsDiv } from '../div/div.component'
import { GdsFlex } from '../flex/flex.component'
import { GdsFormControlElement } from '../form/form-control'
import { IconArrowUp } from '../icon/icons/arrow-up.component'
import SummaryStyles from './summary.styles'

/**
 * @element gds-form-summary
 *
 * When a user attempts to submit a form with errors, this component displays a summary of those errors.
 * Including an error summary greatly assists users in promptly identifying and addressing multiple errors
 * in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.
 */
@gdsCustomElement('gds-form-summary', {
  dependsOn: [GdsCard, GdsFlex, GdsDiv, GdsButton, IconArrowUp],
})
export class GdsFormSummary extends GdsElement {
  static styles = [tokens, SummaryStyles]

  /**
   * Whether to hide the error messages under the labels.
   */
  @property({ type: Boolean })
  hideErrors = false

  /**
   * Whether to refresh the summary automatically as controls in the form change validation state.
   *
   * Avoid this setting if the summary is located above the form controls, as it may cause the form
   * to jump around as the summary is updated.
   */
  @property({ type: Boolean })
  reactive = false

  /**
   * The current number of errors displayed in the summary.
   *
   * This is a convenience property that can be used to display the number of errors in the summary.
   */
  get errorCount() {
    return this.#getErrorControls().length
  }

  /**
   * Focuses the first focusable element in the summary.
   */
  focus(options?: FocusOptions): void {
    this._elRoot.then((el) => {
      const firstFocusable = el.querySelector(
        '[gds-element="gds-button"]',
      ) as GdsFormControlElement | null
      if (firstFocusable) {
        firstFocusable.focus(options)
      }
    })
  }

  @queryAsync('#root') private _elRoot!: Promise<GdsCard>

  #form?: HTMLFormElement
  #formObserver?: MutationObserver

  connectedCallback() {
    super.connectedCallback()

    this.#form = this.closest('form') || undefined

    if (this.#form && this.reactive) {
      this.#formObserver = new MutationObserver(() => {
        this.refresh()
      })
      this.#formObserver.observe(this.#form, {
        attributes: true,
        subtree: true,
      })
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.#formObserver?.disconnect()
  }

  /**
   * Refresh the component to reflext the current state of the form.
   */
  refresh() {
    this.requestUpdate()
  }

  render() {
    const formControls = this.#getFormControls()
    const errorControls = this.#getErrorControls()

    return when(
      errorControls.length > 0,
      () =>
        html`<gds-card
          id="root"
          role="navigation"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${msg(`Form error summary`)}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${msg(
                str`There are ${errorControls.length} errors to correct before you can continue:`,
              )}
            </gds-text>
            <ul>
              ${formControls.map(
                (el: GdsFormControlElement, idx) =>
                  html`<li ?inert=${!(el.ariaInvalid === 'true' || el.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative"
                      background="transparent; hover: negative/.2"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${(e: MouseEvent) => {
                        e.preventDefault()
                        el.focus()
                      }}
                    >
                      <div id=${`error-label-${idx}`}>
                        <gds-div font-weight="book"
                          >${el.dataset.label ||
                          el.label ||
                          el.ariaLabel}</gds-div
                        >
                        ${when(
                          !this.hideErrors,
                          () =>
                            html`<gds-div font="body-regular-s">
                              ${el.dataset.errormessage ||
                              el.errorMessage ||
                              (el as any).ariaErrorMessage}
                            </gds-div>`,
                        )}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${el.label} field`}
                      >
                        ${until(this.#renderArrowIcon(el), nothing)}
                      </gds-button>
                    </gds-card>
                  </li>`,
              )}
            </ul>
          </gds-flex>
        </gds-card>`,
    )
  }

  #getFormControls() {
    return Array.from(this.#form?.elements || []).filter(
      // Individual checkboxes can be used as form controls, but they don't support error messages,
      // so we filter them out here. Checkboxes needs to be wrapped in a group to work with form summary.
      (el) => (el as GdsFormControlElement).gdsElementName !== 'gds-checkbox',
    ) as GdsFormControlElement[]
  }

  #getErrorControls() {
    return this.#getFormControls().filter(
      (el) => el.ariaInvalid === 'true' || el.invalid,
    )
  }

  async #renderArrowIcon(el: GdsFormControlElement) {
    const selfTop = (await this._elRoot).getBoundingClientRect().top
    const elTop = el.getBoundingClientRect().top

    const isAbove = elTop < selfTop

    return isAbove
      ? html`<gds-icon-arrow-up></gds-icon-arrow-up>`
      : html`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`
  }
}
