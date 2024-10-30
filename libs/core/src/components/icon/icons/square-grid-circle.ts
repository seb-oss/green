import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-square-grid-circle
 */
@gdsCustomElement('gds-icon-square-grid-circle')
export class IconSquareGridCircle extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 3.75H10.25V10.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13.75H10.25V20.25H3.75V13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 17C13.75 15.2051 15.2051 13.75 17 13.75C18.7949 13.75 20.25 15.2051 20.25 17C20.25 18.7949 18.7949 20.25 17 20.25C15.2051 20.25 13.75 18.7949 13.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 3.75H20.25V10.25H13.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M3 3.75C3 3.33579 3.33579 3 3.75 3H10.25C10.6642 3 11 3.33579 11 3.75V10.25C11 10.6642 10.6642 11 10.25 11H3.75C3.33579 11 3 10.6642 3 10.25V3.75Z" fill="currentColor"/><path d="M3 13.75C3 13.3358 3.33579 13 3.75 13H10.25C10.6642 13 11 13.3358 11 13.75V20.25C11 20.6642 10.6642 21 10.25 21H3.75C3.33579 21 3 20.6642 3 20.25V13.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13ZM14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C18.3807 14.5 19.5 15.6193 19.5 17C19.5 18.3807 18.3807 19.5 17 19.5C15.6193 19.5 14.5 18.3807 14.5 17Z" fill="currentColor"/><path d="M13.75 3C13.3358 3 13 3.33579 13 3.75V10.25C13 10.6642 13.3358 11 13.75 11H20.25C20.6642 11 21 10.6642 21 10.25V3.75C21 3.33579 20.6642 3 20.25 3H13.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'square-grid-circle'
}
