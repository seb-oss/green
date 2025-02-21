import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './radio.styles'

/**
 * @element gds-radio-group
 */
@gdsCustomElement('gds-radio')
export class GdsRadio extends GdsFormControlElement {
  static styles = [styles]

  render() {
    return html`<slot></slot>`
  }

  protected _getValidityAnchor(): HTMLElement {
    throw new Error('Method not implemented.')
  }
}
