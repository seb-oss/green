import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-todos
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-todos')
export class IconTodos extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.75 20.25H20.25V3.75H3.75V20.25H8.25M9 13.0929L11.2327 15.0599L15.14 9.43994" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 3C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H15.5C15.2239 21 15 20.7761 15 20.5C15 20.2239 14.7761 20 14.5 20H9.5C9.22386 20 9 20.2239 9 20.5C9 20.7761 8.77614 21 8.5 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75C3 3.33579 3.33579 3 3.75 3H20.25ZM15.7558 9.61807C15.9922 9.27798 15.9082 8.81059 15.5681 8.57414C15.228 8.3377 14.7607 8.42172 14.5242 8.76181L11.0972 13.691L9.49578 12.2802C9.18498 12.0064 8.71105 12.0364 8.43724 12.3472C8.16343 12.658 8.19341 13.1319 8.50422 13.4057L10.7369 15.3727C10.8974 15.5141 11.1106 15.5802 11.3229 15.5545C11.5352 15.5288 11.7264 15.4137 11.8485 15.2381L15.7558 9.61807Z" fill="currentColor"/>`
  /** @private */
  static _name = 'todos'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}