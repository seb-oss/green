import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-wall-left
 */
@gdsCustomElement('gds-icon-arrow-wall-left')
export class IconArrowWallLeft extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M11 7.75L6.75 12M6.75 12L11 16.25M6.75 12H21.25M2.75 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM11.5303 7.21967C11.8232 7.51256 11.8232 7.98744 11.5303 8.28033L8.56067 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H8.56065L11.5303 15.7197C11.8232 16.0126 11.8232 16.4874 11.5303 16.7803C11.2374 17.0732 10.7626 17.0732 10.4697 16.7803L6.21967 12.5303C6.07902 12.3897 6 12.1989 6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697L10.4697 7.21967C10.7626 6.92678 11.2374 6.92678 11.5303 7.21967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-wall-left'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}