import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-devices
 */
@gdsCustomElement('gds-icon-devices')
export class IconDevices extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.25 18.25H19.5M3.75 16.75V3.75H20.25V8.75M3.75 16.75H1.75V20.25H14.25M3.75 16.75H14.25M14.25 8.75H22.25V21.25H14.25V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M17.25 17.5C16.8358 17.5 16.5 17.8358 16.5 18.25C16.5 18.6642 16.8358 19 17.25 19H19.5C19.9142 19 20.25 18.6642 20.25 18.25C20.25 17.8358 19.9142 17.5 19.5 17.5H17.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C3.33579 3 3 3.33579 3 3.75V16H1.75C1.33579 16 1 16.3358 1 16.75V20.25C1 20.6642 1.33579 21 1.75 21H13.5V21.25C13.5 21.6642 13.8358 22 14.25 22H22.25C22.6642 22 23 21.6642 23 21.25V8.75C23 8.33579 22.6642 8 22.25 8H21V3.75C21 3.33579 20.6642 3 20.25 3H3.75ZM14 8.04268C14.0782 8.01504 14.1623 8 14.25 8H14V8.04268ZM15 20.5V9.5H21.5V20.5H15ZM13.5 17.5V19.5H2.5V17.5H13.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'devices'
}
