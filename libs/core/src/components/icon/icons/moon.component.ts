import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-moon
 */
@gdsCustomElement('gds-icon-moon')
export class IconMoon extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21.248 11.8112C20.1888 12.56 18.8957 13 17.4999 13C13.91 13 10.9999 10.0899 10.9999 6.5C10.9999 5.10416 11.4399 3.81108 12.1887 2.75189C12.1259 2.75063 12.063 2.75 11.9999 2.75C6.89124 2.75 2.74988 6.89137 2.74988 12C2.74988 17.1086 6.89124 21.25 11.9999 21.25C17.1085 21.25 21.2499 17.1086 21.2499 12C21.2499 11.9369 21.2492 11.874 21.248 11.8112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.9319 21.9993 11.8639 21.998 11.7962C21.9924 11.5186 21.834 11.2669 21.5862 11.1417C21.3384 11.0166 21.0418 11.0385 20.8151 11.1988C19.8784 11.861 18.7358 12.25 17.5 12.25C14.3244 12.25 11.75 9.67564 11.75 6.5C11.75 5.26425 12.139 4.12157 12.8012 3.18485C12.9615 2.95819 12.9834 2.66155 12.8583 2.41377C12.7331 2.16599 12.4814 2.0076 12.2038 2.00204C12.136 2.00068 12.0681 2 12 2Z" fill="currentColor"/>`
  /** @private */
  static _name = 'moon'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}