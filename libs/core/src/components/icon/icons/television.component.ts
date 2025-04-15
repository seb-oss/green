import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-television
 */
@gdsCustomElement('gds-icon-television')
export class IconTelevision extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M18 20.25C16.114 19.6013 14.0967 19.25 12 19.25C9.90334 19.25 7.88601 19.6013 6 20.25M2.75 3.75H21.25V16.25H2.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V16.25C22 16.6642 21.6642 17 21.25 17H2.75C2.33579 17 2 16.6642 2 16.25V3.75Z" fill="currentColor"/><path d="M6.24416 20.9592C8.05294 20.337 9.9879 20 12.0002 20C14.0125 20 15.9475 20.337 17.7563 20.9592C18.1479 21.0939 18.5747 20.8856 18.7094 20.494C18.8442 20.1023 18.6358 19.6755 18.2442 19.5408C16.2809 18.8655 14.1812 18.5 12.0002 18.5C9.8192 18.5 7.71949 18.8655 5.75625 19.5408C5.36456 19.6755 5.15626 20.1023 5.29099 20.494C5.42572 20.8856 5.85247 21.0939 6.24416 20.9592Z" fill="currentColor"/>`
  /** @private */
  static _name = 'television'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}