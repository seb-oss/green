import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-cursor
 */
@gdsCustomElement('gds-icon-cursor')
export class IconCursor extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.25 3.25L9.93056 21.75L13.5278 13.5278L21.75 9.93056L3.25 3.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3.50475 2.54461C3.23125 2.44584 2.92531 2.51407 2.71969 2.71969C2.51407 2.92531 2.44584 3.23125 2.54461 3.50475L9.22516 22.0048C9.32942 22.2935 9.59909 22.4895 9.90588 22.4996C10.2127 22.5097 10.4947 22.3319 10.6177 22.0506L14.0973 14.0973L22.0506 10.6177C22.3319 10.4947 22.5097 10.2127 22.4996 9.90588C22.4895 9.59909 22.2935 9.32942 22.0048 9.22516L3.50475 2.54461Z" fill="currentColor"/>`
  /** @private */
  static _name = 'cursor'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}