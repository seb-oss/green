import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubble-text
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-bubble-text')
export class IconBubbleText extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.25 9H8.75M15.25 13H8.75M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V18.25C21 18.6642 20.6642 19 20.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H3.75C3.33579 19 3 18.6642 3 18.25V3.75ZM8.75 8.25C8.33579 8.25 8 8.58579 8 9C8 9.41421 8.33579 9.75 8.75 9.75H15.25C15.6642 9.75 16 9.41421 16 9C16 8.58579 15.6642 8.25 15.25 8.25H8.75ZM8.75 12.25C8.33579 12.25 8 12.5858 8 13C8 13.4142 8.33579 13.75 8.75 13.75H15.25C15.6642 13.75 16 13.4142 16 13C16 12.5858 15.6642 12.25 15.25 12.25H8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubble-text'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}