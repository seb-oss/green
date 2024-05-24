import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-books
 */
@gdsCustomElement('gds-icon-books')
export class IconBooks extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6.75 20.25V5.75H2.75V20.25H6.75ZM6.75 20.25H13.25V3.75H6.75V20.25ZM6.75 7.875H13.25M6.75 16.125H13.25M14 7.25L18.3467 6.08531L21.8407 19.1253L17.4941 20.29L14 7.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M6.75 20.25V5.75H2.75V20.25H6.75ZM6.75 20.25H13.25V3.75H6.75V20.25ZM6.75 7.875H13.25M6.75 16.125H13.25M14 7.25L18.3467 6.08531L21.8407 19.1253L17.4941 20.29L14 7.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _name = 'books'
}