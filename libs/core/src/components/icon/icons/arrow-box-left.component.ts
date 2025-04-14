import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-box-left
 */
@gdsCustomElement('gds-icon-arrow-box-left')
export class IconArrowBoxLeft extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20.25 12L9 12M20.25 12L15.75 16.5M20.25 12L15.75 7.5M11.25 20.25H3.75L3.75 3.75L11.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3L11.25 3C11.6642 3 12 3.33579 12 3.75C12 4.16421 11.6642 4.5 11.25 4.5L4.5 4.5L4.5 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25L3 3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967ZM15.2197 6.96967C15.5126 6.67678 15.9874 6.67678 16.2803 6.96967L20.7803 11.4697C21.0732 11.7626 21.0732 12.2374 20.7803 12.5303L16.2803 17.0303C15.9874 17.3232 15.5126 17.3232 15.2197 17.0303C14.9268 16.7374 14.9268 16.2626 15.2197 15.9697L18.4393 12.75L9 12.75C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25L18.4393 11.25L15.2197 8.03033C14.9268 7.73744 14.9268 7.26256 15.2197 6.96967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-box-left'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}