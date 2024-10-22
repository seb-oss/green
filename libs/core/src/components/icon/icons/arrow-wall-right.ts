import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-wall-right
 */
@gdsCustomElement('gds-icon-arrow-wall-right')
export class IconArrowWallRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M13 7.75L17.25 12M17.25 12L13 16.25M17.25 12H2.75M21.25 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M22 4.75C22 4.33579 21.6642 4 21.25 4C20.8358 4 20.5 4.33579 20.5 4.75V19.25C20.5 19.6642 20.8358 20 21.25 20C21.6642 20 22 19.6642 22 19.25V4.75Z" fill="currentColor"/><path d="M13.5303 7.21967C13.2374 6.92678 12.7626 6.92678 12.4697 7.21967C12.1768 7.51256 12.1768 7.98744 12.4697 8.28033L15.4393 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H15.4393L12.4697 15.7197C12.1768 16.0126 12.1768 16.4874 12.4697 16.7803C12.7626 17.0732 13.2374 17.0732 13.5303 16.7803L17.7803 12.5303C17.921 12.3897 18 12.1989 18 12C18 11.8011 17.921 11.6103 17.7803 11.4697L13.5303 7.21967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-wall-right'
}
