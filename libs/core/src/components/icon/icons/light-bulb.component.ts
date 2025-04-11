import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-light-bulb
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-light-bulb')
export class IconLightBulb extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.74799 15.4838V18.25H15.2504V15.4838M8.74799 15.4838C8.33548 15.2765 7.94548 15.031 7.58263 14.7519C5.85907 13.4264 4.74829 11.3433 4.74829 9.00089C4.74829 4.99633 7.99462 1.75 11.9992 1.75C16.0037 1.75 19.2501 4.99633 19.2501 9.00089C19.2501 11.3433 18.1393 13.4264 16.4157 14.7519C16.0529 15.031 15.6629 15.2765 15.2504 15.4838M8.74799 15.4838H15.2504M8.75006 21.25H15.2501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M19.9998 9.00089C19.9998 11.249 19.072 13.2807 17.5803 14.7334H6.41753C4.9259 13.2807 3.99805 11.249 3.99805 9.00089C3.99805 4.58212 7.58016 1 11.9989 1C16.4177 1 19.9998 4.58212 19.9998 9.00089Z" fill="currentColor"/><path d="M7.99775 18.25V16.2334H16.0001V18.25C16.0001 18.6642 15.6643 19 15.2501 19H8.74775C8.33354 19 7.99775 18.6642 7.99775 18.25Z" fill="currentColor"/><path d="M8.75 20.5C8.33579 20.5 8 20.8358 8 21.25C8 21.6642 8.33579 22 8.75 22H15.25C15.6642 22 16 21.6642 16 21.25C16 20.8358 15.6642 20.5 15.25 20.5H8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'light-bulb'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}