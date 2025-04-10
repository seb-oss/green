import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-square-minus
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-square-minus')
export class IconSquareMinus extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM15.25 12.7502C15.6642 12.7502 16 12.4144 16 12.0002C16 11.586 15.6642 11.2502 15.25 11.2502V12.7502ZM8.75736 11.2502C8.34314 11.2502 8.00736 11.586 8.00736 12.0002C8.00736 12.4144 8.34314 12.7502 8.75736 12.7502V11.2502ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM15.25 11.2502H8.75736V12.7502H15.25V11.2502Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM15.25 12.7502C15.6642 12.7502 16 12.4144 16 12.0002C16 11.586 15.6642 11.2502 15.25 11.2502H8.75736C8.34314 11.2502 8.00736 11.586 8.00736 12.0002C8.00736 12.4144 8.34314 12.7502 8.75736 12.7502H15.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'square-minus'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}