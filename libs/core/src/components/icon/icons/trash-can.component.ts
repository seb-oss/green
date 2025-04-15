import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-trash-can
 */
@gdsCustomElement('gds-icon-trash-can')
export class IconTrashCan extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M5.75 5.75V21.25H18.25V5.75M5.75 5.75H18.25M5.75 5.75H3.75M18.25 5.75H20.25M14 10.75V16.25M10 10.75V16.25M9 5.75C9 4.09315 10.3431 2.75 12 2.75C13.6569 2.75 15 4.09315 15 5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.32501 5C8.67247 3.28832 10.1858 2 12 2C13.8142 2 15.3275 3.28832 15.675 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H19V21.25C19 21.6642 18.6642 22 18.25 22H5.75C5.33579 22 5 21.6642 5 21.25V6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H8.32501ZM9.87803 5C10.1869 4.12611 11.0203 3.5 12 3.5C12.9797 3.5 13.8131 4.12611 14.122 5H9.87803ZM10 10C10.4142 10 10.75 10.3358 10.75 10.75V16.25C10.75 16.6642 10.4142 17 10 17C9.58579 17 9.25 16.6642 9.25 16.25V10.75C9.25 10.3358 9.58579 10 10 10ZM14 10C14.4142 10 14.75 10.3358 14.75 10.75V16.25C14.75 16.6642 14.4142 17 14 17C13.5858 17 13.25 16.6642 13.25 16.25V10.75C13.25 10.3358 13.5858 10 14 10Z" fill="currentColor"/>`
  /** @private */
  static _name = 'trash-can'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}