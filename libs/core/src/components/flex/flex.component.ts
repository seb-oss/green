import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div/div.component'
import FlexStyles from './flex.styles'

/**
 * @element gds-flex
 *
 * The `gds-flex` component extends the `gds-div` and sets the display property to `flex` by default. It is otherwise identical to the `gds-div` component.
 */
@gdsCustomElement('gds-flex')
export class GdsFlex extends GdsDiv {
  static styles = [FlexStyles]

  render() {
    return html`<slot></slot>`
  }
}
