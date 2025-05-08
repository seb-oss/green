import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bookmark-remove
 */
@gdsCustomElement('gds-icon-bookmark-remove')
export class IconBookmarkRemove extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M1.75 15.25L4.75 14.1524M22.25 7.75L19.25 8.84756M19.25 8.84756V2.75H4.75V14.1524M19.25 8.84756L4.75 14.1524M19.25 12.75V21.25L12 17.25L4.75 21.25V18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V13.6282L1.49233 14.5456C1.10334 14.688 0.903363 15.1187 1.04568 15.5077C1.18799 15.8967 1.61871 16.0966 2.00771 15.9543L22.5077 8.45433C22.8967 8.31202 23.0967 7.8813 22.9544 7.4923C22.812 7.10331 22.3813 6.90333 21.9923 7.04565L20 7.77455V2.75C20 2.33579 19.6642 2 19.25 2H4.75Z" fill="currentColor"/><path d="M4 21.25V16.8227L20 10.969V21.25C20 21.5153 19.8598 21.7609 19.6313 21.8958C19.4028 22.0307 19.12 22.0349 18.8877 21.9067L12 18.1066L5.11231 21.9067C4.87998 22.0349 4.5972 22.0307 4.36871 21.8958C4.14021 21.7609 4 21.5153 4 21.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bookmark-remove'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}