import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-focus-square
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-focus-square')
export class IconFocusSquare extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 8V3.75H8M3.75 16V20.25H8M16 3.75H20.25V8M20.25 16V20.25H16M8.75 8.75H15.25V15.25H8.75V8.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H8C8.41421 3 8.75 3.33579 8.75 3.75C8.75 4.16421 8.41421 4.5 8 4.5H4.5V8C4.5 8.41421 4.16421 8.75 3.75 8.75C3.33579 8.75 3 8.41421 3 8V3.75Z" fill="currentColor"/><path d="M15.25 3.75C15.25 3.33579 15.5858 3 16 3H20.25C20.6642 3 21 3.33579 21 3.75V8C21 8.41421 20.6642 8.75 20.25 8.75C19.8358 8.75 19.5 8.41421 19.5 8V4.5H16C15.5858 4.5 15.25 4.16421 15.25 3.75Z" fill="currentColor"/><path d="M3.75 15.25C4.16421 15.25 4.5 15.5858 4.5 16V19.5H8C8.41421 19.5 8.75 19.8358 8.75 20.25C8.75 20.6642 8.41421 21 8 21H3.75C3.33579 21 3 20.6642 3 20.25V16C3 15.5858 3.33579 15.25 3.75 15.25Z" fill="currentColor"/><path d="M20.25 15.25C20.6642 15.25 21 15.5858 21 16V20.25C21 20.6642 20.6642 21 20.25 21H16C15.5858 21 15.25 20.6642 15.25 20.25C15.25 19.8358 15.5858 19.5 16 19.5H19.5V16C19.5 15.5858 19.8358 15.25 20.25 15.25Z" fill="currentColor"/><path d="M8.75 8C8.33579 8 8 8.33579 8 8.75V15.25C8 15.6642 8.33579 16 8.75 16H15.25C15.6642 16 16 15.6642 16 15.25V8.75C16 8.33579 15.6642 8 15.25 8H8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'focus-square'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}