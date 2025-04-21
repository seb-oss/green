import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-box-right
 */
@gdsCustomElement('gds-icon-arrow-box-right')
export class IconArrowBoxRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M14.75 3.75L20.25 3.75V20.25H14.75M15 12L3.75 12M15 12L11.5 15.5M15 12L11.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 4.5L14.75 4.5C14.3358 4.5 14 4.16421 14 3.75C14 3.33579 14.3358 3 14.75 3L20.25 3C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H14.75C14.3358 21 14 20.6642 14 20.25C14 19.8358 14.3358 19.5 14.75 19.5H19.5V4.5ZM10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967L15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303L12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303C10.6768 15.7374 10.6768 15.2626 10.9697 14.9697L13.1893 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L13.1893 11.25L10.9697 9.03033C10.6768 8.73744 10.6768 8.26257 10.9697 7.96967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-box-right'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}