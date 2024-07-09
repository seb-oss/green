import { css } from 'lit'
import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { property } from 'lit/decorators.js'

/**
 * @element gds-backdrop
 * @status beta
 */
@gdsCustomElement('gds-backdrop')
export class GdsBackdrop extends GdsElement {
  static styles = css`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `

  @property({ type: Boolean, reflect: true })
  show = false

  render() {
    return html``
  }
}
