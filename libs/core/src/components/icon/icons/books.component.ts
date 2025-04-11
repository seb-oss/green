import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-books
 */
@gdsCustomElement('gds-icon-books')
export class IconBooks extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6.75 20.25V5.75H2.75V20.25H6.75ZM6.75 20.25H13.25V3.75H6.75V20.25ZM6.75 7.875H13.25M6.75 16.125H13.25M14 7.25L18.3467 6.08531L21.8407 19.1253L17.4941 20.29L14 7.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9567 7.3927C13.8426 6.99453 14.0728 6.5792 14.4709 6.46502L17.8354 5.50029C18.2335 5.38612 18.6489 5.61634 18.763 6.01451L22.4841 18.9915C22.5983 19.3897 22.3681 19.805 21.9699 19.9192L18.6055 20.884C18.2073 20.9981 17.792 20.7679 17.6778 20.3697L13.9567 7.3927Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 3C7.33579 3 7 3.33579 7 3.75V20.25C7 20.6642 7.33579 21 7.75 21H13.25C13.6642 21 14 20.6642 14 20.25V3.75C14 3.33579 13.6642 3 13.25 3H7.75ZM8.5 7.75C8.5 7.33579 8.83579 7 9.25 7H11.75C12.1642 7 12.5 7.33579 12.5 7.75C12.5 8.16421 12.1642 8.5 11.75 8.5H9.25C8.83579 8.5 8.5 8.16421 8.5 7.75ZM12.5 16.25C12.5 15.8358 12.1642 15.5 11.75 15.5H9.25C8.83579 15.5 8.5 15.8358 8.5 16.25C8.5 16.6642 8.83579 17 9.25 17H11.75C12.1642 17 12.5 16.6642 12.5 16.25Z" fill="currentColor"/><path d="M2.75 5C2.33579 5 2 5.33579 2 5.75V20.25C2 20.6642 2.33579 21 2.75 21H5.25C5.66421 21 6 20.6642 6 20.25V5.75C6 5.33579 5.66421 5 5.25 5H2.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'books'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}