import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-smartwatch
 */
@gdsCustomElement('gds-icon-smartwatch')
export class IconSmartwatch extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 8.75V12L13.5 13.5M4.75 4.75H19.25V19.25H4.75V4.75ZM7 4.75L8 1.75H16L17 4.75H7ZM7 19.25L8 22.25H16L17 19.25H7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.28849 1.51283C7.39058 1.20657 7.67718 1 8.00001 1H16C16.3228 1 16.6094 1.20657 16.7115 1.51283L17.5406 4H19.25C19.6642 4 20 4.33579 20 4.75V19.25C20 19.6642 19.6642 20 19.25 20H17.5406L16.7115 22.4872C16.6094 22.7934 16.3228 23 16 23H8.00001C7.67718 23 7.39058 22.7934 7.28849 22.4872L6.45944 20H4.75C4.33579 20 4 19.6642 4 19.25V4.75C4 4.33579 4.33579 4 4.75 4H6.45944L7.28849 1.51283ZM8.04058 4H15.9594L15.4594 2.5H8.54058L8.04058 4ZM8.04058 20L8.54058 21.5H15.4594L15.9594 20H8.04058ZM12 8C12.4142 8 12.75 8.33579 12.75 8.75V11.6893L14.0303 12.9697C14.3232 13.2626 14.3232 13.7374 14.0303 14.0303C13.7374 14.3232 13.2626 14.3232 12.9697 14.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8.75C11.25 8.33579 11.5858 8 12 8Z" fill="currentColor"/>`
  /** @private */
  static _name = 'smartwatch'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}