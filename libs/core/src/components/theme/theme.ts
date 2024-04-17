import { property } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../transitional-styles'

@gdsCustomElement('gds-theme')
export class GdsTheme extends GdsElement {

  @property({ reflect: true })
  mode: 'light' | 'dark' | 'auto' = 'light'

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-theme')
  }

  render() {
    return html`
      <slot></slot>
    `
  }
}
