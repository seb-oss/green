import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-circle-ban
 */
@gdsCustomElement('gds-icon-circle-ban')
export class IconCircleBan extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M18.5407 5.45926C16.8668 3.78534 14.5543 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5543 3.78534 16.8668 5.45926 18.5407M18.5407 5.45926C20.2147 7.13318 21.25 9.44568 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C9.44568 21.25 7.13318 20.2147 5.45926 18.5407M18.5407 5.45926L5.45926 18.5407" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  /** @private */
  static _solidSVG = `<path d="M18.5209 4.4184C16.7701 2.91114 14.4915 2 12 2C6.47715 2 2 6.47715 2 12C2 14.4915 2.91114 16.7701 4.4184 18.5209L18.5209 4.4184Z" fill="currentColor"/><path d="M19.5816 5.47906L5.47906 19.5816C7.22987 21.0889 9.50853 22 12 22C17.5228 22 22 17.5228 22 12C22 9.50853 21.0889 7.22987 19.5816 5.47906Z" fill="currentColor"/>`
  /** @private */
  static _name = 'circle-ban'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}