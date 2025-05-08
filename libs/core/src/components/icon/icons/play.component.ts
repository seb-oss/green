import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-play
 */
@gdsCustomElement('gds-icon-play')
export class IconPlay extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21.25 12L5.75 2.75V21.25L21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M6.13434 2.10597C5.90259 1.96766 5.6144 1.96454 5.3797 2.09779C5.145 2.23104 5 2.48011 5 2.75V21.25C5 21.5199 5.145 21.769 5.3797 21.9022C5.6144 22.0355 5.90259 22.0323 6.13434 21.894L21.6343 12.644C21.8611 12.5087 22 12.2641 22 12C22 11.7359 21.8611 11.4913 21.6343 11.356L6.13434 2.10597Z" fill="currentColor"/>`
  /** @private */
  static _name = 'play'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}