import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-fast-forward
 */
@gdsCustomElement('gds-icon-fast-forward')
export class IconFastForward extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.75 11.6324V5.75L21.25 12L12.75 18.25V12.3676M12.75 11.6324L4.75 5.75V18.25L12.75 12.3676M12.75 11.6324V12.3676" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M5.19429 5.14577C4.96646 4.97824 4.66376 4.95311 4.41141 5.08078C4.15907 5.20845 4 5.4672 4 5.75V18.25C4 18.5328 4.15907 18.7916 4.41141 18.9192C4.66376 19.0469 4.96646 19.0218 5.19429 18.8542L12 13.85V18.25C12 18.5328 12.1591 18.7916 12.4114 18.9192C12.6638 19.0469 12.9665 19.0218 13.1943 18.8542L21.6943 12.6042C21.8865 12.4629 22 12.2386 22 12C22 11.7614 21.8865 11.5371 21.6943 11.3958L13.1943 5.14577C12.9665 4.97824 12.6638 4.95311 12.4114 5.08078C12.1591 5.20845 12 5.4672 12 5.75V10.15L5.19429 5.14577Z" fill="currentColor"/>`
  /** @private */
  static _name = 'fast-forward'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}