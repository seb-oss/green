import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-shopping-bag
 */
@gdsCustomElement('gds-icon-shopping-bag')
export class IconShoppingBag extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.25 7.75V6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V7.75M6.25 7.75H17.75L19.75 21.25H4.25L6.25 7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V7H17.75C18.1218 7 18.4374 7.27234 18.4919 7.64009L20.4919 21.1401C20.5239 21.3558 20.4603 21.5748 20.3179 21.7399C20.1754 21.9051 19.9681 22 19.75 22H4.25001C4.03191 22 3.82461 21.9051 3.68214 21.7399C3.53967 21.5748 3.47614 21.3558 3.5081 21.1401L5.5081 7.64009C5.56258 7.27234 5.87824 7 6.25001 7H8V6ZM9.5 7H14.5V6C14.5 4.61929 13.3807 3.5 12 3.5C10.6193 3.5 9.5 4.61929 9.5 6V7Z" fill="currentColor"/>`
  /** @private */
  static _name = 'shopping-bag'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}