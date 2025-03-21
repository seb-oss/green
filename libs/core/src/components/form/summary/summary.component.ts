import { msg, str } from '@lit/localize'
import { css } from 'lit'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../../gds-element'
import { gdsCustomElement, html } from '../../../scoping'
import { GdsCard } from '../../card/card.component'
import { GdsFlex } from '../../flex/flex.component'
import { GdsText } from '../../text/text.component'
import { GdsFormControlElement } from '../form-control'

@gdsCustomElement('gds-form-summary', {
  dependsOn: [GdsCard, GdsFlex, GdsText],
})
export class GdsFormSummary extends GdsElement {
  static styles = css`
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: inherit;
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
        html`<gds-card
          level="2"
          border="4xs"
          border-color="negative"
          border-radius="xs"
          padding="l"
          background="negative"
          color="negative"
        >
          <gds-flex gap="s">
            <gds-text font-size="heading-xs" font-weight="book">
              ${msg(
                str`There are ${errors.length} errors to correct before you can continue:`,
              )}
            </gds-text>
            <ul>
              ${errors.map(
                (el: GdsFormControlElement) =>
                  html`<li>
                    <a
                      href=""
                      @click=${(e: MouseEvent) => {
                        e.preventDefault()
                        el.focus()
                      }}
                      >${el.label}</a
                    >
                  </li>`,
              )}
            </ul>
          </gds-flex>
        </gds-card>`,
    )
  }
}
