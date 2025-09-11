import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-shield
 */
@gdsCustomElement('gds-icon-shield')
export class IconShield extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20.25 5.5L12 2.75L3.75 5.5V11.9123C3.75 16.8848 8 19.25 12 21.4079C16 19.25 20.25 16.8848 20.25 11.9123V5.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.2372 2.03849C12.0832 1.98717 11.9168 1.98717 11.7628 2.03849L3.51283 4.78849C3.20657 4.89057 3 5.17718 3 5.5V11.9123C3 14.6497 4.18351 16.6701 5.85876 18.2596C7.5058 19.8225 9.65956 20.9975 11.6439 22.068C11.8662 22.1879 12.1338 22.1879 12.3561 22.068C14.3404 20.9975 16.4942 19.8225 18.1412 18.2596C19.8165 16.6701 21 14.6497 21 11.9123V5.5C21 5.17718 20.7934 4.89057 20.4872 4.78849L12.2372 2.03849Z" fill="currentColor"/>`
  /** @private */
  static _name = 'shield'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}