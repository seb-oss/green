import { LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

import { watch } from '@sebgroup/green-core/utils/decorators/watch.js'

@customElement('tp-page-section')
export class PageSection extends LitElement {
  @property()
  show: boolean = true

  @query('#container')
  container?: HTMLDivElement

  render() {
    return html`<div id="container">
      <slot></slot>
    </div>`
  }

  @watch('show')
  onShowChange() {
    if (!this.container) return
    if (this.show) {
      this.container.style.display = ''
    } else {
      this.container.style.display = 'none'
    }
  }
}
