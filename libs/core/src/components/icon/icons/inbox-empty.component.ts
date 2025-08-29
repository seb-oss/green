import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-inbox-empty
 */
@gdsCustomElement('gds-icon-inbox-empty')
export class IconInboxEmpty extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2 12.75H8.4125L9.95 14.75H14.05L15.5875 12.75H22M22.25 12.75L18.15 4.75H5.85L1.75 12.75V19.25H22.25V12.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.39161 4H18.6084L23 12.569V20H1V12.569L5.39161 4ZM21.5 13.5V18.5H2.5V13.5H8.04306L9.58056 15.5H14.4194L15.9569 13.5H21.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'inbox-empty'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}