import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-backward
 */
@gdsCustomElement('gds-icon-backward')
export class IconBackward extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15 9.75L12.75 12M12.75 12L10.5 14.25M12.75 12L10.5 9.75M12.75 12L15 14.25M6 4.75H21.25V19.25H6L1.5 12L6 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C5.74058 4 5.49958 4.13406 5.36277 4.35448L0.86277 11.6045C0.71241 11.8467 0.71241 12.1533 0.86277 12.3955L5.36277 19.6455C5.49958 19.8659 5.74058 20 6 20H21.25C21.6642 20 22 19.6642 22 19.25V4.75C22 4.33579 21.6642 4 21.25 4H6ZM11.0303 9.21967C10.7374 8.92678 10.2626 8.92678 9.96967 9.21967C9.67678 9.51256 9.67678 9.98744 9.96967 10.2803L11.6893 12L9.96967 13.7197C9.67678 14.0126 9.67678 14.4874 9.96967 14.7803C10.2626 15.0732 10.7374 15.0732 11.0303 14.7803L12.75 13.0607L14.4697 14.7803C14.7626 15.0732 15.2374 15.0732 15.5303 14.7803C15.8232 14.4874 15.8232 14.0126 15.5303 13.7197L13.8107 12L15.5303 10.2803C15.8232 9.98744 15.8232 9.51256 15.5303 9.21967C15.2374 8.92678 14.7626 8.92678 14.4697 9.21967L12.75 10.9393L11.0303 9.21967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'backward'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}