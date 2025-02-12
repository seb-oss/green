import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div'
import FlexCSS from './flex.styles'

/**
 * The `gds-flex` component is a flex element that can be used to wrap other components and control the layout of its children.
 *
 * It can be used in combination with other elements like `gds-grid`, `gds-card`, `gds-img`, `gds-text` etc.
 *
 * @element gds-flex
 * @status beta
 *
 */

@gdsCustomElement('gds-flex')
export class GdsFlex extends GdsDiv {
  static styles = [tokens, FlexCSS]

  connectedCallback(): void {
    super.connectedCallback()
    this.display = 'flex'
  }

  render() {
    return html`<slot></slot>`
  }
}
