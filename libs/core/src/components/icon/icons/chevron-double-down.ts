import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-double-down
 */
@gdsCustomElement('gds-icon-chevron-double-down')
export class IconChevronDoubleDown extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8 13.5L12 17.5L16 13.5M8 6.5L12 10.5L16 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46967 5.96967C7.76256 5.67678 8.23744 5.67678 8.53033 5.96967L12 9.43934L15.4697 5.96967C15.7626 5.67678 16.2374 5.67678 16.5303 5.96967C16.8232 6.26256 16.8232 6.73744 16.5303 7.03033L12.5303 11.0303C12.2374 11.3232 11.7626 11.3232 11.4697 11.0303L7.46967 7.03033C7.17678 6.73744 7.17678 6.26256 7.46967 5.96967ZM7.46967 12.9697C7.76256 12.6768 8.23744 12.6768 8.53033 12.9697L12 16.4393L15.4697 12.9697C15.7626 12.6768 16.2374 12.6768 16.5303 12.9697C16.8232 13.2626 16.8232 13.7374 16.5303 14.0303L12.5303 18.0303C12.2374 18.3232 11.7626 18.3232 11.4697 18.0303L7.46967 14.0303C7.17678 13.7374 7.17678 13.2626 7.46967 12.9697Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-double-down'
}
