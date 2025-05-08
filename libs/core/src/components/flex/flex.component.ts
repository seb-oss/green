import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div/div.component'
import style from './flex.styles'

/**
 * @element gds-flex
 * @status beta
 *
 * The `gds-flex` component extends the `gds-div` and sets the display property to `flex` by default. It is otherwise identical to the `gds-div` component.
 */
@gdsCustomElement('gds-flex')
export class GdsFlex extends GdsDiv {
  static styles = [tokens, style]

  render() {
    return html`<slot></slot>`
  }
}
