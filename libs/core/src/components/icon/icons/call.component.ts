import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-call
 */
@gdsCustomElement('gds-icon-call')
export class IconCall extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M10.25 8L9 3.75H7.00236H3.75188C3.75063 3.83318 3.75 3.91652 3.75 4C3.75 6.96726 4.54531 9.74877 5.93438 12.143C7.35756 14.596 9.40402 16.6424 11.857 18.0656C14.2512 19.4547 17.0327 20.25 20 20.25H20.25V15L16 13.75L14.1918 15.6335C11.6758 14.3749 9.62505 12.3242 8.36647 9.80819L10.25 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3.75188 3C3.34208 3 3.00815 3.32893 3.00197 3.73869C3.00066 3.82564 3 3.91275 3 4C3 7.10297 3.83203 10.0139 5.28566 12.5194C6.77436 15.0853 8.9147 17.2256 11.4806 18.7143C13.9861 20.168 16.897 21 20 21H20.25C20.6642 21 21 20.6642 21 20.25V15C21 14.6673 20.7808 14.3744 20.4616 14.2805L16.2116 13.0305C15.943 12.9515 15.6528 13.0286 15.459 13.2306L14.0423 14.7063C12.0524 13.5965 10.4035 11.9476 9.29367 9.95774L10.7694 8.54104C10.9714 8.34717 11.0485 8.05695 10.9695 7.78838L9.71952 3.53838C9.62565 3.21919 9.33271 3 9 3H3.75188Z" fill="currentColor"/>`
  /** @private */
  static _name = 'call'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}