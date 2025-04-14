import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-horizontal-alignment-bottom
 */
@gdsCustomElement('gds-icon-horizontal-alignment-bottom')
export class IconHorizontalAlignmentBottom extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 20.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 7.75V17.25H17.25V7.75H13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 3.75V17.25H10.25V3.75H6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M6.75 3C6.33579 3 6 3.33579 6 3.75V17.25C6 17.6642 6.33579 18 6.75 18H10.25C10.6642 18 11 17.6642 11 17.25V3.75C11 3.33579 10.6642 3 10.25 3H6.75Z" fill="currentColor"/><path d="M13.75 7C13.3358 7 13 7.33579 13 7.75V17.25C13 17.6642 13.3358 18 13.75 18H17.25C17.6642 18 18 17.6642 18 17.25V7.75C18 7.33579 17.6642 7 17.25 7H13.75Z" fill="currentColor"/><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'horizontal-alignment-bottom'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}