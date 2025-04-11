import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-right-up-circle
 */
@gdsCustomElement('gds-icon-arrow-right-up-circle')
export class IconArrowRightUpCircle extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.75 15.25L14.5694 9.43056M15.25 14.25V8.75H9.75M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM16 8.75C16 8.33579 15.6642 8 15.25 8H9.75C9.33579 8 9 8.33579 9 8.75C9 9.16421 9.33579 9.5 9.75 9.5H13.4393L8.21967 14.7197C7.92678 15.0126 7.92678 15.4874 8.21967 15.7803C8.51256 16.0732 8.98744 16.0732 9.28033 15.7803L14.5 10.5607V14.25C14.5 14.6642 14.8358 15 15.25 15C15.6642 15 16 14.6642 16 14.25V8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-right-up-circle'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}