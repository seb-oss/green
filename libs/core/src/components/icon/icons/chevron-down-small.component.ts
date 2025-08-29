import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-down-small
 */
@gdsCustomElement('gds-icon-chevron-down-small')
export class IconChevronDownSmall extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8 10L12 14L16 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L16.5303 10.5303C16.8232 10.2374 16.8232 9.76256 16.5303 9.46967C16.2374 9.17678 15.7626 9.17678 15.4697 9.46967L12 12.9393L8.53033 9.46967C8.23744 9.17678 7.76256 9.17678 7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303L11.4697 14.5303Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-down-small'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}