import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-pdf
 */
@gdsCustomElement('gds-icon-pdf')
export class IconPdf extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 11.25V3.75H15L19.25 8V11.25M13.75 4.25V9.25H18.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 20.25V14.75H5.75C6.57843 14.75 7.25 15.4216 7.25 16.25C7.25 17.0784 6.57843 17.75 5.75 17.75H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 14.75V20.25H11.25C12.3333 20.25 14 19.7 14 17.5C14 15.3 12.3333 14.75 11.25 14.75H9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 14.75H16.75V20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.75 17.75H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M13 3H4.75C4.33579 3 4 3.33579 4 3.75V12H20V10H13.75C13.3358 10 13 9.66421 13 9.25V3Z" fill="currentColor"/><path d="M20 8.5V8C20 7.80109 19.921 7.61032 19.7803 7.46967L15.5303 3.21967C15.3897 3.07902 15.1989 3 15 3H14.5V8.5H20Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.75C3 14.3358 3.33579 14 3.75 14H5.75C6.99264 14 8 15.0074 8 16.25C8 17.4926 6.99264 18.5 5.75 18.5H4.5V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V14.75ZM4.5 17H5.75C6.16421 17 6.5 16.6642 6.5 16.25C6.5 15.8358 6.16421 15.5 5.75 15.5H4.5V17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.75C9 14.3358 9.33579 14 9.75 14H11.25C11.8978 14 12.76 14.1611 13.4802 14.6992C14.2369 15.2646 14.75 16.183 14.75 17.5C14.75 18.817 14.2369 19.7354 13.4802 20.3008C12.76 20.8389 11.8978 21 11.25 21H9.75C9.33579 21 9 20.6642 9 20.25V14.75ZM10.5 15.5V19.5H11.25C11.6856 19.5 12.1984 19.3861 12.5823 19.0992C12.9298 18.8396 13.25 18.383 13.25 17.5C13.25 16.617 12.9298 16.1604 12.5823 15.9008C12.1984 15.6139 11.6856 15.5 11.25 15.5H10.5Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 14.75C16 14.3358 16.3358 14 16.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H17.5V17H19.25C19.6642 17 20 17.3358 20 17.75C20 18.1642 19.6642 18.5 19.25 18.5H17.5V20.25C17.5 20.6642 17.1642 21 16.75 21C16.3358 21 16 20.6642 16 20.25V14.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'pdf'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}