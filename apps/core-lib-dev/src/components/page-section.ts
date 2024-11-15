import { css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

import { resizeObserver } from '@sebgroup/green-core/utils/decorators/resize-observer.js'
import { watch } from '@sebgroup/green-core/utils/decorators/watch.js'

@customElement('tp-page-section')
export class PageSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      transition: all 0.5s;
      overflow: hidden;
      padding-bottom: 2px;
    }
  `

  @property()
  show: boolean = false

  render() {
    return html`<slot
      @slotchange=${() => {
        setTimeout(() => this.onShowChange(), 0)
      }}
    ></slot>`
  }

  @watch('show', { waitUntilFirstUpdate: true })
  @resizeObserver()
  onShowChange() {
    console.log('show', this.show)
    const height = this.scrollHeight
    if (this.show) {
      this.style.height = `${height}px`
      this.style.opacity = '1'
      this.style.marginBottom = 'var(--gds-space-3xl)'
      setTimeout(() => {
        this.style.height = 'auto'
      }, 500)
    } else {
      this.style.height = '0'
      this.style.opacity = '0'
      this.style.marginBottom = '0'
    }
  }
}
