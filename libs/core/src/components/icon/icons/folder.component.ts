import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-folder
 */
@gdsCustomElement('gds-icon-folder')
export class IconFolder extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 3.75V19.25H21.25V6.75H12L10 3.75H2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M2.75 3C2.33579 3 2 3.33579 2 3.75V19.25C2 19.6642 2.33579 20 2.75 20H21.25C21.6642 20 22 19.6642 22 19.25V6.75C22 6.33579 21.6642 6 21.25 6H12.4014L10.624 3.33397C10.4849 3.12533 10.2508 3 10 3H2.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'folder'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}