import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-light-bulb-simple
 */
@gdsCustomElement('gds-icon-light-bulb-simple')
export class IconLightBulbSimple extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.74799 17.75V16.4838C8.33548 16.2765 7.94548 16.031 7.58263 15.7519C5.85907 14.4264 4.74829 12.3433 4.74829 10.0009C4.74829 5.99633 7.99462 2.75 11.9992 2.75C16.0037 2.75 19.2501 5.99633 19.2501 10.0009C19.2501 12.3433 18.1393 14.4264 16.4157 15.7519C16.0529 16.031 15.6629 16.2765 15.2504 16.4838V17.75M8.74799 17.75V18.9988C8.74799 20.7944 10.2036 22.25 11.9992 22.25C13.7948 22.25 15.2504 20.7944 15.2504 18.9988V17.75M8.74799 17.75H15.2504" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3.99823 10.0009C3.99823 5.58212 7.58035 2 11.9991 2C16.4179 2 20 5.58212 20 10.0009C20 12.5861 18.7731 14.885 16.8729 16.3465C16.5959 16.5595 16.3045 16.7549 16.0003 16.9308V17H7.99793V16.9308C7.69377 16.7549 7.40234 16.5595 7.12534 16.3465C5.22513 14.885 3.99823 12.5861 3.99823 10.0009Z" fill="currentColor"/><path d="M7.99793 18.5V18.9988C7.99793 21.2086 9.78932 23 11.9991 23C14.2089 23 16.0003 21.2086 16.0003 18.9988V18.5H7.99793Z" fill="currentColor"/>`
  /** @private */
  static _name = 'light-bulb-simple'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}