import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-double-up
 */
@gdsCustomElement('gds-icon-chevron-double-up')
export class IconChevronDoubleUp extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8 10.5L12 6.5L16 10.5M8 17.5L12 13.5L16 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46967 18.0303C7.76256 18.3232 8.23744 18.3232 8.53033 18.0303L12 14.5607L15.4697 18.0303C15.7626 18.3232 16.2374 18.3232 16.5303 18.0303C16.8232 17.7374 16.8232 17.2626 16.5303 16.9697L12.5303 12.9697C12.2374 12.6768 11.7626 12.6768 11.4697 12.9697L7.46967 16.9697C7.17678 17.2626 7.17678 17.7374 7.46967 18.0303ZM7.46967 11.0303C7.76256 11.3232 8.23744 11.3232 8.53033 11.0303L12 7.56066L15.4697 11.0303C15.7626 11.3232 16.2374 11.3232 16.5303 11.0303C16.8232 10.7374 16.8232 10.2626 16.5303 9.96967L12.5303 5.96967C12.2374 5.67678 11.7626 5.67678 11.4697 5.96967L7.46967 9.96967C7.17678 10.2626 7.17678 10.7374 7.46967 11.0303Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-double-up'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}