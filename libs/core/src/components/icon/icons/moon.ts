import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-moon
 */
@gdsCustomElement('gds-icon-moon')
export class IconMoon extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21.2481 11.8112C20.1889 12.56 18.8958 13 17.5 13C13.9101 13 11 10.0899 11 6.5C11 5.10416 11.44 3.81108 12.1888 2.75189C12.126 2.75063 12.0631 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.9369 21.2494 11.874 21.2481 11.8112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.9319 21.9993 11.8639 21.998 11.7962C21.9924 11.5186 21.834 11.2669 21.5862 11.1417C21.3384 11.0166 21.0418 11.0385 20.8151 11.1988C19.8784 11.861 18.7358 12.25 17.5 12.25C14.3244 12.25 11.75 9.67564 11.75 6.5C11.75 5.26425 12.139 4.12157 12.8012 3.18485C12.9615 2.95819 12.9834 2.66155 12.8583 2.41377C12.7331 2.16599 12.4814 2.0076 12.2038 2.00204C12.136 2.00068 12.0681 2 12 2Z" fill="currentColor"/>`
  /** @private */
  static _name = 'moon'
}
