import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-dot-grid-one-vertical
 */
@gdsCustomElement('gds-icon-dot-grid-one-vertical')
export class IconDotGridOneVertical extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 4.75C12.5523 4.75 13 4.30228 13 3.75C13 3.19772 12.5523 2.75 12 2.75C11.4477 2.75 11 3.19772 11 3.75C11 4.30228 11.4477 4.75 12 4.75Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M12 21.25C12.5523 21.25 13 20.8023 13 20.25C13 19.6977 12.5523 19.25 12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25Z" fill="currentColor"/><path d="M12 4.75C12.5523 4.75 13 4.30228 13 3.75C13 3.19772 12.5523 2.75 12 2.75C11.4477 2.75 11 3.19772 11 3.75C11 4.30228 11.4477 4.75 12 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21.25C12.5523 21.25 13 20.8023 13 20.25C13 19.6977 12.5523 19.25 12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 2C11.0335 2 10.25 2.7835 10.25 3.75C10.25 4.7165 11.0335 5.5 12 5.5C12.9665 5.5 13.75 4.7165 13.75 3.75C13.75 2.7835 12.9665 2 12 2Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M12 18.5C11.0335 18.5 10.25 19.2835 10.25 20.25C10.25 21.2165 11.0335 22 12 22C12.9665 22 13.75 21.2165 13.75 20.25C13.75 19.2835 12.9665 18.5 12 18.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'dot-grid-one-vertical'
}
