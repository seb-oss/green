import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bag
 */
@gdsCustomElement('gds-icon-bag')
export class IconBag extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21 12.75H12M12 12.75H3M12 12.75L12.0022 15.25M8.0022 7.75V3.75H16.0022V7.75M21.25 20.25H2.75V7.75H21.25V20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.0022 3C7.58798 3 7.2522 3.33579 7.2522 3.75V7H2.75C2.33579 7 2 7.33579 2 7.75V12H22V7.75C22 7.33579 21.6642 7 21.25 7H16.7522V3.75C16.7522 3.33579 16.4164 3 16.0022 3H8.0022ZM15.2522 7V4.5H8.7522V7H15.2522Z" fill="currentColor"/><path d="M2 20.25V13.5H11.2507L11.2522 15.2507C11.2526 15.6649 11.5886 16.0004 12.0029 16C12.4171 15.9996 12.7526 15.6636 12.7522 15.2493L12.7507 13.5H22V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bag'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}