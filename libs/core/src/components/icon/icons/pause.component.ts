import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-pause
 */
@gdsCustomElement('gds-icon-pause')
export class IconPause extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 4.75C4.75 4.19772 5.19772 3.75 5.75 3.75H8.25C8.80228 3.75 9.25 4.19772 9.25 4.75V19.25C9.25 19.8023 8.80228 20.25 8.25 20.25H5.75C5.19772 20.25 4.75 19.8023 4.75 19.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.75 4.75C14.75 4.19772 15.1977 3.75 15.75 3.75H18.25C18.8023 3.75 19.25 4.19772 19.25 4.75V19.25C19.25 19.8023 18.8023 20.25 18.25 20.25H15.75C15.1977 20.25 14.75 19.8023 14.75 19.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.75 3C4.33579 3 4 3.33579 4 3.75V20.25C4 20.6642 4.33579 21 4.75 21H9.25C9.66421 21 10 20.6642 10 20.25V3.75C10 3.33579 9.66421 3 9.25 3H4.75Z" fill="currentColor"/><path d="M14.75 3C14.3358 3 14 3.33579 14 3.75V20.25C14 20.6642 14.3358 21 14.75 21H19.25C19.6642 21 20 20.6642 20 20.25V3.75C20 3.33579 19.6642 3 19.25 3H14.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'pause'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}