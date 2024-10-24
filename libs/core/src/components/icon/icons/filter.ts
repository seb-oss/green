import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-filter
 */
@gdsCustomElement('gds-icon-filter')
export class IconFilter extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 4.75H21.25M8.75 19.25H15.25M5.75 12H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM5 12C5 11.5858 5.33579 11.25 5.75 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75H5.75C5.33579 12.75 5 12.4142 5 12ZM8 19.25C8 18.8358 8.33579 18.5 8.75 18.5H15.25C15.6642 18.5 16 18.8358 16 19.25C16 19.6642 15.6642 20 15.25 20H8.75C8.33579 20 8 19.6642 8 19.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'filter'
}
