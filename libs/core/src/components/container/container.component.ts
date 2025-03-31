import { gdsCustomElement } from '../../scoping'
import { GdsDiv } from '../div/div.component'

/**
 * @element gds-container
 * @status beta
 * @deprecated `gds-container` is an alias for `gds-div`. Prefer using `gds-div` directly instead.
 */
@gdsCustomElement('gds-container')
export class GdsContainer extends GdsDiv {}
