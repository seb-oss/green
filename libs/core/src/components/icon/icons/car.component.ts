import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-car
 */
@gdsCustomElement('gds-icon-car')
export class IconCar extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.25 10.75L6 4.75H18L21.75 10.75M2.25 10.75H0.75M2.25 10.75V19.25H5.75V17.1786H18.25V19.25H21.75V10.75M21.75 10.75H23.25M5.75 13.0357H7.75M16.25 13.0357H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.364 4.3525C5.50106 4.13321 5.74141 4 6 4H18C18.2586 4 18.4989 4.13321 18.636 4.3525L22.1657 10H23.25C23.6642 10 24 10.3358 24 10.75C24 11.1642 23.6642 11.5 23.25 11.5H22.5V19.25C22.5 19.6642 22.1642 20 21.75 20H18.25C17.8358 20 17.5 19.6642 17.5 19.25V17.9286H6.5V19.25C6.5 19.6642 6.16421 20 5.75 20H2.25C1.83579 20 1.5 19.6642 1.5 19.25V11.5H0.75C0.335786 11.5 0 11.1642 0 10.75C0 10.3358 0.335786 10 0.75 10H1.83431L5.364 4.3525ZM5 13.0357C5 12.6215 5.33579 12.2857 5.75 12.2857H7.75C8.16421 12.2857 8.5 12.6215 8.5 13.0357C8.5 13.4499 8.16421 13.7857 7.75 13.7857H5.75C5.33579 13.7857 5 13.4499 5 13.0357ZM15.5 13.0357C15.5 12.6215 15.8358 12.2857 16.25 12.2857H18.25C18.6642 12.2857 19 12.6215 19 13.0357C19 13.4499 18.6642 13.7857 18.25 13.7857H16.25C15.8358 13.7857 15.5 13.4499 15.5 13.0357Z" fill="currentColor"/>`
  /** @private */
  static _name = 'car'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}