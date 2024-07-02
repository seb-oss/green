import { css, LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'

import { html } from '@sebgroup/green-core/scoping'
// import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import { gdsInitLocalization } from '@sebgroup/green-core/localization'

import '@sebgroup/green-core/components/icon/icons/flag.js'
import '@sebgroup/green-core/components/segmented-control/index.js'
import '@sebgroup/green-core/components/context-menu/index.js'

import './chlorophyll.scss'
import './form-validation.element'
import './datepicker.element'
import './calendar.element'
import './card.element'

const { setLocale, getLocale } = gdsInitLocalization()

export class AppElement extends LitElement {
  static styles = css`
    :host {
      --gds-test-color: red;
    }
  `
  // No need for a shadow root here
  protected createRenderRoot() {
    return this
  }

  @property()
  accessor popoverOpen: boolean = false

  @state()
  accessor lang = 'sv'

  @state()
  accessor currentView = 'card'

  connectedCallback() {
    super.connectedCallback()
    // registerTransitionalStyles()
    this.setLang(getLocale())
  }

  setLang(lang: string) {
    this.lang = lang
    setLocale(lang)
  }

  render() {
    return html`
      <gds-theme color-scheme="light">
        <div class="container">
          <div style="display: flex; justify-content: space-between;">
            <h1 class="mb-5">Green Core test app</h1>
            <gds-context-menu>
              <span slot="trigger"
                >Lang: ${this.lang} <gds-icon-flag></gds-icon-flag
              ></span>
              <gds-menu-item @click=${() => this.setLang('sv')}
                >SV</gds-menu-item
              >
              <gds-menu-item @click=${() => this.setLang('en')}
                >EN</gds-menu-item
              >
            </gds-context-menu>
          </div>

          <gds-segmented-control
            .value=${this.currentView}
            @change=${(e: CustomEvent) =>
              (this.currentView = (e.target as any).value)}
            style="margin-bottom: 1rem; width: 100%;"
          >
            <gds-segment value="form-validation">Form validation</gds-segment>
            <gds-segment value="datepicker">Datepicker</gds-segment>
            <gds-segment value="calendar">Calendar</gds-segment>
            <gds-segment value="card">Card</gds-segment>
          </gds-segmented-control>
          ${this.currentView === 'card'
            ? html`<card-example></card-example>`
            : html`
                <div class="card">
                  ${choose(
                    this.currentView,
                    [
                      [
                        'simple-values',
                        () => html`<simple-values></simple-values>`,
                      ],
                      [
                        'complex-values',
                        () => html`<complex-values></complex-values>`,
                      ],
                      [
                        'datepicker',
                        () => html`<datepicker-example></datepicker-example>`,
                      ],
                      [
                        'calendar',
                        () => html`<calendar-example></calendar-example>`,
                      ],
                    ],
                    () => html`No view selected`,
                  )}
                </div>
              `}
        </div>
      </gds-theme>
    `
  }
}
customElements.define('sebgroup-root', AppElement)
