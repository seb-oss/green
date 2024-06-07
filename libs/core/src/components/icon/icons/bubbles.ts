import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubbles
 */
@gdsCustomElement('gds-icon-bubbles')
export class IconBubbles extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17.25 14.25H21.2522V3.75H7.0022V7.75M17.2522 7.75H2.7522V18.25H6.0022V20.75L10.5022 18.25H17.2522V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M21.252 3C21.6662 3 22.002 3.33579 22.002 3.75V14.25C22.002 14.6642 21.6662 15 21.252 15H18.002V18.25C18.002 18.6642 17.6662 19 17.252 19H10.6963L6.36619 21.4056C6.13389 21.5347 5.85064 21.5312 5.62161 21.3964C5.39257 21.2616 5.25195 21.0157 5.25195 20.75V19H2.75195C2.33774 19 2.00195 18.6642 2.00195 18.25V7.75C2.00195 7.33579 2.33774 7 2.75195 7H6.25195V3.75C6.25195 3.33579 6.58774 3 7.00195 3H21.252ZM7.75195 7H17.252C17.6662 7 18.002 7.33579 18.002 7.75V13.5H20.502V4.5H7.75195V7Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubbles'
}