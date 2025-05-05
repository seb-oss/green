import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-thermostat
 */
@gdsCustomElement('gds-icon-thermostat')
export class IconThermostat extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.75 4.25H19.25M15.75 8.25H19.25M15.75 12.25H19.25M13.25 17C13.25 19.3472 11.3472 21.25 9 21.25C6.65279 21.25 4.75 19.3472 4.75 17C4.75 15.4791 5.54892 14.1447 6.75 13.3938V2.75H11.25V13.3938C12.4511 14.1447 13.25 15.4791 13.25 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M7.25 2C6.83579 2 6.5 2.33579 6.5 2.75V12.6689C5.0055 13.5334 4 15.1493 4 17C4 19.7614 6.23858 22 9 22C11.7614 22 14 19.7614 14 17C14 15.1493 12.9945 13.5334 11.5 12.6689V2.75C11.5 2.33579 11.1642 2 10.75 2H7.25Z" fill="currentColor"/><path d="M15.75 3.5C15.3358 3.5 15 3.83579 15 4.25C15 4.66421 15.3358 5 15.75 5H19.25C19.6642 5 20 4.66421 20 4.25C20 3.83579 19.6642 3.5 19.25 3.5H15.75Z" fill="currentColor"/><path d="M15.75 7.5C15.3358 7.5 15 7.83579 15 8.25C15 8.66421 15.3358 9 15.75 9H19.25C19.6642 9 20 8.66421 20 8.25C20 7.83579 19.6642 7.5 19.25 7.5H15.75Z" fill="currentColor"/><path d="M15 12.25C15 11.8358 15.3358 11.5 15.75 11.5H19.25C19.6642 11.5 20 11.8358 20 12.25C20 12.6642 19.6642 13 19.25 13H15.75C15.3358 13 15 12.6642 15 12.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'thermostat'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}