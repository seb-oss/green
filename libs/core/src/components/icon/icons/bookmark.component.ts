import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bookmark
 */
@gdsCustomElement('gds-icon-bookmark')
export class IconBookmark extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.25 21.25V2.75H4.75V21.25L12 17.25L19.25 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.5153 4.14021 21.7609 4.36871 21.8958C4.5972 22.0307 4.87998 22.0349 5.11231 21.9067L12 18.1066L18.8877 21.9067C19.12 22.0349 19.4028 22.0307 19.6313 21.8958C19.8598 21.7609 20 21.5153 20 21.25V2.75C20 2.33579 19.6642 2 19.25 2H4.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bookmark'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}