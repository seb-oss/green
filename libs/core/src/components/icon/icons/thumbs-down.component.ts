import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-thumbs-down
 */
@gdsCustomElement('gds-icon-thumbs-down')
export class IconThumbsDown extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.2521 13.25H21.25V3.75H17.2521M17.2521 3.75V13L13.0043 21.25H12.389C11.1622 21.25 10.2249 20.1546 10.4139 18.9419L10.9892 15.25H5.74908C3.91335 15.25 2.50859 13.6144 2.78476 11.7987L3.62128 6.29867C3.84421 4.83298 5.1038 3.75 6.5856 3.75H17.2521Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0021 4.5V12.5H20.5V4.5H18.0021ZM17.5808 14H21.25C21.6642 14 22 13.6642 22 13.25V3.75C22 3.33579 21.6642 3 21.25 3H6.58563C4.73288 3 3.15846 4.35403 2.87984 6.1859L2.04331 11.6859C1.69817 13.9552 3.45378 16 5.74911 16H10.1133L9.67283 18.8264C9.41305 20.4935 10.7015 22 12.389 22H13.0043C13.2852 22 13.5425 21.8431 13.6711 21.5933L17.5808 14Z" fill="currentColor"/>`
  /** @private */
  static _name = 'thumbs-down'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}