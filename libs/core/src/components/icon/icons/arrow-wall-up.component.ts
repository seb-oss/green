import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-wall-up
 */
@gdsCustomElement('gds-icon-arrow-wall-up')
export class IconArrowWallUp extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M16.25 11L12 6.75M12 6.75L7.75 11M12 6.75V21.25M19.25 2.75H4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5H4.75C4.33579 3.5 4 3.16421 4 2.75ZM12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967L16.7803 10.4697C17.0732 10.7626 17.0732 11.2374 16.7803 11.5303C16.4874 11.8232 16.0126 11.8232 15.7197 11.5303L12.75 8.56067V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V8.56065L8.28033 11.5303C7.98743 11.8232 7.51256 11.8232 7.21967 11.5303C6.92678 11.2374 6.92678 10.7626 7.21967 10.4697L11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-wall-up'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}