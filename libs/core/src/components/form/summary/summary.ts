import { msg, str } from '@lit/localize'
import { css } from 'lit'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../../gds-element'
import { gdsCustomElement, html } from '../../../scoping'
import { GdsFormControlElement } from '../form-control'

import '../../container/index'
import '../../card/index'
import '../../flex/index'
import '../../icon/icons/triangle-exclamation'

@gdsCustomElement('gds-form-summary')
export class GdsFormSummary extends GdsElement {
  static styles = css`
    :host {
      font-weight: 500;
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: var(--gds-sys-color-primary-text);
      font-weight: 500;
    }
  `

  form?: HTMLFormElement
  formObserver?: MutationObserver

  connectedCallback() {
    super.connectedCallback()

    this.form = this.closest('form') || undefined

    if (this.form) {
      this.formObserver = new MutationObserver(() => {
        this.requestUpdate()
      })
      this.formObserver.observe(this.form, { attributes: true, subtree: true })
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.formObserver?.disconnect()
  }

  render() {
    const formControlElements = Array.from(
      this.form?.elements || [],
    ) as GdsFormControlElement[]
    const errors = formControlElements.filter((e) => e.invalid)
    return when(
      errors.length > 0,
      () =>
        html`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${msg(
              str`There are ${errors.length} errors to correct before you can continue:`,
            )}
            <ul>
              ${errors.map(
                (el: GdsFormControlElement) =>
                  html`<li><a href @click=${(e: MouseEvent) => {
                    e.preventDefault()
                    el.focus()
                  }}>${el.label}</li>`,
              )}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`,
    )
  }
}
