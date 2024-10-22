import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-share-right
 */
@gdsCustomElement('gds-icon-arrow-share-right')
export class IconArrowShareRight extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M22 12L12.5 3.75V8.5C4 8.5 1.75 11.75 1.75 20.25C3.25 17.25 4 15.5 12.5 15.5V20.25L22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M11.75 3.75001C11.75 3.45624 11.9215 3.18951 12.1888 3.06762C12.4561 2.94572 12.77 2.99111 12.9918 3.18374L22.4918 11.4337C22.6558 11.5762 22.75 11.7828 22.75 12C22.75 12.2173 22.6558 12.4238 22.4918 12.5663L12.9918 20.8163C12.77 21.0089 12.4561 21.0543 12.1888 20.9324C11.9215 20.8105 11.75 20.5438 11.75 20.25V16.2549C8.0065 16.305 6.04766 16.7368 4.86904 17.4029C3.67425 18.0783 3.19755 19.0318 2.44475 20.5376L2.42082 20.5854C2.26526 20.8965 1.91621 21.0599 1.57768 20.9799C1.23916 20.9 1 20.5978 1 20.25C1 15.9846 1.55196 12.7949 3.37073 10.6963C5.10747 8.69239 7.84317 7.8511 11.75 7.75867V3.75001Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-share-right'
}
