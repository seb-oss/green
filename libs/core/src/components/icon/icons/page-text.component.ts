import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-page-text
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-page-text')
export class IconPageText extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.75 6.75H15.25M8.75 10.75H15.25M8.75 14.75H11.25M4.75 2.75H19.25V21.25H4.75V2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V2.75ZM8.75 6C8.33579 6 8 6.33579 8 6.75C8 7.16421 8.33579 7.5 8.75 7.5H15.25C15.6642 7.5 16 7.16421 16 6.75C16 6.33579 15.6642 6 15.25 6H8.75ZM8.75 10C8.33579 10 8 10.3358 8 10.75C8 11.1642 8.33579 11.5 8.75 11.5H15.25C15.6642 11.5 16 11.1642 16 10.75C16 10.3358 15.6642 10 15.25 10H8.75ZM8.75 14C8.33579 14 8 14.3358 8 14.75C8 15.1642 8.33579 15.5 8.75 15.5H11.25C11.6642 15.5 12 15.1642 12 14.75C12 14.3358 11.6642 14 11.25 14H8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'page-text'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}