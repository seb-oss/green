import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-macbook-air
 */
@gdsCustomElement('gds-icon-macbook-air')
export class IconMacbookAir extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21.25 13.75V4.75H2.75V13.75M1.75 16.75V18.25C1.75 18.8023 2.19772 19.25 2.75 19.25H21.25C21.8023 19.25 22.25 18.8023 22.25 18.25V16.75H15.075L14.1 17.25H10L8.925 16.75H1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M1.75 17C1.33579 17 1 17.3358 1 17.75V18.25C1 19.2165 1.7835 20 2.75 20H21.25C22.2165 20 23 19.2165 23 18.25V17.75C23 17.3358 22.6642 17 22.25 17H15.075C14.956 17 14.8387 17.0283 14.7328 17.0826L14.08 17.4174C13.9741 17.4717 13.8568 17.5 13.7378 17.5H10.3318C10.2225 17.5 10.1145 17.4761 10.0155 17.43L9.2413 17.07C9.14222 17.0239 9.03427 17 8.925 17H1.75Z" fill="currentColor"/><path d="M2.75 4C2.33579 4 2 4.33579 2 4.75V15.25C2 15.6642 2.33579 16 2.75 16H21.25C21.6642 16 22 15.6642 22 15.25V4.75C22 4.33579 21.6642 4 21.25 4H2.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'macbook-air'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}