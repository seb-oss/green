import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-checkmark
 */
@gdsCustomElement('gds-icon-checkmark')
export class IconCheckmark extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80429 21.2651 9.50102 21.4442 9.1652 21.489C8.82937 21.5338 8.48976 21.4403 8.22413 21.23L2.22413 16.48C1.68286 16.0515 1.59144 15.2654 2.01995 14.7241C2.44845 14.1828 3.23461 14.0914 3.77588 14.5199L8.76237 18.4675L19.9945 3.2574C20.4046 2.70206 21.1872 2.58432 21.7426 2.99442Z" fill="currentColor"/>`
  /** @private */
  static _name = 'checkmark'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}