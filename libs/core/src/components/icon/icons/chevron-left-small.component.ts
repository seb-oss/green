import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-left-small
 */
@gdsCustomElement('gds-icon-chevron-left-small')
export class IconChevronLeftSmall extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M14 16L10 12L14 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L9.46967 11.4697C9.17678 11.7626 9.17678 12.2374 9.46967 12.5303L13.4697 16.5303C13.7626 16.8232 14.2374 16.8232 14.5303 16.5303C14.8232 16.2374 14.8232 15.7626 14.5303 15.4697L11.0607 12L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-left-small'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}