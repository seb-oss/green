import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-ticket
 */
@gdsCustomElement('gds-icon-ticket')
export class IconTicket extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.25 7.75V8.25M15.25 11.75V12.25M15.25 15.75V16.25M2.75 4.75H21.25V9.25C18.5 10 18.5 14 21.25 14.75V19.25H2.75V14.75C5.5 14 5.5 10 2.75 9.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H21.25C21.6642 4 22 4.33579 22 4.75V9.25C22 9.58821 21.7736 9.88458 21.4473 9.97357C19.4342 10.5226 19.4342 13.4774 21.4473 14.0264C21.7736 14.1154 22 14.4118 22 14.75V19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25V14.75C2 14.4118 2.22637 14.1154 2.55266 14.0264C4.56578 13.4774 4.56578 10.5226 2.55266 9.97357C2.22637 9.88458 2 9.58821 2 9.25V4.75ZM15.25 7C15.6642 7 16 7.33579 16 7.75V8.25C16 8.66421 15.6642 9 15.25 9C14.8358 9 14.5 8.66421 14.5 8.25V7.75C14.5 7.33579 14.8358 7 15.25 7ZM15.25 11C15.6642 11 16 11.3358 16 11.75V12.25C16 12.6642 15.6642 13 15.25 13C14.8358 13 14.5 12.6642 14.5 12.25V11.75C14.5 11.3358 14.8358 11 15.25 11ZM15.25 15C15.6642 15 16 15.3358 16 15.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V15.75C14.5 15.3358 14.8358 15 15.25 15Z" fill="currentColor"/>`
  /** @private */
  static _name = 'ticket'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}