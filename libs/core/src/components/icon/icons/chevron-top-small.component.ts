import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-top-small
 */
@gdsCustomElement('gds-icon-chevron-top-small')
export class IconChevronTopSmall extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8 14L12 10L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303C16.2374 14.8232 15.7626 14.8232 15.4697 14.5303L12 11.0607L8.53033 14.5303C8.23744 14.8232 7.76256 14.8232 7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697L11.4697 9.46967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-top-small'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}