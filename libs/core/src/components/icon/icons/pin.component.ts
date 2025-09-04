import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-pin
 */
@gdsCustomElement('gds-icon-pin')
export class IconPin extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 20.25L8.38235 15.6176M11.5 7.5L14.5 2.75L21.25 9.5L16.5 12.5L14 20.25L3.75 10L11.5 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M15.0303 2.21967C14.8692 2.0585 14.6434 1.97937 14.4169 2.00462C14.1904 2.02988 13.9876 2.15679 13.8659 2.34951L11.0111 6.86968L3.51976 9.28622C3.27115 9.36642 3.08218 9.5702 3.02092 9.82415C2.95967 10.0781 3.03497 10.3456 3.21969 10.5303L7.81436 15.125L3.21969 19.7197C2.92679 20.0126 2.92679 20.4874 3.21969 20.7803C3.51258 21.0732 3.98745 21.0732 4.28035 20.7803L8.87502 16.1857L13.4697 20.7803C13.6544 20.9651 13.9219 21.0403 14.1759 20.9791C14.4298 20.9178 14.6336 20.7289 14.7138 20.4803L17.1303 12.989L21.6505 10.1341C21.8432 10.0124 21.9701 9.80965 21.9954 9.58311C22.0207 9.35658 21.9415 9.13085 21.7803 8.96968L15.0303 2.21967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'pin'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}