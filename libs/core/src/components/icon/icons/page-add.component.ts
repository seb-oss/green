import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-page-add
 */
@gdsCustomElement('gds-icon-page-add')
export class IconPageAdd extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.25 21.25H4.75V2.75H19.25V12.25M18.25 15.25V18.25M18.25 18.25V21.25M18.25 18.25H15.25M18.25 18.25H21.25M8.75 6.75H15.25M8.75 10.75H11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V13.8357C19.5875 13.3259 18.9568 13 18.25 13C17.0074 13 16 14.0074 16 15.25V16H15.25C14.0074 16 13 17.0074 13 18.25C13 19.4926 14.0074 20.5 15.25 20.5H16V21.25C16 21.513 16.0451 21.7654 16.128 22H4.75C4.33579 22 4 21.6642 4 21.25V2.75ZM8 6.75C8 6.33579 8.33579 6 8.75 6H15.25C15.6642 6 16 6.33579 16 6.75C16 7.16421 15.6642 7.5 15.25 7.5H8.75C8.33579 7.5 8 7.16421 8 6.75ZM8 10.75C8 10.3358 8.33579 10 8.75 10H11.25C11.6642 10 12 10.3358 12 10.75C12 11.1642 11.6642 11.5 11.25 11.5H8.75C8.33579 11.5 8 11.1642 8 10.75Z" fill="currentColor"/><path d="M19 15.25C19 14.8358 18.6642 14.5 18.25 14.5C17.8358 14.5 17.5 14.8358 17.5 15.25V17.5H15.25C14.8358 17.5 14.5 17.8358 14.5 18.25C14.5 18.6642 14.8358 19 15.25 19H17.5V21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25V19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19V15.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'page-add'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}