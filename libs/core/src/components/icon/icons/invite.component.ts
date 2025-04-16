import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-invite
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-invite')
export class IconInvite extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 10.9853V2.75H19.25V10.9853M9.75 7.75H14.25M2.75 10.75V20.25H21.25V10.75L12 13.75L2.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V10.3669L21.0186 10.0366C21.2469 9.96254 21.4969 10.0022 21.691 10.1434C21.8851 10.2845 22 10.51 22 10.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V10.75C2 10.51 2.11487 10.2845 2.309 10.1434C2.50313 10.0022 2.75308 9.96254 2.98138 10.0366L4 10.3669V2.75ZM5.5 10.8534L12 12.9615L18.5 10.8534V3.5H5.5V10.8534ZM9 7.75C9 7.33579 9.33579 7 9.75 7H14.25C14.6642 7 15 7.33579 15 7.75C15 8.16421 14.6642 8.5 14.25 8.5H9.75C9.33579 8.5 9 8.16421 9 7.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'invite'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}