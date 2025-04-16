import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-file-bend
 */
@gdsCustomElement('gds-icon-file-bend')
export class IconFileBend extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.75 2.75H4.75V21.25H19.25V9.25M12.75 2.75L19.25 9.25M12.75 2.75V9.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 2H4.75C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V10H12.75C12.3358 10 12 9.66421 12 9.25V2Z" fill="currentColor"/><path d="M19.5607 8.5L13.5 2.43934V8.5H19.5607Z" fill="currentColor"/>`
  /** @private */
  static _name = 'file-bend'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}