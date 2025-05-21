import { msg, str } from '@lit/localize'
import { css } from 'lit'
import { property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../../gds-element'
import { gdsCustomElement, html } from '../../../scoping'
import { GdsButton } from '../../button/button.component'
import { GdsCard } from '../../card/card.component'
import { GdsDiv } from '../../div/div.component'
import { GdsFlex } from '../../flex/flex.component'
import { IconArrowUp } from '../../icon/icons/arrow-up.component'
import { GdsFormControlElement } from '../form-control'

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
  static styles = css`
    :host {
      display: contents;
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0;
      max-height: 0;
      transition:
        max-height 0.3s ease-in-out,
        opacity 0.3s ease-in-out,
        margin 0.3s ease-in-out;
      overflow: hidden;
      opacity: 0;
    }
    li.show {
      margin: 0.5rem 0;
      max-height: 4rem;
      opacity: 1;
    }
    a {
      color: inherit;
    }
  `

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
    const formControls = Array.from(
      this.#form?.elements || [],
    ) as GdsFormControlElement[]
    const errorControls = formControls.filter(
      (el) => el.ariaInvalid === 'true' || el.invalid,
    )
    return when(
      errorControls.length > 0,
      () =>
        html`<gds-card
          level="2"
          border-color="negative"
          border-radius="xs"
          border-width="0"
          padding="l"
          background="negative"
          color="negative"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font-size="heading-xs" font-weight="book">
              ${msg(
                str`There are ${errorControls.length} errors to correct before you can continue:`,
              )}
            </gds-text>
            <ul>
              ${formControls.map(
                (el: GdsFormControlElement, idx) =>
                  html`<li
                    class=${el.ariaInvalid === 'true' || el.invalid
                      ? 'show'
                      : 'hide'}
                  >
                    <gds-card
                      role="link"
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
                            html`<gds-div font-size="body-s">
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
                        ${this.#renderArrowIcon(el)}
                      </gds-button>
                    </gds-card>
                  </li>`,
              )}
            </ul>
          </gds-flex>
        </gds-card>`,
    )
  }

  #renderArrowIcon(el: GdsFormControlElement) {
    const selfTop = this.getBoundingClientRect().top
    const elTop = el.getBoundingClientRect().top

    const isAbove = elTop < selfTop

    return isAbove
      ? html`<gds-icon-arrow-up></gds-icon-arrow-up>`
      : html`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`
  }
}
