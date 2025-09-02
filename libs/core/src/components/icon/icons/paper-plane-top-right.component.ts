import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-paper-plane-top-right
 */
@gdsCustomElement('gds-icon-paper-plane-top-right')
export class IconPaperPlaneTopRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.45244 10.8687L21 4.44532M11.9936 21.25L22.25 3.75H2.25L9.14026 11.0423L11.9936 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M1.0615 3.4526C1.18016 3.17789 1.45077 3 1.75002 3H22.25C22.5186 3 22.7667 3.14366 22.9005 3.37663C23.0342 3.60959 23.0331 3.89629 22.8976 4.12825L12.3848 22.1282C12.2329 22.3884 11.9399 22.5324 11.6411 22.4938C11.3423 22.4552 11.0956 22.2415 11.0147 21.9513L8.33914 12.3462L14.9742 8.65542C15.3362 8.45407 15.4664 7.9974 15.265 7.63542C15.0637 7.27344 14.607 7.14322 14.245 7.34458L7.59005 11.0464L1.20398 4.26414C0.998839 4.04627 0.942841 3.72731 1.0615 3.4526Z" fill="currentColor"/>`
  /** @private */
  static _name = 'paper-plane-top-right'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}