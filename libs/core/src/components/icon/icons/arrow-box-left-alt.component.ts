import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-box-left-alt
 */
@gdsCustomElement('gds-icon-arrow-box-left-alt')
export class IconArrowBoxLeftAlt extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 12L15 12M3.75 12L8.25 16.5M3.75 12L8.25 7.5M12.75 20.25H20.25V3.75H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H12.75C12.3358 21 12 20.6642 12 20.25C12 19.8358 12.3358 19.5 12.75 19.5H19.5V4.5H12.75C12.3358 4.5 12 4.16421 12 3.75C12 3.33579 12.3358 3 12.75 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803ZM8.78033 17.0303C8.48744 17.3232 8.01256 17.3232 7.71967 17.0303L3.21967 12.5303C2.92678 12.2374 2.92678 11.7626 3.21967 11.4697L7.71967 6.96967C8.01256 6.67678 8.48744 6.67677 8.78033 6.96967C9.07322 7.26256 9.07322 7.73744 8.78033 8.03033L5.56066 11.25L15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75L5.56066 12.75L8.78033 15.9697C9.07322 16.2626 9.07322 16.7374 8.78033 17.0303Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-box-left-alt'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}