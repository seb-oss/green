import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-buildings
 */
@gdsCustomElement('gds-icon-buildings')
export class IconBuildings extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 19.25H14.25M3.75 19.25V3.75H14.25V8M3.75 19.25H1.75M20.25 19.25H14.25M20.25 19.25V8H14.25M20.25 19.25H22.25M14.25 19.25V8M10.25 8.75H7.75M7.75 12.75H10.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H14.25C14.6642 3 15 3.33579 15 3.75V7.25H20.25C20.6642 7.25 21 7.58579 21 8V18.5H22.25C22.6642 18.5 23 18.8358 23 19.25C23 19.6642 22.6642 20 22.25 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H3V3.75ZM15 18.5H19.5V8.75H15V18.5ZM7 8.75C7 8.33579 7.33579 8 7.75 8H10.25C10.6642 8 11 8.33579 11 8.75C11 9.16421 10.6642 9.5 10.25 9.5H7.75C7.33579 9.5 7 9.16421 7 8.75ZM7 12.75C7 12.3358 7.33579 12 7.75 12H10.25C10.6642 12 11 12.3358 11 12.75C11 13.1642 10.6642 13.5 10.25 13.5H7.75C7.33579 13.5 7 13.1642 7 12.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'buildings'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}