import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-menu-sidebar
 */
@gdsCustomElement('gds-icon-menu-sidebar')
export class IconMenuSidebar extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M11.25 4.75H2.75V19.25H11.25M11.25 4.75H21.25V19.25H11.25M11.25 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M7.75 8.5C7.75 8.91421 7.41421 9.25 7 9.25C6.58579 9.25 6.25 8.91421 6.25 8.5C6.25 8.08579 6.58579 7.75 7 7.75C7.41421 7.75 7.75 8.08579 7.75 8.5ZM7.75 12C7.75 12.4142 7.41421 12.75 7 12.75C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.5858 6.58579 11.25 7 11.25C7.41421 11.25 7.75 11.5858 7.75 12ZM7.75 15.5C7.75 15.9142 7.41421 16.25 7 16.25C6.58579 16.25 6.25 15.9142 6.25 15.5C6.25 15.0858 6.58579 14.75 7 14.75C7.41421 14.75 7.75 15.0858 7.75 15.5Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>`
  /** @private */
  static _solidSVG = `<path d="M6 8.5C6 9.05228 6.44772 9.5 7 9.5C7.55229 9.5 8 9.05228 8 8.5C8 7.94772 7.55229 7.5 7 7.5C6.44772 7.5 6 7.94772 6 8.5Z" fill="currentColor"/><path d="M6 12C6 12.5523 6.44771 13 7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55229 11 7 11C6.44772 11 6 11.4477 6 12Z" fill="currentColor"/><path d="M6 15.5C6 16.0523 6.44771 16.5 7 16.5C7.55228 16.5 8 16.0523 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44771 14.5 6 14.9477 6 15.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75V19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V4.75ZM3.5 5.5V18.5H10.5V5.5H3.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'menu-sidebar'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}