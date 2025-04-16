import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-banknote
 */
@gdsCustomElement('gds-icon-banknote')
export class IconBanknote extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.25 5.25H21.75V18.75H2.25V5.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.75 5.25C5.75 7.183 4.183 8.75 2.25 8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.25 5.25C18.25 7.183 19.817 8.75 21.75 8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.75 18.75C5.75 16.817 4.183 15.25 2.25 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.25 18.75C18.25 16.817 19.817 15.25 21.75 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.25C1.5 4.83579 1.83579 4.5 2.25 4.5H21.75C22.1642 4.5 22.5 4.83579 22.5 5.25V18.75C22.5 19.1642 22.1642 19.5 21.75 19.5H2.25C1.83579 19.5 1.5 19.1642 1.5 18.75V5.25ZM3 18H5.5C5.5 16.6193 4.38071 15.5 3 15.5V18ZM21 18V15.5C19.6193 15.5 18.5 16.6193 18.5 18H21ZM21 8.5C19.6193 8.5 18.5 7.38071 18.5 6H21V8.5ZM3 6H5.5C5.5 7.38071 4.38071 8.5 3 8.5V6ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'banknote'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}