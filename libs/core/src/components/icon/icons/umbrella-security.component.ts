import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-umbrella-security
 */
@gdsCustomElement('gds-icon-umbrella-security')
export class IconUmbrellaSecurity extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 15.25V19.3267C12 20.3889 11.1389 21.25 10.0767 21.25C9.15988 21.25 8.37054 20.6029 8.19074 19.7039L7.99996 18.75M12 2.75V4.75M12 4.75C7.43826 4.75 3.62751 7.96518 2.71021 12.253H21.2897C20.3724 7.96518 16.5617 4.75 12 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V4.02707C6.66452 4.35893 2.91655 7.70682 1.97754 12.0961C1.93017 12.3176 1.98538 12.5486 2.12777 12.7246C2.27017 12.9007 2.48449 13.003 2.71094 13.003H21.2904C21.5169 13.003 21.7312 12.9007 21.8736 12.7246C22.016 12.5486 22.0712 12.3176 22.0239 12.0961C21.0847 7.70638 17.3361 4.35825 12.75 4.02697V2.75Z" fill="currentColor"/><path d="M12.7501 15.25C12.7501 14.8358 12.4144 14.5 12.0001 14.5C11.5859 14.5 11.2501 14.8358 11.2501 15.25V19.3267C11.2501 19.9747 10.7248 20.5 10.0769 20.5C9.51758 20.5 9.03605 20.1052 8.92636 19.5568L8.73558 18.6029C8.65435 18.1967 8.25923 17.9333 7.85306 18.0146C7.44689 18.0958 7.18348 18.4909 7.26471 18.8971L7.45549 19.851C7.7054 21.1005 8.80256 22 10.0769 22C11.5533 22 12.7501 20.8031 12.7501 19.3267V15.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'umbrella-security'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}