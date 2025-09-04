import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-basket
 */
@gdsCustomElement('gds-icon-basket')
export class IconBasket extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M1.75 2.75H3.5L6 15.25H19.5L21.25 5.75H4.5M9.25 19C9.25 19.6904 8.69036 20.25 8 20.25C7.30964 20.25 6.75 19.6904 6.75 19C6.75 18.3096 7.30964 17.75 8 17.75C8.69036 17.75 9.25 18.3096 9.25 19ZM18.25 19C18.25 19.6904 17.6904 20.25 17 20.25C16.3096 20.25 15.75 19.6904 15.75 19C15.75 18.3096 16.3096 17.75 17 17.75C17.6904 17.75 18.25 18.3096 18.25 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2C1.33579 2 1 2.33579 1 2.75C1 3.16421 1.33579 3.5 1.75 3.5H2.88515L5.26456 15.3971C5.33468 15.7477 5.64249 16 6 16H19.5C19.8618 16 20.172 15.7417 20.2376 15.3859L21.9876 5.88587C22.0279 5.66686 21.9689 5.44125 21.8264 5.27011C21.6839 5.09897 21.4727 5 21.25 5H4.71485L4.23544 2.60291C4.16532 2.25234 3.85751 2 3.5 2H1.75Z" fill="currentColor"/><path d="M8 17C6.89543 17 6 17.8954 6 19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19C10 17.8954 9.10457 17 8 17Z" fill="currentColor"/><path d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17Z" fill="currentColor"/>`
  /** @private */
  static _name = 'basket'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}