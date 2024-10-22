import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-file-text
 */
@gdsCustomElement('gds-icon-file-text')
export class IconFileText extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.75 2.75H4.75V21.25H19.25V9.25M12.75 2.75L19.25 9.25M12.75 2.75V9.25H19.25M8.75 13.25H12.25M8.75 17.25H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2H4.75C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V10H12.75C12.3358 10 12 9.66421 12 9.25V2ZM8 14.25C8 13.8358 8.33579 13.5 8.75 13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H8.75C8.33579 15 8 14.6642 8 14.25ZM8.75 17.5C8.33579 17.5 8 17.8358 8 18.25C8 18.6642 8.33579 19 8.75 19H15.25C15.6642 19 16 18.6642 16 18.25C16 17.8358 15.6642 17.5 15.25 17.5H8.75Z" fill="currentColor"/><path d="M19.5607 8.5L13.5 2.43934V8.5H19.5607Z" fill="currentColor"/>`
  /** @private */
  static _name = 'file-text'
}
