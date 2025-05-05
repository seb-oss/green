import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-double-left
 */
@gdsCustomElement('gds-icon-chevron-double-left')
export class IconChevronDoubleLeft extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M10 16L6 12L10 8M17 16L13 12L17 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.06066 12L10.5303 15.4697C10.8232 15.7626 10.8232 16.2374 10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967ZM17.5303 7.46967C17.8232 7.76256 17.8232 8.23744 17.5303 8.53033L14.0607 12L17.5303 15.4697C17.8232 15.7626 17.8232 16.2374 17.5303 16.5303C17.2374 16.8232 16.7626 16.8232 16.4697 16.5303L12.4697 12.5303C12.1768 12.2374 12.1768 11.7626 12.4697 11.4697L16.4697 7.46967C16.7626 7.17678 17.2374 7.17678 17.5303 7.46967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-double-left'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}