import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-circle-minus
 */
@gdsCustomElement('gds-icon-circle-minus')
export class IconCircleMinus extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M16.2426 12.0005H7.75736M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.2426 12.7505C16.6569 12.7505 16.9926 12.4147 16.9926 12.0005C16.9926 11.5862 16.6569 11.2505 16.2426 11.2505H7.75736C7.34315 11.2505 7.00736 11.5862 7.00736 12.0005C7.00736 12.4147 7.34315 12.7505 7.75736 12.7505H16.2426Z" fill="currentColor"/>`
  /** @private */
  static _name = 'circle-minus'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}