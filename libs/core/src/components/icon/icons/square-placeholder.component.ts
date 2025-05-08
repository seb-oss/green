import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-square-placeholder
 */
@gdsCustomElement('gds-icon-square-placeholder')
export class IconSquarePlaceholder extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20.25 20.25V3.75H3.75V20.25H20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'square-placeholder'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}