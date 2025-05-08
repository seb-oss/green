import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrows-repeat
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-arrows-repeat')
export class IconArrowsRepeat extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 13.25V4.75H15.1071M12.6457 1.75L15.7529 4.75L12.6457 7.75M20.25 10.75V19.25H8.89286M11.3543 22.25L8.24714 19.25L11.3543 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1062 1.22905C12.3939 0.931069 12.8687 0.922739 13.1667 1.21045L16.2738 4.21045C16.4202 4.35178 16.5029 4.54653 16.5029 4.75C16.5029 4.95348 16.4202 5.14822 16.2738 5.28955L13.1667 8.28955C12.8687 8.57726 12.3939 8.56893 12.1062 8.27095C11.8185 7.97296 11.8268 7.49816 12.1248 7.21045L13.8963 5.5H4.5V13.25C4.5 13.6642 4.16421 14 3.75 14C3.33579 14 3 13.6642 3 13.25V4.75C3 4.33579 3.33579 4 3.75 4H13.8963L12.1248 2.28955C11.8268 2.00184 11.8185 1.52704 12.1062 1.22905ZM20.25 10C20.6642 10 21 10.3358 21 10.75V19.25C21 19.6642 20.6642 20 20.25 20H10.1037L11.8752 21.7104C12.1732 21.9982 12.1815 22.473 11.8938 22.7709C11.6061 23.0689 11.1313 23.0773 10.8333 22.7896L7.7262 19.7896C7.57982 19.6482 7.49714 19.4535 7.49714 19.25C7.49714 19.0465 7.57982 18.8518 7.7262 18.7104L10.8333 15.7105C11.1313 15.4227 11.6061 15.4311 11.8938 15.7291C12.1815 16.027 12.1732 16.5018 11.8752 16.7896L10.1037 18.5H19.5V10.75C19.5 10.3358 19.8358 10 20.25 10Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrows-repeat'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}