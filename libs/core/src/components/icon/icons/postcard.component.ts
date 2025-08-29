import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-postcard
 */
@gdsCustomElement('gds-icon-postcard')
export class IconPostcard extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6.75 9.75H11.25M6.75 12.75H9.27M2.75 4.75H21.25V19.25H2.75V4.75ZM14.75 9.75H17.25V13.25H14.75V9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75V19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V4.75ZM6 9.75C6 9.33579 6.33579 9 6.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H6.75C6.33579 10.5 6 10.1642 6 9.75ZM14 9.75C14 9.33579 14.3358 9 14.75 9H17.25C17.6642 9 18 9.33579 18 9.75V13.25C18 13.6642 17.6642 14 17.25 14H14.75C14.3358 14 14 13.6642 14 13.25V9.75ZM6 12.75C6 12.3358 6.33579 12 6.75 12H9.27C9.68421 12 10.02 12.3358 10.02 12.75C10.02 13.1642 9.68422 13.5 9.27 13.5H6.75C6.33579 13.5 6 13.1642 6 12.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'postcard'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}