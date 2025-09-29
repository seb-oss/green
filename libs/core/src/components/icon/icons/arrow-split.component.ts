import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-split
 */
@gdsCustomElement('gds-icon-arrow-split')
export class IconArrowSplit extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 9.25V3.75M3.75 3.75H9.25M3.75 3.75L12 12M14.75 3.75H20.25M20.25 3.75V9.25M20.25 3.75L12 12M12 12V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H9.25C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H5.56066L12 10.9393L18.4393 4.5H14.75C14.3358 4.5 14 4.16421 14 3.75C14 3.33579 14.3358 3 14.75 3H20.25C20.6642 3 21 3.33579 21 3.75V9.25C21 9.66421 20.6642 10 20.25 10C19.8358 10 19.5 9.66421 19.5 9.25V5.56066L12.75 12.3107V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.3107L4.5 5.56066V9.25C4.5 9.66421 4.16421 10 3.75 10C3.33579 10 3 9.66421 3 9.25V3.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-split'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}