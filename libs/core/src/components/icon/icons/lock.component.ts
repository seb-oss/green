import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-lock
 */
@gdsCustomElement('gds-icon-lock')
export class IconLock extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 14V17M16.25 9.75V7C16.25 4.65279 14.3472 2.75 12 2.75C9.65279 2.75 7.75 4.65279 7.75 7V9.75M4.75 9.75H19.25V21.25H4.75V9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7V9H4.75C4.33579 9 4 9.33579 4 9.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V9.75C20 9.33579 19.6642 9 19.25 9H17V7C17 4.23858 14.7614 2 12 2ZM15.5 9V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V9H15.5ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V14C11.25 13.5858 11.5858 13.25 12 13.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'lock'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}