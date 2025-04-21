import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-printer
 */
@gdsCustomElement('gds-icon-printer')
export class IconPrinter extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.25 10.75H6.75M6.75 13.75V21.25H17.25V13.75M6.75 13.75H17.25M6.75 13.75V17.25H2.75V6.75H21.25V17.25H17.25V13.75M6.75 2.75H17.25V6.75H6.75V2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2C6.33579 2 6 2.33579 6 2.75V6H2.75C2.33579 6 2 6.33579 2 6.75V17.25C2 17.6642 2.33579 18 2.75 18H6V21.25C6 21.6642 6.33579 22 6.75 22H17.25C17.6642 22 18 21.6642 18 21.25V18H21.25C21.6642 18 22 17.6642 22 17.25V6.75C22 6.33579 21.6642 6 21.25 6H18V2.75C18 2.33579 17.6642 2 17.25 2H6.75ZM16.5 6V3.5H7.5V6H16.5ZM16.5 14.5H7.5V20.5H16.5V14.5ZM6 10.75C6 10.3358 6.33579 10 6.75 10H9.25C9.66421 10 10 10.3358 10 10.75C10 11.1642 9.66421 11.5 9.25 11.5H6.75C6.33579 11.5 6 11.1642 6 10.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'printer'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}