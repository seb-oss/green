import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '../../components/jit'
import './style.css'

@customElement('tp-page-header')
export class PageHeader extends LitElement {
  protected createRenderRoot() {
    return this
  }

  @state()
  accessor viewOptions = {
    hasAccounts: false,
    hasSavings: false,
    hasCards: false,
  }

  render() {
    return html`
      <gds-flex justify-content="space-between" flex-direction="row" gap="l" padding="4xl 4xl 0 4xl">
        <gds-flex flex-direction="column" >
          <gds-text tag="h1" font-size="heading-s; s{display-l}">
            Hey Josephine!
          </gds-text>
          <gds-flex gap="2xs">
            <gds-text
              tag="h2"
              font-size="display-l"
              color="secondary"
            >
              Let’s set up your 
            </gds-text>
            <gds-text level="1" tag="p" color="positive" font-size="display-l">everyday view!</gds-text>
          </gds-flex>
        </gds-flex>
        <gds-flex gap="xs" justify-content="center">
         <!-- <tp-quicklinks></tp-quicklinks> -->
          <gds-button rank="secondary">
            <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
          </gds-button>
          <gds-button rank="secondary" title="test">
            <gds-icon-plus-large></gds-icon-plus-large>
          </gds-button>
          <gds-button rank="secondary">
            <gds-icon-calendar></gds-icon-calendar>
          </gds-button>

          <gds-popover>
            <div slot="trigger">
              <gds-container display="s{none}">
                <gds-button rank="secondary">
                  <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
                </gds-button>
              </gds-container>
              <gds-container display="none; s{block}">
                <gds-button rank="secondary">
                  Shortcuts
                  <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
                </gds-button>
              </gds-container>
            </div>
            <gds-menu-item>
              <label class="form-control"
              >Has accounts
              <input type="checkbox" @change=${(e) => (this.#setViewOptions({...this.viewOptions, hasAccounts: e.target.checked}))} />
              <i></i>
            </label>
            </gds-menu-item>
            <gds-menu-item>
              <label class="form-control"
                >Has savings
                <input type="checkbox" @change=${(e) => (this.#setViewOptions({...this.viewOptions, hasSavings: e.target.checked}))} />
                <i></i>
              </label>
            </gds-menu-item>
            <gds-menu-item>
              <label class="form-control"
                >Has cards
                <input type="checkbox" @change=${(e) => (this.#setViewOptions({...this.viewOptions, hasCards: e.target.checked}))} />
                <i></i>
              </label>
            </gds-menu-item>
          </gds-popover>

        </gds-flex>
      </gds-flex>
    `
  }

  #setViewOptions(options: any)
  {
    this.viewOptions = options
    this.dispatchEvent(
      new CustomEvent('view-options-change', {
        detail: { view: options },
        bubbles: true,
        composed: true,
      }),
    )
  }
}
