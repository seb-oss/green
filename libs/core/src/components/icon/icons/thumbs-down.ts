import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-thumbs-down
 */
@gdsCustomElement('gds-icon-thumbs-down')
export class IconThumbsDown extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.2521 13.25H21.25V3.75H17.2521M17.2521 3.75V13L13.0043 21.25H12.389C11.1622 21.25 10.2249 20.1546 10.4139 18.9419L10.9892 15.25H5.74908C3.91335 15.25 2.50859 13.6144 2.78476 11.7987L3.62128 6.29867C3.84421 4.83298 5.1038 3.75 6.5856 3.75H17.2521Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0022 4.5V12.5H20.5002V4.5H18.0022ZM17.5809 14H21.2502C21.6644 14 22.0002 13.6642 22.0002 13.25V3.75C22.0002 3.33579 21.6644 3 21.2502 3H6.58575C4.733 3 3.15858 4.35403 2.87996 6.1859L2.04344 11.6859C1.69829 13.9552 3.45391 16 5.74923 16H10.1134L9.67296 18.8264C9.41317 20.4935 10.7016 22 12.3891 22H13.0044C13.2853 22 13.5426 21.8431 13.6712 21.5933L17.5809 14Z" fill="currentColor"/>`
  /** @private */
  static _name = 'thumbs down'
}