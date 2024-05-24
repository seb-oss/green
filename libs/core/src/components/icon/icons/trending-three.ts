import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-trending-three
 */
@gdsCustomElement('gds-icon-trending-three')
export class IconTrendingThree extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 13.0312L5 10L8 15L13 3.75L18 20.25L21.25 14.0625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0465 3.00145C13.3592 3.02086 13.6269 3.23264 13.7178 3.5325L18.1871 18.2811L20.5861 13.7138C20.7787 13.347 21.2321 13.2059 21.5988 13.3985C21.9655 13.5911 22.1066 14.0446 21.914 14.4113L18.664 20.5988C18.5225 20.8682 18.2321 21.0254 17.9291 20.9966C17.6261 20.9679 17.3705 20.7588 17.2823 20.4675L12.8668 5.89646L8.68541 15.3046C8.57175 15.5603 8.32517 15.7315 8.04584 15.7486C7.76652 15.7657 7.50091 15.6258 7.35693 15.3859L4.93389 11.3475L3.35227 13.4783C3.1054 13.8109 2.63563 13.8804 2.30303 13.6335C1.97043 13.3866 1.90094 12.9168 2.14782 12.5842L4.39782 9.55299C4.54705 9.35195 4.78675 9.23863 5.03683 9.25091C5.2869 9.26319 5.51435 9.39944 5.64317 9.61414L7.90075 13.3768L12.3147 3.4454C12.4419 3.15908 12.7338 2.98204 13.0465 3.00145Z" fill="currentColor"/>`
  /** @private */
  static _name = 'trending three'
}