import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div'
import FlexCSS from './flex.styles'

/**
 * @element gds-flex
 * @status beta
 *
 * The `gds-flex` component extends the `gds-div` and sets the display property to `flex` by default. It is otherwise identical to the `gds-div` component.
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
