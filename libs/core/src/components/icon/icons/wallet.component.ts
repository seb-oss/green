import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-wallet
 */
@gdsCustomElement('gds-icon-wallet')
export class IconWallet extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 6.5V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H20.25V8.75H16.25M3.75 6.5C3.75 7.74264 4.75736 8.75 6 8.75H16.25M3.75 6.5C3.75 4.98122 4.98122 3.75 6.5 3.75H16.25V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M15.5 15.25C15.9142 15.25 16.25 14.9142 16.25 14.5C16.25 14.0858 15.9142 13.75 15.5 13.75C15.0858 13.75 14.75 14.0858 14.75 14.5C14.75 14.9142 15.0858 15.25 15.5 15.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3C4.567 3 3 4.567 3 6.5V17.25C3 19.3211 4.67893 21 6.75 21H20.25C20.6642 21 21 20.6642 21 20.25V8.75C21 8.33579 20.6642 8 20.25 8H17V3.75C17 3.33579 16.6642 3 16.25 3H6.5ZM15.5 8V4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5C4.5 7.32843 5.17157 8 6 8H15.5ZM15.5 15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5C14.9477 13.5 14.5 13.9477 14.5 14.5C14.5 15.0523 14.9477 15.5 15.5 15.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'wallet'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}