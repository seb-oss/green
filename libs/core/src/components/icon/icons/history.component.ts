import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-history
 */
@gdsCustomElement('gds-icon-history')
export class IconHistory extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 7.75V12L15.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.75 4.75V8.75H6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.25 15.0833C4.52169 18.676 7.95303 21.25 11.9864 21.25C17.1026 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1026 2.75 11.9864 2.75C8.14808 2.75 4.85497 5.08106 3.44947 8.40278" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.47239 8H6.75C7.16421 8 7.5 8.33579 7.5 8.75C7.5 9.16421 7.16421 9.5 6.75 9.5H2.75C2.33579 9.5 2 9.16421 2 8.75V4.75C2 4.33579 2.33579 4 2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V6.68977C5.27085 3.87322 8.4092 2 11.9864 2C17.5157 2 22 6.47612 22 12C22 17.5239 17.5157 22 11.9864 22C7.626 22 3.91756 19.2169 2.54299 15.3336C2.40477 14.9431 2.60927 14.5145 2.99974 14.3763C3.39021 14.2381 3.8188 14.4426 3.95701 14.8331C5.12582 18.1351 8.28007 20.5 11.9864 20.5C16.6894 20.5 20.5 16.6934 20.5 12C20.5 7.30661 16.6894 3.5 11.9864 3.5C8.73357 3.5 5.90591 5.32143 4.47239 8ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.6893L16.0303 14.9697C16.3232 15.2626 16.3232 15.7374 16.0303 16.0303C15.7374 16.3232 15.2626 16.3232 14.9697 16.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V7.75C11.25 7.33579 11.5858 7 12 7Z" fill="currentColor"/>`
  /** @private */
  static _name = 'history'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}