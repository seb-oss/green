import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-moneybag
 */
@gdsCustomElement('gds-icon-moneybag')
export class IconMoneybag extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.42188 7.75H14.5781M9.42188 7.75C9.42188 7.75 3.74996 10.9722 3.75 16.1111C3.75003 20.2435 7.85366 21.25 12 21.25C16.1463 21.25 20.25 20.2435 20.25 16.1111C20.25 10.9722 14.5781 7.75 14.5781 7.75M9.42188 7.75L7.875 3.77778C7.875 3.77778 9.42188 2.75 12 2.75C14.5781 2.75 16.125 3.77778 16.125 3.77778L14.5781 7.75" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3.85123 19.0302C3.29425 18.1904 3.00001 17.178 3 16C3.45007 12.8495 4.71037 10.5093 7.51024 8.25H16.5V8.18559C19.2411 10.42 20.5413 12.7892 21 16C21 17.178 20.7058 18.1904 20.1488 19.0302C19.5957 19.8642 18.8228 20.469 17.9544 20.9025C16.2468 21.7548 14.0585 22 12 22C9.94146 22 7.75317 21.7548 6.04565 20.9025C5.17717 20.469 4.40435 19.8642 3.85123 19.0302Z" fill="currentColor"/><path d="M16.3342 3.97272C16.502 3.5253 16.3325 3.01495 15.901 2.80978C14.7376 2.25667 13.433 2 12 2C10.567 2 9.26242 2.25667 8.09902 2.80978C7.66747 3.01495 7.49799 3.5253 7.66577 3.97272L8.70225 6.73666L8.66667 6.75H15.3333L15.2978 6.73666L16.3342 3.97272Z" fill="currentColor"/>`
  /** @private */
  static _name = 'moneybag'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}