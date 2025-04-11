import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-banknote-2
 */
@gdsCustomElement('gds-icon-banknote-2')
export class IconBanknote2 extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 8.25H5.75M18.25 15.75H19.25M1.75 18.75V5.25H22.25V18.75H1.75ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.25C1 4.83579 1.33579 4.5 1.75 4.5H22.25C22.6642 4.5 23 4.83579 23 5.25V18.75C23 19.1642 22.6642 19.5 22.25 19.5H1.75C1.33579 19.5 1 19.1642 1 18.75V5.25ZM3 7V8.5H5.5V7H3ZM18.5 15.5H21V17H18.5V15.5ZM9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'banknote-2'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}