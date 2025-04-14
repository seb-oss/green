import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-grabber-vertical
 */
@gdsCustomElement('gds-icon-chevron-grabber-vertical')
export class IconChevronGrabberVertical extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L16.5303 8.46967C16.8232 8.76256 16.8232 9.23744 16.5303 9.53033C16.2374 9.82322 15.7626 9.82322 15.4697 9.53033L12 6.06066L8.53033 9.53033C8.23744 9.82322 7.76256 9.82322 7.46967 9.53033C7.17678 9.23744 7.17678 8.76256 7.46967 8.46967L11.4697 4.46967ZM7.46967 14.4697C7.76256 14.1768 8.23744 14.1768 8.53033 14.4697L12 17.9393L15.4697 14.4697C15.7626 14.1768 16.2374 14.1768 16.5303 14.4697C16.8232 14.7626 16.8232 15.2374 16.5303 15.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303L7.46967 15.5303C7.17678 15.2374 7.17678 14.7626 7.46967 14.4697Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-grabber-vertical'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}