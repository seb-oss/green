import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bullet-list
 */
@gdsCustomElement('gds-icon-bullet-list')
export class IconBulletList extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M11.75 16.75H20.25M11.75 7.25H20.25M7.75 7.25C7.75 8.35457 6.85457 9.25 5.75 9.25C4.64543 9.25 3.75 8.35457 3.75 7.25C3.75 6.14543 4.64543 5.25 5.75 5.25C6.85457 5.25 7.75 6.14543 7.75 7.25ZM7.75 16.75C7.75 17.8546 6.85457 18.75 5.75 18.75C4.64543 18.75 3.75 17.8546 3.75 16.75C3.75 15.6454 4.64543 14.75 5.75 14.75C6.85457 14.75 7.75 15.6454 7.75 16.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M5.75 4.5C4.23122 4.5 3 5.73122 3 7.25C3 8.76878 4.23122 10 5.75 10C7.26878 10 8.5 8.76878 8.5 7.25C8.5 5.73122 7.26878 4.5 5.75 4.5Z" fill="currentColor"/><path d="M11.75 6.5C11.3358 6.5 11 6.83579 11 7.25C11 7.66421 11.3358 8 11.75 8H20.25C20.6642 8 21 7.66421 21 7.25C21 6.83579 20.6642 6.5 20.25 6.5H11.75Z" fill="currentColor"/><path d="M5.75 14C4.23122 14 3 15.2312 3 16.75C3 18.2688 4.23122 19.5 5.75 19.5C7.26878 19.5 8.5 18.2688 8.5 16.75C8.5 15.2312 7.26878 14 5.75 14Z" fill="currentColor"/><path d="M11.75 16C11.3358 16 11 16.3358 11 16.75C11 17.1642 11.3358 17.5 11.75 17.5H20.25C20.6642 17.5 21 17.1642 21 16.75C21 16.3358 20.6642 16 20.25 16H11.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bullet-list'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}