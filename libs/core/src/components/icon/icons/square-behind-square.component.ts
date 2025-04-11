import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-square-behind-square
 */
@gdsCustomElement('gds-icon-square-behind-square')
export class IconSquareBehindSquare extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M7.75 7.75V3.75H20.25V16.26H16.25M16.25 7.75V20.25H3.75V7.75H16.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3.75C7 3.33579 7.33579 3 7.75 3H20.25C20.6642 3 21 3.33579 21 3.75V16.26C21 16.6742 20.6642 17.01 20.25 17.01H17V20.25C17 20.6642 16.6642 21 16.25 21H3.75C3.33579 21 3 20.6642 3 20.25V7.75C3 7.33579 3.33579 7 3.75 7H7V3.75ZM17 15.51V7.75C17 7.33579 16.6642 7 16.25 7H8.5V4.5H19.5V15.51H17Z" fill="currentColor"/>`
  /** @private */
  static _name = 'square-behind-square'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}