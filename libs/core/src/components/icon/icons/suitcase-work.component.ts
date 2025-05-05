import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-suitcase-work
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-suitcase-work')
export class IconSuitcaseWork extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M7.75 6.75H2.75V20.25H21.25V6.75H16.25M7.75 6.75V2.75H16.25V6.75M7.75 6.75H16.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C7 2.33579 7.33579 2 7.75 2H16.25C16.6642 2 17 2.33579 17 2.75V6H21.25C21.6642 6 22 6.33579 22 6.75V20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25V6.75C2 6.33579 2.33579 6 2.75 6H7V2.75ZM8.5 6H15.5V3.5H8.5V6Z" fill="currentColor"/>`
  /** @private */
  static _name = 'suitcase-work'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}