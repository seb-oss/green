import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-tag
 */
@gdsCustomElement('gds-icon-tag')
export class IconTag extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.25 7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75C7.91421 6.75 8.25 7.08579 8.25 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M2.75 12V2.75H12L21.25 12L12 21.25L2.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.75C2 2.33579 2.33579 2 2.75 2H12C12.1989 2 12.3897 2.07902 12.5303 2.21967L21.7803 11.4697C22.0732 11.7626 22.0732 12.2374 21.7803 12.5303L12.5303 21.7803C12.2374 22.0732 11.7626 22.0732 11.4697 21.7803L2.21967 12.5303C2.07902 12.3897 2 12.1989 2 12V2.75ZM7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z" fill="currentColor"/>`
  /** @private */
  static _name = 'tag'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}