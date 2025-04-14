import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-vertical-alignment-right
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-vertical-alignment-right')
export class IconVerticalAlignmentRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20.25 3.75V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 6.75H3.75V10.25H17.25V6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 13.75H7.75V17.25H17.25V13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M21 3.75C21 3.33579 20.6642 3 20.25 3C19.8358 3 19.5 3.33579 19.5 3.75V20.25C19.5 20.6642 19.8358 21 20.25 21C20.6642 21 21 20.6642 21 20.25V3.75Z" fill="currentColor"/><path d="M3.75 6C3.33579 6 3 6.33579 3 6.75V10.25C3 10.6642 3.33579 11 3.75 11H17.25C17.6642 11 18 10.6642 18 10.25V6.75C18 6.33579 17.6642 6 17.25 6H3.75Z" fill="currentColor"/><path d="M7.75 13C7.33579 13 7 13.3358 7 13.75V17.25C7 17.6642 7.33579 18 7.75 18H17.25C17.6642 18 18 17.6642 18 17.25V13.75C18 13.3358 17.6642 13 17.25 13H7.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'vertical-alignment-right'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}