import { css, LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'

import { html } from '@sebgroup/green-core/scoping'
// import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/context-menu/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-right.js'
import '@sebgroup/green-core/components/icon/icons/flag.js'
import '@sebgroup/green-core/components/icon/icons/growth.js'
import '@sebgroup/green-core/components/icon/icons/bars-three.js'
import '@sebgroup/green-core/components/icon/icons/globus.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
// Icons for Theme Pages
import '@sebgroup/green-core/components/icon/icons/bars-two.js'
import '@sebgroup/green-core/components/icon/icons/brand-seb.js'
import '@sebgroup/green-core/components/icon/icons/bell.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/magnifying-glass.js'
//
import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/theme/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/link/index.js'
import '@sebgroup/green-core/components/img/index.js'
import '@sebgroup/green-core/components/video/index.js'
import '@sebgroup/green-core/components/menu-button/index.js'
import '@sebgroup/green-core/components/segmented-control/index.js'

import '../components/header'
import '../components/quicklinks'
import '../components/news-widget'
import './chlorophyll.scss'
import './form-validation.element'
import './datepicker.element'
import './calendar.element'
import './login/login.element'
import './onboarding/onboarding.element'
import './dashboard/dashboard.element'
import './theme-page/theme-page.element'

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
  accessor currentView = 'theme-page'

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('view-change', this.handleViewChange as EventListener)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  disconnectedCallback() {
    this.removeEventListener(
      'view-change',
      this.handleViewChange as EventListener,
    )
    document.removeEventListener('keydown', this.handleKeyDown)
    super.disconnectedCallback()
  }

  private handleViewChange(event: CustomEvent) {
    this.currentView = event.detail.view
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === '\\') {
      const themeElement = this.querySelector('html')
      if (themeElement) {
        const currentScheme = themeElement.getAttribute('gds-theme')
        themeElement.setAttribute(
          'color-scheme',
          currentScheme === 'light' ? 'dark' : 'light'
        )
      }
    }
  }

  render() {
    return html`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-container>
          ${choose(
            this.currentView,
            [
              ['theme-page', () => html`<tp-theme-page></tp-theme-page>`],
              ['onboarding', () => html`<gds-onboarding></gds-onboarding>`],
              ['dashboard', () => html`<gds-dashboard></gds-dashboard>`],
              ['onboarding', () => html`<gds-onboarding></gds-onboarding>`],
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
            ],
            () => html`No view selected`,
          )}
        </gds-container>
      </gds-theme>
    `
  }
}
customElements.define('sebgroup-root', AppElement)
