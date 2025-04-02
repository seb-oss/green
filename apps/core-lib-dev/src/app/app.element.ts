import { css, LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'

import { html } from '@sebgroup/green-core/scoping.js'

// import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

import '../../../../libs/core/src/components/index'
import '../components/header'
import './chlorophyll.scss'
import './form-validation.element'
import './datepicker.element'
import './calendar.element'
import './spinner.element'
import './login/login.element'
import './plain-form-controls.element'

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
  popoverOpen: boolean = false

  @state()
  currentView = 'login'

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('view-change', this.handleViewChange as EventListener)
  }

  disconnectedCallback() {
    this.removeEventListener(
      'view-change',
      this.handleViewChange as EventListener,
    )
    super.disconnectedCallback()
  }

  private handleViewChange(event: CustomEvent) {
    this.currentView = event.detail.view
  }

  render() {
    return html`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-div padding="s{0} m{s} l{4xl}">
          ${choose(
            this.currentView,
            [
              ['login', () => html`<gds-login></gds-login>`],
              [
                'form-validation',
                () => html`<form-validation></form-validation>`,
              ],
              [
                'datepicker',
                () => html`<datepicker-example></datepicker-example>`,
              ],
              ['calendar', () => html`<calendar-example></calendar-example>`],
              ['spinner', () => html`<spinner-example></spinner-example>`],
              [
                'plain-form-controls',
                () => html`<plain-form-controls></plain-form-controls>`,
              ],
            ],
            () => html`No view selected`,
          )}
        </gds-div>
      </gds-theme>
    `
  }
}
customElements.define('sebgroup-root', AppElement)
