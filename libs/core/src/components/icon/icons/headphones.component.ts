import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-headphones
 */
@gdsCustomElement('gds-icon-headphones')
export class IconHeadphones extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 13.75V12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12V13.75M3.75 13.75V20.25H7.75V13.75H3.75ZM20.25 13.75V20.25H16.25V13.75H20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12V13H16.25C15.8358 13 15.5 13.3358 15.5 13.75V20.25C15.5 20.6642 15.8358 21 16.25 21H20.25C20.6642 21 21 20.6642 21 20.25V12C21 7.282 17.3696 3.41192 12.75 3.03081V3H12C7.02944 3 3 7.02944 3 12V20.25C3 20.6642 3.33579 21 3.75 21H7.75C8.16421 21 8.5 20.6642 8.5 20.25V13.75C8.5 13.3358 8.16421 13 7.75 13H4.5V12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'headphones'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}