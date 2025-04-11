import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-minus-small
 */
@gdsCustomElement('gds-icon-minus-small')
export class IconMinusSmall extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'minus-small'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}