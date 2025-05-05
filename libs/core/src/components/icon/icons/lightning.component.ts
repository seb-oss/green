import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-lightning
 */
@gdsCustomElement('gds-icon-lightning')
export class IconLightning extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 12.75L8.75 2.75H18L15.25 8.25H21.25L6.75 21.25L8.89706 12.75H3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M8.75 2C8.46592 2 8.20622 2.1605 8.07918 2.41459L3.07918 12.4146C2.96293 12.6471 2.97536 12.9232 3.11201 13.1443C3.24867 13.3654 3.49007 13.5 3.75 13.5H7.93406L6.02284 21.0663C5.94205 21.3862 6.07973 21.7212 6.36205 21.8919C6.64437 22.0625 7.00504 22.0286 7.25066 21.8084L21.7507 8.80843C21.9821 8.60095 22.0615 8.27225 21.9505 7.98197C21.8394 7.69169 21.5608 7.5 21.25 7.5H16.4635L18.6708 3.08541C18.7871 2.85292 18.7746 2.57681 18.638 2.3557C18.5013 2.13459 18.2599 2 18 2H8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'lightning'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}