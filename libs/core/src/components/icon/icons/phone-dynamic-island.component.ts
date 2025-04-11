import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-phone-dynamic-island
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-phone-dynamic-island')
export class IconPhoneDynamicIsland extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M10.75 4.25H13.25M5.75 1.75H18.25V22.25H5.75V1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 23C5.33579 23 5 22.6642 5 22.25V1.75C5 1.33579 5.33579 1 5.75 1H18.25C18.6642 1 19 1.33579 19 1.75V22.25C19 22.6642 18.6642 23 18.25 23H5.75ZM10.75 3.49C10.3358 3.49 10 3.82579 10 4.24C10 4.65421 10.3358 4.99 10.75 4.99H13.25C13.6642 4.99 14 4.65421 14 4.24C14 3.82579 13.6642 3.49 13.25 3.49H10.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'phone-dynamic-island'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}