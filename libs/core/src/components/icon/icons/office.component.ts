import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-office
 */
@gdsCustomElement('gds-icon-office')
export class IconOffice extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M1.75 19.25H2.75M22.25 19.25H21.25M21.25 19.25V8.75H17.25M21.25 19.25H17.25M17.25 8.75V19.25M17.25 8.75V4.75H6.75V8.75M17.25 19.25H14.25M6.75 19.25V8.75M6.75 19.25H2.75M6.75 19.25H9.75M6.75 8.75H2.75V19.25M9.75 19.25V14.75H14.25V19.25M9.75 19.25H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75V8H21.25C21.6642 8 22 8.33579 22 8.75V18.5H22.25C22.6642 18.5 23 18.8358 23 19.25C23 19.6642 22.6642 20 22.25 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H2V8.75C2 8.33579 2.33579 8 2.75 8H6V4.75ZM6 9.5H3.5V18.5H6V9.5ZM18 18.5H20.5V9.5H18V18.5ZM14 18.5V15H10V18.5H14Z" fill="currentColor"/>`
  /** @private */
  static _name = 'office'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}