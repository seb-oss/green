import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-calender-add
 */
@gdsCustomElement('gds-icon-calender-add')
export class IconCalenderAdd extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'calender-add'
}
