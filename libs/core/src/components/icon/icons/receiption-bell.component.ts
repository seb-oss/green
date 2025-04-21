import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-receiption-bell
 */
@gdsCustomElement('gds-icon-receiption-bell')
export class IconReceiptionBell extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 6.75C7.44365 6.75 3.75 10.6172 3.75 16.2891V17.25H20.25V16.2891C20.25 10.6172 16.5563 6.75 12 6.75ZM12 6.75V3.75M3.7478 20.25H20.2478M12 17.5V20.25M9.75 3.75H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M14.25 4.5H12.75V6.03193C17.4354 6.43365 21 10.5874 21 16.2891V17.25C21 17.6642 20.6642 18 20.25 18H12.75V19.5H20.248C20.6623 19.5 20.998 19.8358 20.998 20.25C20.998 20.6642 20.6623 21 20.248 21H3.74805C3.33383 21 2.99805 20.6642 2.99805 20.25C2.99805 19.8358 3.33383 19.5 3.74805 19.5H11.25V18H3.75C3.33579 18 3 17.6642 3 17.25V16.2891C3 10.5874 6.56459 6.43365 11.25 6.03193V4.5H9.75C9.33579 4.5 9 4.16421 9 3.75C9 3.33579 9.33579 3 9.75 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'receiption-bell'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}