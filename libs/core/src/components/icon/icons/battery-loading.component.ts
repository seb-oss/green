import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-battery-loading
 */
@gdsCustomElement('gds-icon-battery-loading')
export class IconBatteryLoading extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M7.75 5.75H1.75V18.25H5.25M15.75 5.75H19.25V18.25H13.25M12.25 5.75L7.5 12H13.5L8.75 18.25M19.25 8.75H22.25V15.25H19.25V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M1.75 5H11.8125L6.9 11.55C6.72955 11.7773 6.70214 12.0813 6.82918 12.3354C6.95622 12.5895 7.21592 12.75 7.5 12.75H12L7.3125 19H1.75C1.33579 19 1 18.6642 1 18.25V5.75C1 5.33579 1.33579 5 1.75 5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 19H9.1875L14.1 12.45C14.2704 12.2227 14.2979 11.9187 14.1708 11.6646C14.0438 11.4105 13.7841 11.25 13.5 11.25H9L13.6875 5H19.25C19.6642 5 20 5.33579 20 5.75V8H22.25C22.6642 8 23 8.33579 23 8.75V15.25C23 15.6642 22.6642 16 22.25 16H20V18.25C20 18.6642 19.6642 19 19.25 19ZM20 14.5H21.5V9.5H20V14.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'battery-loading'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}