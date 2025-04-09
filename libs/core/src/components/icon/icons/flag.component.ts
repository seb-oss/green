import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-flag
 */
@gdsCustomElement('gds-icon-flag')
export class IconFlag extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 21.25V14.75M4.75 14.75V2.75H20.25L16.25 8.75L20.25 14.75H4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H20.25C20.5266 15.5 20.7807 15.3478 20.9113 15.1039C21.0418 14.86 21.0275 14.5641 20.874 14.334L17.1514 8.75L20.874 3.16603C21.0275 2.93588 21.0418 2.63997 20.9113 2.39611C20.7807 2.15224 20.5266 2 20.25 2H4.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'flag'
}