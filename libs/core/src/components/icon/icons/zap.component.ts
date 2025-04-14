import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-zap
 */
@gdsCustomElement('gds-icon-zap')
export class IconZap extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20.25 8.75H13.25V1.75L3.75 15.0473H10.75V22.25L20.25 8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M14 1.75005C14 1.42403 13.7894 1.13535 13.4789 1.03584C13.1685 0.936333 12.8293 1.04879 12.6397 1.31407L3.13974 14.6114C2.97642 14.84 2.95456 15.1407 3.08311 15.3905C3.21166 15.6403 3.46905 15.7973 3.75 15.7973H10V22.2501C10 22.5771 10.2119 22.8664 10.5236 22.9651C10.8354 23.0638 11.1752 22.9491 11.3634 22.6817L20.8634 9.18167C21.0245 8.95269 21.0447 8.65303 20.9157 8.40452C20.7867 8.15601 20.53 8.00005 20.25 8.00005H14V1.75005Z" fill="currentColor"/>`
  /** @private */
  static _name = 'zap'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}