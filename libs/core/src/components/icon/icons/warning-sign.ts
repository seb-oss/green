import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-warning-sign
 */
@gdsCustomElement('gds-icon-warning-sign')
export class IconWarningSign extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 20.25L6.75 3.75H17.25M17.25 3.75L21.25 20.25M17.25 3.75L13.25 20.25M4 16.75H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.02129 3.5733C6.10284 3.23689 6.40402 3 6.75017 3H17.2502C17.5963 3 17.8975 3.23689 17.9791 3.5733L21.9791 20.0733C22.0767 20.4759 21.8294 20.8813 21.4269 20.9789C21.0243 21.0765 20.6189 20.8293 20.5213 20.4267L19.8118 17.5H14.6886L13.9791 20.4267C13.8815 20.8293 13.476 21.0765 13.0735 20.9789C12.6709 20.8813 12.4237 20.4759 12.5213 20.0733L13.1451 17.5H4.18856L3.47906 20.4267C3.38147 20.8293 2.97603 21.0765 2.57347 20.9789C2.17092 20.8813 1.9237 20.4759 2.02129 20.0733L6.02129 3.5733ZM17.2502 6.93336L15.0522 16H19.4481L17.2502 6.93336Z" fill="currentColor"/>`
  /** @private */
  static _name = 'warning sign'
}