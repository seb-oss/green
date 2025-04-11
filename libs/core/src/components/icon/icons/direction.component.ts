import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-direction
 */
@gdsCustomElement('gds-icon-direction')
export class IconDirection extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 9V3.75H19.25L21.25 6.5L19.25 9H12ZM12 9V14M12 9H4.75L2.75 11.5L4.75 14H12M12 14V20.25M12 20.25H7.75M12 20.25H16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 3C11.5858 3 11.25 3.33579 11.25 3.75V8.25H4.75C4.52216 8.25 4.30668 8.35357 4.16435 8.53148L2.16435 11.0315C1.94522 11.3054 1.94522 11.6946 2.16435 11.9685L4.16435 14.4685C4.30668 14.6464 4.52216 14.75 4.75 14.75H11.25V19.5H7.75C7.33579 19.5 7 19.8358 7 20.25C7 20.6642 7.33579 21 7.75 21H16.25C16.6642 21 17 20.6642 17 20.25C17 19.8358 16.6642 19.5 16.25 19.5H12.75V9.75H19.25C19.4778 9.75 19.6933 9.64643 19.8357 9.46852L21.8357 6.96852C22.0468 6.70464 22.0553 6.33217 21.8566 6.05887L19.8566 3.30887C19.7154 3.11481 19.49 3 19.25 3H12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'direction'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}