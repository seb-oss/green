import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-share-left
 */
@gdsCustomElement('gds-icon-arrow-share-left')
export class IconArrowShareLeft extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 12L12.25 3.75V8.5C20.75 8.5 23 11.75 23 20.25C21.5 17.25 20.75 15.5 12.25 15.5V20.25L2.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 3.75001C12 3.45624 11.8285 3.18951 11.5612 3.06762C11.2939 2.94572 10.98 2.99111 10.7582 3.18374L1.25824 11.4337C1.0942 11.5762 1 11.7828 1 12C1 12.2173 1.0942 12.4238 1.25824 12.5663L10.7582 20.8163C10.98 21.0089 11.2939 21.0543 11.5612 20.9324C11.8285 20.8105 12 20.5438 12 20.25V16.2549C15.7435 16.305 17.7023 16.7368 18.881 17.4029C20.0758 18.0783 20.5524 19.0318 21.3053 20.5376L21.3292 20.5854C21.4847 20.8965 21.8338 21.0599 22.1723 20.9799C22.5108 20.9 22.75 20.5978 22.75 20.25C22.75 15.9846 22.198 12.7949 20.3793 10.6963C18.6425 8.69239 15.9068 7.8511 12 7.75867V3.75001Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-share-left'
  /** @private */
  static _width = 25
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 25 24'
}