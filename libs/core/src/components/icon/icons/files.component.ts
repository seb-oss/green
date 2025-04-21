import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-files
 */
@gdsCustomElement('gds-icon-files')
export class IconFiles extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.25 18.25V21.25H4.75V5.75H7.75M15.25 2.75H7.75V18.25H20.25V7.75M15.25 2.75L20.25 7.75M15.25 2.75V7.75H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C7.33579 2 7 2.33579 7 2.75V5H4.75C4.33579 5 4 5.33579 4 5.75V21.25C4 21.6642 4.33579 22 4.75 22H17.25C17.6642 22 18 21.6642 18 21.25V19H20.25C20.6642 19 21 18.6642 21 18.25V8.5H15.25C14.8358 8.5 14.5 8.16421 14.5 7.75V2H7.75ZM16.5 19H7.75C7.33579 19 7 18.6642 7 18.25V6.5H5.5V20.5H16.5V19Z" fill="currentColor"/><path d="M16 2.43934L20.5607 7H16V2.43934Z" fill="currentColor"/>`
  /** @private */
  static _name = 'files'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}