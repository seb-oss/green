import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-double-right
 */
@gdsCustomElement('gds-icon-chevron-double-right')
export class IconChevronDoubleRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M14 16L18 12L14 8M7 16L11 12L7 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L11.5303 11.4697C11.8232 11.7626 11.8232 12.2374 11.5303 12.5303L7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303C6.17678 16.2374 6.17678 15.7626 6.46967 15.4697L9.93934 12L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967ZM13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.9393 12L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-double-right'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}