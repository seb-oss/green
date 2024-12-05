import { localized, msg } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './form-control-header.styles'

/**
 * @element gds-field-base
 *
 */
@gdsCustomElement('gds-field-base')
@localized()
export class GdsFieldBase extends GdsElement {
  static styles = [styles]

  render() {
    return html` Field Base `
  }
}
