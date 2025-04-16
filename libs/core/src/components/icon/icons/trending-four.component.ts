import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-trending-four
 */
@gdsCustomElement('gds-icon-trending-four')
export class IconTrendingFour extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.75 6.75H21.25V12.25M20.7361 7.275L13 15L9 11L2.75 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6.75C15 6.33579 15.3358 6 15.75 6H21.25C21.6642 6 22 6.33579 22 6.75V12.25C22 12.6642 21.6642 13 21.25 13C20.8358 13 20.5 12.6642 20.5 12.25V8.57067L13.5299 15.5307C13.237 15.8232 12.7624 15.8231 12.4697 15.5303L9 12.0607L3.28033 17.7803C2.98744 18.0732 2.51256 18.0732 2.21967 17.7803C1.92678 17.4874 1.92678 17.0126 2.21967 16.7197L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L13.0004 13.9397L19.4494 7.5H15.75C15.3358 7.5 15 7.16421 15 6.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'trending-four'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}