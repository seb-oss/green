import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-star
 */
@gdsCustomElement('gds-icon-star')
export class IconStar extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 1.75L14.9527 7.92256L21.75 8.81637L16.7775 13.525L18.0258 20.25L12 16.9876L5.97417 20.25L7.2225 13.525L2.25 8.81637L9.04734 7.92256L12 1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.6766 1.42636C12.552 1.16583 12.2888 1 12 1C11.7112 1 11.4481 1.16583 11.3234 1.42636L8.54631 7.23199L2.15224 8.07277C1.86544 8.11049 1.62589 8.30978 1.53663 8.58493C1.44736 8.86009 1.52429 9.16205 1.73434 9.36095L6.41068 13.7892L5.23679 20.1131C5.18405 20.3972 5.29924 20.6864 5.53291 20.8564C5.76657 21.0265 6.07715 21.0471 6.33127 20.9095L12 17.8404L17.6688 20.9095C17.9229 21.0471 18.2335 21.0265 18.4671 20.8564C18.7008 20.6864 18.816 20.3972 18.7633 20.1131L17.5894 13.7892L22.2657 9.36095C22.4758 9.16205 22.5527 8.86009 22.4634 8.58493C22.3742 8.30978 22.1346 8.11049 21.8478 8.07277L15.4537 7.23199L12.6766 1.42636Z" fill="currentColor"/>`
  /** @private */
  static _name = 'star'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}