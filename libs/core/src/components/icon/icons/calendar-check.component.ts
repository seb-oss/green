import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-calendar-check
 */
@gdsCustomElement('gds-icon-calendar-check')
export class IconCalendarCheck extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V12.25M21.25 15.75L16.9167 21.25L14.75 19.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V12.25C19.5 12.6642 19.8358 13 20.25 13C20.6642 13 21 12.6642 21 12.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M21.8391 16.2142C22.0955 15.8888 22.0395 15.4172 21.7142 15.1609C21.3888 14.9045 20.9172 14.9605 20.6609 15.2858L16.8541 20.1176L15.2844 18.5237C14.9937 18.2286 14.5189 18.225 14.2237 18.5156C13.9286 18.8063 13.925 19.2811 14.2156 19.5763L16.3823 21.7763C16.5334 21.9297 16.7431 22.0107 16.9581 21.9989C17.173 21.987 17.3725 21.8833 17.5058 21.7142L21.8391 16.2142Z" fill="currentColor"/>`
  /** @private */
  static _name = 'calendar-check'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}