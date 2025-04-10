import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubble
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-bubble')
export class IconBubble extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M21.2522 3C21.6664 3 22.0022 3.33579 22.0022 3.75V18.25C22.0022 18.6642 21.6664 19 21.2522 19H12.1948L7.36364 21.6572C7.13129 21.785 6.84873 21.7806 6.62048 21.6456C6.39222 21.5106 6.2522 21.2652 6.2522 21V19H2.7522C2.33798 19 2.0022 18.6642 2.0022 18.25V3.75C2.0022 3.33579 2.33798 3 2.7522 3H21.2522Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubble'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}