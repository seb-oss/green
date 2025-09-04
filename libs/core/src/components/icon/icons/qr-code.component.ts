import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-qr-code
 */
@gdsCustomElement('gds-icon-qr-code')
export class IconQrCode extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M13.75 13.75V16.25H16.25M17.75 13.75H20.25M20.25 17.75H17.75V20.25M13.75 19.75V20.25M3.75 3.75H10.25V10.25H3.75V3.75ZM13.75 3.75H20.25V10.25H13.75V3.75ZM3.75 13.75H10.25V20.25H3.75V13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H10.25C10.6642 3 11 3.33579 11 3.75V10.25C11 10.6642 10.6642 11 10.25 11H3.75C3.33579 11 3 10.6642 3 10.25V3.75ZM4.5 4.5V9.5H9.5V4.5H4.5ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11H13.75C13.3358 11 13 10.6642 13 10.25V3.75ZM14.5 4.5V9.5H19.5V4.5H14.5ZM3 13.75C3 13.3358 3.33579 13 3.75 13H10.25C10.6642 13 11 13.3358 11 13.75V20.25C11 20.6642 10.6642 21 10.25 21H3.75C3.33579 21 3 20.6642 3 20.25V13.75ZM4.5 14.5V19.5H9.5V14.5H4.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 13C14.1642 13 14.5 13.3358 14.5 13.75V15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H13.75C13.3358 17 13 16.6642 13 16.25V13.75C13 13.3358 13.3358 13 13.75 13ZM17 13.75C17 13.3358 17.3358 13 17.75 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H17.75C17.3358 14.5 17 14.1642 17 13.75ZM17 17.75C17 17.3358 17.3358 17 17.75 17H20.25C20.6642 17 21 17.3358 21 17.75C21 18.1642 20.6642 18.5 20.25 18.5H18.5V20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25V17.75Z" fill="currentColor"/><path d="M5.5 15.5H8.5V18.5H5.5V15.5Z" fill="currentColor"/><path d="M5.5 5.5H8.5V8.5H5.5V5.5Z" fill="currentColor"/><path d="M15.5 5.5H18.5V8.5H15.5V5.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 19C14.1642 19 14.5 19.3358 14.5 19.75V20.25C14.5 20.6642 14.1642 21 13.75 21C13.3358 21 13 20.6642 13 20.25V19.75C13 19.3358 13.3358 19 13.75 19Z" fill="currentColor"/>`
  /** @private */
  static _name = 'qr-code'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}