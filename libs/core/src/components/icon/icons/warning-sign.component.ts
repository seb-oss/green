import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-warning-sign
 */
@gdsCustomElement('gds-icon-warning-sign')
export class IconWarningSign extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 20.25L6.75 3.75H17.25M17.25 3.75L21.25 20.25M17.25 3.75L13.25 20.25M4 16.75H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.02111 3.5733C6.10267 3.23689 6.40385 3 6.75 3H17.25C17.5962 3 17.8973 3.23689 17.9789 3.5733L21.9789 20.0733C22.0765 20.4759 21.8293 20.8813 21.4267 20.9789C21.0241 21.0765 20.6187 20.8293 20.5211 20.4267L19.8116 17.5H14.6884L13.9789 20.4267C13.8813 20.8293 13.4759 21.0765 13.0733 20.9789C12.6707 20.8813 12.4235 20.4759 12.5211 20.0733L13.1449 17.5H4.18839L3.47889 20.4267C3.3813 20.8293 2.97585 21.0765 2.5733 20.9789C2.17075 20.8813 1.92353 20.4759 2.02111 20.0733L6.02111 3.5733ZM17.25 6.93336L15.052 16H19.448L17.25 6.93336Z" fill="currentColor"/>`
  /** @private */
  static _name = 'warning-sign'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}