import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-credit-card-add
 */
@gdsCustomElement('gds-icon-credit-card-add')
export class IconCreditCardAdd extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 9.75005V19.2461H13.4961M2.75 9.75005V4.75293H21.2422C21.247 6.41863 21.2461 8.08434 21.2461 9.75005M2.75 9.75005H21.2461M21.2461 9.75005V11.2481M19.25 14.25V17.25M19.25 17.25V20.25M19.25 17.25H16.25M19.25 17.25H22.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M2 4.75293C2 4.33872 2.33579 4.00293 2.75 4.00293H21.2422C21.6556 4.00293 21.991 4.33739 21.9922 4.75075C21.9964 6.18525 21.9962 7.61979 21.9961 9.05303L21.9961 12L19.25 12C18.0074 12 17 13.0074 17 14.25V15H16.25C15.0074 15 14 16.0074 14 17.25L14.0001 19.9961H2.75C2.33579 19.9961 2 19.6604 2 19.2461V10.5H21.9961V9H2V4.75293Z" fill="black"/><path d="M20 14.25C20 13.8358 19.6642 13.5 19.25 13.5C18.8358 13.5 18.5 13.8358 18.5 14.25V16.5H16.25C15.8358 16.5 15.5 16.8358 15.5 17.25C15.5 17.6642 15.8358 18 16.25 18H18.5V20.25C18.5 20.6642 18.8358 21 19.25 21C19.6642 21 20 20.6642 20 20.25V18H22.25C22.6642 18 23 17.6642 23 17.25C23 16.8358 22.6642 16.5 22.25 16.5H20V14.25Z" fill="black"/>`
  /** @private */
  static _name = 'credit-card-add'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}