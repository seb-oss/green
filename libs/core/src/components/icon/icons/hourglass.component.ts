import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-hourglass
 */
@gdsCustomElement('gds-icon-hourglass')
export class IconHourglass extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 12L5.75 8V2.75H18.25V8L12 12ZM12 12L18.25 16V21.25H5.75V16L12 12ZM20.25 21.25H3.75M20.25 2.75H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.5H3.75C3.33579 3.5 3 3.16421 3 2.75C3 2.33579 3.33579 2 3.75 2H20.25C20.6642 2 21 2.33579 21 2.75C21 3.16421 20.6642 3.5 20.25 3.5H19V8C19 8.25574 18.8697 8.49385 18.6543 8.6317L13.3913 12L18.6543 15.3683C18.8697 15.5062 19 15.7443 19 16V20.5H20.25C20.6642 20.5 21 20.8358 21 21.25C21 21.6642 20.6642 22 20.25 22H3.75C3.33579 22 3 21.6642 3 21.25C3 20.8358 3.33579 20.5 3.75 20.5H5V16C5 15.7443 5.13031 15.5062 5.34571 15.3683L10.6087 12L5.34571 8.6317C5.13031 8.49385 5 8.25574 5 8V3.5ZM6.5 7H17.5V3.5H6.5V7ZM17.5 16.4104V18H6.5V16.4104L12 12.8904L17.5 16.4104Z" fill="currentColor"/>`
  /** @private */
  static _name = 'hourglass'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}