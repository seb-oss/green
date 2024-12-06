import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/container/index.js'

@customElement('tp-step-bullet')
export class TPStepBullet extends LitElement {
  @property({ type: Boolean })
  active = false

  render() {
    return html`
      <gds-container
        border-radius="max"
        width=${this.active ? '16px' : '6px'}
        height="6px"
        level="3"
        background="positive; hover:primary"
        cursor="pointer"
        transition="all 0.4s"
        transform="hover:scaleX(1.2)"
      ></gds-container>
    `
  }
}
