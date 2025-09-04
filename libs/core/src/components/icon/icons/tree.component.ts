import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-tree
 */
@gdsCustomElement('gds-icon-tree')
export class IconTree extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 21.25V15M12 15L9.75 12.75M12 15L15.25 11.75M20.25 11C20.25 15.5563 16.5563 19.25 12 19.25C7.44365 19.25 3.75 15.5563 3.75 11C3.75 6.44365 7.44365 2.75 12 2.75C16.5563 2.75 20.25 6.44365 20.25 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 19.9692V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V19.9692C6.63035 19.5881 3 15.718 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 15.718 17.3696 19.5881 12.75 19.9692ZM11.25 18.463V15.3107L9.21967 13.2803C8.92678 12.9874 8.92678 12.5126 9.21967 12.2197C9.51256 11.9268 9.98744 11.9268 10.2803 12.2197L12 13.9393L14.7197 11.2197C15.0126 10.9268 15.4874 10.9268 15.7803 11.2197C16.0732 11.5126 16.0732 11.9874 15.7803 12.2803L12.75 15.3107V18.463C12.5033 18.4875 12.2531 18.5 12 18.5C11.7469 18.5 11.4967 18.4875 11.25 18.463Z" fill="currentColor"/>`
  /** @private */
  static _name = 'tree'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}