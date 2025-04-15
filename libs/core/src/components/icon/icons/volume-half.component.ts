import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-volume-half
 */
@gdsCustomElement('gds-icon-volume-half')
export class IconVolumeHalf extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.8891 8.11133C16.8844 9.10663 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M1.75 7.75H6L12.25 3.75V20.25L6 16.25H1.75V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.6101 3.09208C12.8505 3.22366 13 3.47592 13 3.75V20.25C13 20.5241 12.8505 20.7763 12.6101 20.9079C12.3696 21.0395 12.0766 21.0294 11.8457 20.8817L5.78055 17H1.75C1.33579 17 1 16.6642 1 16.25V7.75C1 7.33579 1.33579 7 1.75 7H5.78055L11.8457 3.1183C12.0766 2.97055 12.3696 2.9605 12.6101 3.09208Z" fill="currentColor"/><path d="M16.4194 7.581C16.1265 7.28811 15.6516 7.28811 15.3587 7.581C15.0658 7.87389 15.0658 8.34876 15.3587 8.64166C16.2191 9.50206 16.75 10.6885 16.75 12.0004C16.75 13.3123 16.2191 14.4988 15.3587 15.3592C15.0658 15.6521 15.0658 16.1269 15.3587 16.4198C15.6516 16.7127 16.1265 16.7127 16.4194 16.4198C17.5496 15.2896 18.25 13.7261 18.25 12.0004C18.25 10.2747 17.5496 8.7112 16.4194 7.581Z" fill="currentColor"/>`
  /** @private */
  static _name = 'volume-half'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}