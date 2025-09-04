import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-trending-one
 */
@gdsCustomElement('gds-icon-trending-one')
export class IconTrendingOne extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 4.75V19.25H21.25M6.75 15.25L11 11L13 13L18.754 7.246M14.75 6.75H19.25V11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V18.5H21.25C21.6642 18.5 22 18.8358 22 19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM14 6.75C14 6.33579 14.3358 6 14.75 6H19.25C19.6642 6 20 6.33579 20 6.75V11.25C20 11.6642 19.6642 12 19.25 12C18.8358 12 18.5 11.6642 18.5 11.25V8.56066L13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L11 12.0607L7.28033 15.7803C6.98744 16.0732 6.51256 16.0732 6.21967 15.7803C5.92678 15.4874 5.92678 15.0126 6.21967 14.7197L10.4697 10.4697C10.7626 10.1768 11.2374 10.1768 11.5303 10.4697L13 11.9393L17.4393 7.5H14.75C14.3358 7.5 14 7.16421 14 6.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'trending-one'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}