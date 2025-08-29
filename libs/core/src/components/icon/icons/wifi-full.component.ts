import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-wifi-full
 */
@gdsCustomElement('gds-icon-wifi-full')
export class IconWifiFull extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21 7.82177C15.751 3.72477 8.249 3.72477 3 7.82177M6.75098 13.3144C9.81298 10.9264 14.188 10.9264 17.25 13.3144" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18.25C12.4142 18.25 12.75 18.5858 12.75 19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19C11.25 18.5858 11.5858 18.25 12 18.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M2.53857 7.23055C8.05879 2.92185 15.9413 2.92185 21.4615 7.23055C21.788 7.48541 21.8461 7.95672 21.5913 8.28324C21.3364 8.60977 20.8651 8.66786 20.5386 8.413C15.5608 4.5277 8.43928 4.5277 3.4615 8.413C3.13498 8.66786 2.66367 8.60977 2.40881 8.28324C2.15395 7.95672 2.21204 7.48541 2.53857 7.23055Z" fill="currentColor"/><path d="M16.7888 13.9058C13.9979 11.7293 10.0031 11.7293 7.21224 13.9058C6.88561 14.1606 6.41433 14.1023 6.1596 13.7757C5.90487 13.449 5.96315 12.9778 6.28978 12.723C9.62291 10.1236 14.3781 10.1236 17.7112 12.723C18.0379 12.9778 18.0962 13.449 17.8414 13.7757C17.5867 14.1023 17.1154 14.1606 16.7888 13.9058Z" fill="currentColor"/><path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>`
  /** @private */
  static _name = 'wifi-full'
  /** @private */
  static _width = 25
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 25 24'
}