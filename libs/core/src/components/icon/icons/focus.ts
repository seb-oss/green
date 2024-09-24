import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-focus
 */
@gdsCustomElement('gds-icon-focus')
export class IconFocus extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.25 3.75H3.75V8.25M15.75 3.75H20.25V8.25M20.25 15.75V20.25H15.75M8.25 20.25H3.75V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M8.25 3.75H3.75V8.25M15.75 3.75H20.25V8.25M20.25 15.75V20.25H15.75M8.25 20.25H3.75V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _name = 'focus'
}
