import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubbles
 */
@gdsCustomElement('gds-icon-bubbles')
export class IconBubbles extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.25 14.25H21.2522V3.75H7.0022V7.75M17.2522 7.75H2.7522V18.25H6.0022V20.75L10.5022 18.25H17.2522V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2522 3C21.6664 3 22.0022 3.33579 22.0022 3.75V14.25C22.0022 14.6642 21.6664 15 21.2522 15H18.0022V18.25C18.0022 18.6642 17.6664 19 17.2522 19H10.6965L6.36643 21.4056C6.13413 21.5347 5.85088 21.5312 5.62185 21.3964C5.39282 21.2616 5.2522 21.0157 5.2522 20.75V19H2.7522C2.33798 19 2.0022 18.6642 2.0022 18.25V7.75C2.0022 7.33579 2.33798 7 2.7522 7H6.2522V3.75C6.2522 3.33579 6.58798 3 7.0022 3H21.2522ZM7.7522 7H17.2522C17.6664 7 18.0022 7.33579 18.0022 7.75V13.5H20.5022V4.5H7.7522V7Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubbles'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}