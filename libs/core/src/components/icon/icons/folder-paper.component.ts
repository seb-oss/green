import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-folder-paper
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-folder-paper')
export class IconFolderPaper extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M16.25 5.75H20.25V10.75M3.75 7.75V3.75H16.25V10.75M3.75 7.75H2.75V20.25H21.25V10.75H20.25M3.75 7.75H8.75L11.75 10.75H16.25M16.25 10.75H20.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H16.25C16.6642 3 17 3.33579 17 3.75V5H20.25C20.6642 5 21 5.33579 21 5.75V10H21.25C21.6642 10 22 10.3358 22 10.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V7.75C2 7.33579 2.33579 7 2.75 7H3V3.75ZM19.5 10V6.5H17V10H19.5ZM15.5 10V4.5H4.5V7H8.75C8.94891 7 9.13968 7.07902 9.28033 7.21967L12.0607 10H15.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'folder-paper'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}