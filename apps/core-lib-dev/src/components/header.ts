import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { gdsInitLocalization } from '@sebgroup/green-core/localization'
import { html } from '@sebgroup/green-core/scoping'

const { setLocale, getLocale } = gdsInitLocalization()

@customElement('gds-header')
export class GdsHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  private handleButtonClick(view: string) {
    this.dispatchEvent(
      new CustomEvent('view-change', {
        detail: { view },
        bubbles: true,
        composed: true,
      }),
    )
  }

  render() {
    return html`
      <style>
        :host {
          position: sticky;
          top: 0;
          z-index: 4;
          background-color: color-mix(
            in srgb,
            var(--gds-color-l2-background-secondary),
            transparent 20%
          );
          display: block;
          backdrop-filter: blur(10px);
        }
      </style>
      <gds-flex
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        position="relative"
        height="4rem"
        level="1"
      >
        <gds-flex align-items="center">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
            <gds-menu-item @click=${() => this.handleButtonClick('theme-page')}>
              Theme Page
            </gds-menu-item>
            <gds-menu-item @click=${() => this.handleButtonClick('login')}>
              Login
            </gds-menu-item>
            <gds-menu-item
              @click=${() => this.handleButtonClick('form-validation')}
            >
              Validation
            </gds-menu-item>
            <gds-menu-item @click=${() => this.handleButtonClick('datepicker')}>
              Datepicker
            </gds-menu-item>
            <gds-menu-item @click=${() => this.handleButtonClick('calendar')}>
              Calendar
            </gds-menu-item>
          </gds-context-menu>
        </gds-flex>
        <gds-flex justify-content="space-between" width="100%">
          <gds-flex display="none">
            <gds-menu-button
              @click=${() => this.handleButtonClick('onboarding')}
            >
              <gds-icon-bars-two></gds-icon-bars-two>
            </gds-menu-button>
            <gds-menu-button
              @click=${() => this.handleButtonClick('onboarding')}
            >
              Onboarding
            </gds-menu-button>
            <gds-menu-button
              @click=${() => this.handleButtonClick('dashboard')}
            >
              Dashboard
            </gds-menu-button>
          </gds-flex>
          <gds-flex
            position="absolute"
            inset="0"
            margin="0 auto"
            align-items="center"
            max-width="max-content"
          >
            <gds-icon-brand-seb></gds-icon-brand-seb>
          </gds-flex>
          <gds-flex align-items="center" gap="l" margin="0 m 0 " display="none">
            <gds-icon-magnifying-glass></gds-icon-magnifying-glass>
            <gds-icon-bell></gds-icon-bell>
            <gds-img
              src="https://placehold.co/80x80/000000/FFFFFF/png?text=S"
              border-radius="max"
              width="24px"
              height="24px"
            ></gds-img>
            <gds-icon-calendar></gds-icon-calendar>
            <!-- <gds-context-menu>
              <gds-flex align-items="center" gap="s" slot="trigger">
                Language
                <gds-icon-globus></gds-icon-globus>
              </gds-flex>
              <gds-menu-item @click=${() => setLocale('en')}>EN</gds-menu-item>
              <gds-menu-item @click=${() => setLocale('sv')}>SV</gds-menu-item>
            </gds-context-menu> -->
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `
  }
}
