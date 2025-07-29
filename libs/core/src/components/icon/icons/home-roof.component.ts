import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-home-roof
 */
@gdsCustomElement('gds-icon-home-roof')
export class IconHomeRoof extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.25 7.69038L12 2.5L4.74997 7.6904M19.25 7.69038L21.5 9.30119M19.25 7.69038V20.25H4.74997V7.6904M4.74997 7.6904L2.5 9.30119" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.4366 1.89017C12.1756 1.70328 11.8245 1.70328 11.5635 1.89017L2.06347 8.69136C1.72667 8.93248 1.64911 9.40098 1.89023 9.73778C2.13135 10.0746 2.59984 10.1521 2.93664 9.91102L4.00003 9.14973V20.25C4.00003 20.6642 4.33582 21 4.75003 21H19.25C19.6642 21 20 20.6642 20 20.25V9.14971L21.0634 9.91102C21.4002 10.1521 21.8687 10.0746 22.1099 9.73778C22.351 9.40098 22.2734 8.93248 21.9366 8.69136L12.4366 1.89017Z" fill="currentColor"/>`
  /** @private */
  static _name = 'home-roof'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}