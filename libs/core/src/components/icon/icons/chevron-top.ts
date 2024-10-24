import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chevron-top
 */
@gdsCustomElement('gds-icon-chevron-top')
export class IconChevronTop extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4 15L12 7L20 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967L20.5303 14.4697C20.8232 14.7626 20.8232 15.2374 20.5303 15.5303C20.2374 15.8232 19.7626 15.8232 19.4697 15.5303L12 8.06066L4.53033 15.5303C4.23744 15.8232 3.76256 15.8232 3.46967 15.5303C3.17678 15.2374 3.17678 14.7626 3.46967 14.4697L11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chevron-top'
}
