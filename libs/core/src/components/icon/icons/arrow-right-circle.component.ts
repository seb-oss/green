import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-right-circle
 */
@gdsCustomElement('gds-icon-arrow-right-circle')
export class IconArrowRightCircle extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M13 8.75L16.25 12L13 15.25M7.75 12H15.5M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.5303 8.21967L16.7803 11.4697C17.0732 11.7626 17.0732 12.2374 16.7803 12.5303L13.5303 15.7803C13.2374 16.0732 12.7626 16.0732 12.4697 15.7803C12.1768 15.4874 12.1768 15.0126 12.4697 14.7197L14.4393 12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H14.4393L12.4697 9.28033C12.1768 8.98744 12.1768 8.51256 12.4697 8.21967C12.7626 7.92678 13.2374 7.92678 13.5303 8.21967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-right-circle'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}