import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-industry
 */
@gdsCustomElement('gds-icon-industry')
export class IconIndustry extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M5.75 7.75H10.25L12.25 20.25H3.75L5.75 7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5.25V5.25C8 4.14543 8.89543 3.25 10 3.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13.75L15.5714 12V14.5L20.8214 12V20.75H12.5714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M8.75 5.25C8.75 4.55964 9.30964 4 10 4H19.25C19.6642 4 20 3.66421 20 3.25C20 2.83579 19.6642 2.5 19.25 2.5H10C8.48122 2.5 7.25 3.73122 7.25 5.25C7.25 5.66421 7.58579 6 8 6C8.41421 6 8.75 5.66421 8.75 5.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75001 7C5.38153 7 5.06764 7.26766 5.00943 7.63151L3.00943 20.1315C2.97473 20.3484 3.03682 20.5695 3.17932 20.7366C3.32181 20.9037 3.53039 21 3.75001 21H12.25C12.3155 21 12.38 20.9914 12.4421 20.975C12.5037 20.9913 12.5682 21 12.6345 21H20.25C20.6642 21 21 20.6642 21 20.25V11.5C21 11.2426 20.868 11.0032 20.6504 10.8658C20.4328 10.7284 20.1599 10.7122 19.9276 10.8229L15.75 12.8122V11.5C15.75 11.2411 15.6165 11.0006 15.3969 10.8636C15.1772 10.7266 14.9024 10.7126 14.67 10.8265L11.7321 12.2661L10.9906 7.63151C10.9324 7.26766 10.6185 7 10.25 7H5.75001ZM4.62954 19.5L6.38954 8.5H9.61047L11.3705 19.5H4.62954Z" fill="currentColor"/>`
  /** @private */
  static _name = 'industry'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}