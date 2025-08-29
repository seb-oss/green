import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-carussel
 */
@gdsCustomElement('gds-icon-carussel')
export class IconCarussel extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.5 3.75H6.5V20.25H17.5V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 5.75H21.25V18.25H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 18.25H2.75V5.75H6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 3.75C5.75 3.33579 6.08579 3 6.5 3H17.5C17.9142 3 18.25 3.33579 18.25 3.75V5H21.25C21.6642 5 22 5.33579 22 5.75V18.25C22 18.6642 21.6642 19 21.25 19H18.25V20.25C18.25 20.6642 17.9142 21 17.5 21H6.5C6.08579 21 5.75 20.6642 5.75 20.25V19H2.75C2.33579 19 2 18.6642 2 18.25V5.75C2 5.33579 2.33579 5 2.75 5H5.75V3.75ZM5.75 6.5H3.5V17.5H5.75V6.5ZM18.25 17.5H20.5V6.5H18.25V17.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'carussel'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}