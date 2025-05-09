import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-heart-beat
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-heart-beat')
export class IconHeartBeat extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.25 12H15.15L13.5 15L10.5 9L8.85 12H6.75M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5189 6.84578C23.0877 10.7671 21.0886 16.5047 12.3689 21.404C12.1408 21.5322 11.8623 21.5322 11.6341 21.404C2.91438 16.5047 0.915246 10.7672 2.48404 6.8458C3.25119 4.92822 4.8589 3.55922 6.74877 3.13681C8.4672 2.75271 10.3616 3.16312 12.0015 4.54956C13.6413 3.16312 15.5357 2.75271 17.2542 3.1368C19.144 3.55922 20.7518 4.92821 21.5189 6.84578ZM11.1708 8.66459C11.0461 8.41523 10.7934 8.25561 10.5147 8.25014C10.236 8.24468 9.97719 8.39428 9.84284 8.63856L8.40655 11.25H6.75C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75H8.85C9.12352 12.75 9.37535 12.6011 9.50716 12.3614L10.4684 10.6138L12.8292 15.3354C12.9539 15.5848 13.2066 15.7444 13.4853 15.7499C13.764 15.7553 14.0228 15.6057 14.1572 15.3614L15.5935 12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H15.15C14.8765 11.25 14.6247 11.3989 14.4928 11.6386L13.5316 13.3862L11.1708 8.66459Z" fill="currentColor"/>`
  /** @private */
  static _name = 'heart-beat'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}