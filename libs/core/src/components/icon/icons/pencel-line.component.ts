import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-pencel-line
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-pencel-line')
export class IconPencelLine extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.75 21.25H21.25M2.75 17V21.25H7L21.25 7L17 2.75L2.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M17.5303 2.21967C17.2374 1.92678 16.7626 1.92678 16.4697 2.21967L2.21967 16.4697C2.07902 16.6103 2 16.8011 2 17V21.25C2 21.6642 2.33579 22 2.75 22H7C7.19891 22 7.38968 21.921 7.53033 21.7803L21.7803 7.53033C22.0732 7.23744 22.0732 6.76256 21.7803 6.46967L17.5303 2.21967Z" fill="currentColor"/><path d="M12.75 20.5C12.3358 20.5 12 20.8358 12 21.25C12 21.6642 12.3358 22 12.75 22H21.25C21.6642 22 22 21.6642 22 21.25C22 20.8358 21.6642 20.5 21.25 20.5H12.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'pencel-line'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}