import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-receipt-bill
 */
@gdsCustomElement('gds-icon-receipt-bill')
export class IconReceiptBill extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.75 7.75H15.25M8.75 11.75H11.25M4.75 2.75H19.25V21.25L16.6667 19L14.3333 21.25L12 19L9.66667 21.25L7.33333 19L4.75 21.25V2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V21.25C20 21.544 19.8283 21.8108 19.5607 21.9326C19.2931 22.0544 18.9791 22.0086 18.7574 21.8156L16.6924 20.017L14.8539 21.7899C14.5634 22.07 14.1033 22.07 13.8127 21.7899L12 20.0419L10.1873 21.7899C9.89674 22.07 9.4366 22.07 9.14606 21.7899L7.30756 20.017L5.24259 21.8156C5.02091 22.0086 4.70687 22.0544 4.43931 21.9326C4.17175 21.8108 4 21.544 4 21.25V2.75ZM8 7.75C8 7.33579 8.33579 7 8.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H8.75C8.33579 8.5 8 8.16421 8 7.75ZM8 11.75C8 11.3358 8.33579 11 8.75 11H11.25C11.6642 11 12 11.3358 12 11.75C12 12.1642 11.6642 12.5 11.25 12.5H8.75C8.33579 12.5 8 12.1642 8 11.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'receipt-bill'
}
