import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-minus-large
 */
@gdsCustomElement('gds-icon-minus-large')
export class IconMinusLarge extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'minus-large'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}