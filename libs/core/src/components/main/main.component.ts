import { gdsCustomElement } from '../../scoping'
import { GdsDiv } from '../div/div.component'

/**
 * @element gds-main
 * @status beta
 *
 * `gds-main` inherits all layout options, tokens and style expressions from `gds-div`.
 *
 * Provides semantic role 'main'.
 */
@gdsCustomElement('gds-main')
export class GdsMain extends GdsDiv {
  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'main')
  }
}
