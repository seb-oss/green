import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-people-copy
 */
@gdsCustomElement('gds-icon-people-copy')
export class IconPeopleCopy extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.25 6.75V2.75H2.75V17.25H6.75M9.32626 21.25C9.78713 18.9642 11.7046 17.25 14 17.25C16.2954 17.25 18.2129 18.9642 18.6737 21.25M9.32626 21.25H6.75V6.75H21.25V21.25H18.6737M9.32626 21.25H18.6737M16.25 12.5C16.25 13.7426 15.2426 14.75 14 14.75C12.7574 14.75 11.75 13.7426 11.75 12.5C11.75 11.2574 12.7574 10.25 14 10.25C15.2426 10.25 16.25 11.2574 16.25 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2C2.33579 2 2 2.33579 2 2.75V17.25C2 17.6642 2.33579 18 2.75 18H6V21.25C6 21.6642 6.33579 22 6.75 22H21.25C21.6642 22 22 21.6642 22 21.25V6.75C22 6.33579 21.6642 6 21.25 6H18V2.75C18 2.33579 17.6642 2 17.25 2H2.75ZM6.75 6H16.5V3.5H3.5V16.5H6V6.75C6 6.33579 6.33579 6 6.75 6ZM14 16.5C11.8261 16.5 9.95493 18.0081 9.11653 20.1744C9.05507 20.3332 9.17533 20.5 9.34561 20.5H18.6544C18.8247 20.5 18.9449 20.3332 18.8835 20.1744C18.0451 18.0081 16.1738 16.5 14 16.5ZM14 15C15.3807 15 16.5 13.8807 16.5 12.5C16.5 11.1193 15.3807 10 14 10C12.6193 10 11.5 11.1193 11.5 12.5C11.5 13.8807 12.6193 15 14 15Z" fill="currentColor"/>`
  /** @private */
  static _name = 'people-copy'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}