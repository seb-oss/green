import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-text-edit
 */
@gdsCustomElement('gds-icon-text-edit')
export class IconTextEdit extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M1.75 5.75H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.75 9.75H6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.75 8.38793L18.6121 4.25L7.75 15.1121V19.25H11.8879L22.75 8.38793Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M1.75 5.75H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.75 9.75H6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.1424 3.71967C18.8495 3.42678 18.3746 3.42678 18.0817 3.71967L7.21967 14.5817C7.07902 14.7224 7 14.9132 7 15.1121V19.25C7 19.6642 7.33579 20 7.75 20H11.8879C12.0868 20 12.2776 19.921 12.4183 19.7803L23.2803 8.91826C23.5732 8.62537 23.5732 8.15049 23.2803 7.8576L19.1424 3.71967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'text-edit'
}
