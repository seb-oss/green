import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-phone
 */
@gdsCustomElement('gds-icon-phone')
export class IconPhone extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.75 19.25H14.25M5.75 1.75H18.25V22.25H5.75V1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.75C5 1.33579 5.33579 1 5.75 1H18.25C18.6642 1 19 1.33579 19 1.75V22.25C19 22.6642 18.6642 23 18.25 23H5.75C5.33579 23 5 22.6642 5 22.25V1.75ZM9.75 18.5C9.33579 18.5 9 18.8358 9 19.25C9 19.6642 9.33579 20 9.75 20H14.25C14.6642 20 15 19.6642 15 19.25C15 18.8358 14.6642 18.5 14.25 18.5H9.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'phone'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}