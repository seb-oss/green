import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-folder-add-right
 */
@gdsCustomElement('gds-icon-folder-add-right')
export class IconFolderAddRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M11.25 19.25H2.75V3.75H10L12 6.75H21.25V10.25M18 13.75V17M18 17V20.25M18 17H14.75M18 17H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M10 3C10.2508 3 10.4849 3.12533 10.624 3.33397L12.1787 5.66603C12.3178 5.87467 12.552 6 12.8028 6H21.25C21.6642 6 22 6.33579 22 6.75V12.5278C20.9385 11.5777 19.5367 11 18 11C14.6863 11 12 13.6863 12 17C12 18.0929 12.2922 19.1175 12.8027 20H2.75C2.33579 20 2 19.6642 2 19.25V3.75C2 3.33579 2.33579 3 2.75 3H10Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18.4142 13 18.75 13.3358 18.75 13.75V16.25H21.25C21.6642 16.25 22 16.5858 22 17C22 17.4142 21.6642 17.75 21.25 17.75H18.75V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V17.75H14.75C14.3358 17.75 14 17.4142 14 17C14 16.5858 14.3358 16.25 14.75 16.25H17.25V13.75C17.25 13.3358 17.5858 13 18 13Z" fill="currentColor"/>`
  /** @private */
  static _name = 'folder-add-right'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}