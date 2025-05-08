import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-book
 */
@gdsCustomElement('gds-icon-book')
export class IconBook extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.25 12V16.75H7C5.75736 16.75 4.75 17.7574 4.75 19C4.75 20.2426 5.75736 21.25 7 21.25H10M8.75 7H15.25M8.75 11H12.25M6.75 2.75H19.25V21.25H6.75C5.64543 21.25 4.75 20.3546 4.75 19.25V4.75C4.75 3.64543 5.64543 2.75 6.75 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2C5.23122 2 4 3.23122 4 4.75V19.25C4 20.7688 5.23122 22 6.75 22H19.25C19.6642 22 20 21.6642 20 21.25V2.75C20 2.33579 19.6642 2 19.25 2H6.75ZM5.5 19V19.25C5.5 19.9404 6.05964 20.5 6.75 20.5H18.5V17.5H7C6.17157 17.5 5.5 18.1716 5.5 19ZM8.75 6.25C8.33579 6.25 8 6.58579 8 7C8 7.41421 8.33579 7.75 8.75 7.75H15.25C15.6642 7.75 16 7.41421 16 7C16 6.58579 15.6642 6.25 15.25 6.25H8.75ZM8 11C8 10.5858 8.33579 10.25 8.75 10.25H12.25C12.6642 10.25 13 10.5858 13 11C13 11.4142 12.6642 11.75 12.25 11.75H8.75C8.33579 11.75 8 11.4142 8 11Z" fill="currentColor"/>`
  /** @private */
  static _name = 'book'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}