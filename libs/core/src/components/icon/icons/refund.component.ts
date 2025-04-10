import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-refund
 */
@gdsCustomElement('gds-icon-refund')
export class IconRefund extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6.75 3.25L3.75 6.25L6.75 9.25M4.5 6.25H14.25C17.7018 6.25 20.5 9.04822 20.5 12.5C20.5 15.9518 17.7018 18.75 14.25 18.75H5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M7.28033 3.78033C7.57322 3.48744 7.57322 3.01256 7.28033 2.71967C6.98744 2.42678 6.51256 2.42678 6.21967 2.71967L3.21967 5.71967C2.92678 6.01256 2.92678 6.48744 3.21967 6.78033L6.21967 9.78033C6.51256 10.0732 6.98744 10.0732 7.28033 9.78033C7.57322 9.48744 7.57322 9.01256 7.28033 8.71967L5.56066 7H14.25C17.2876 7 19.75 9.46243 19.75 12.5C19.75 15.5376 17.2876 18 14.25 18H5.75C5.33579 18 5 18.3358 5 18.75C5 19.1642 5.33579 19.5 5.75 19.5H14.25C18.116 19.5 21.25 16.366 21.25 12.5C21.25 8.63401 18.116 5.5 14.25 5.5H5.56066L7.28033 3.78033Z" fill="currentColor"/>`
  /** @private */
  static _name = 'refund'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}