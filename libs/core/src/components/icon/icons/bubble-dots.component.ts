import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubble-dots
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-bubble-dots')
export class IconBubbleDots extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.25 11.25C7.25 11.6642 7.58579 12 8 12C8.41421 12 8.75 11.6642 8.75 11.25C8.75 10.8358 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25ZM11.25 11.25C11.25 11.6642 11.5858 12 12 12C12.4142 12 12.75 11.6642 12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25ZM15.25 11.25C15.25 11.6642 15.5858 12 16 12C16.4142 12 16.75 11.6642 16.75 11.25C16.75 10.8358 16.4142 10.5 16 10.5C15.5858 10.5 15.25 10.8358 15.25 11.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="square"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V18.25C21 18.6642 20.6642 19 20.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H3.75C3.33579 19 3 18.6642 3 18.25V3.75ZM7 11.25C7 11.8023 7.44772 12.25 8 12.25C8.55228 12.25 9 11.8023 9 11.25C9 10.6977 8.55228 10.25 8 10.25C7.44772 10.25 7 10.6977 7 11.25ZM11 11.25C11 11.8023 11.4477 12.25 12 12.25C12.5523 12.25 13 11.8023 13 11.25C13 10.6977 12.5523 10.25 12 10.25C11.4477 10.25 11 10.6977 11 11.25ZM16 12.25C15.4477 12.25 15 11.8023 15 11.25C15 10.6977 15.4477 10.25 16 10.25C16.5523 10.25 17 10.6977 17 11.25C17 11.8023 16.5523 12.25 16 12.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubble-dots'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}