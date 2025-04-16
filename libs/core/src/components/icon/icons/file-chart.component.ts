import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-file-chart
 */
@gdsCustomElement('gds-icon-file-chart')
export class IconFileChart extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.75 2.75H4.75V21.25H19.25V9.25M12.75 2.75L19.25 9.25M12.75 2.75V9.25H19.25M8.5 17.25V15.75M12 17.25V12.75M15.5 17.25V14.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2H12V9.25C12 9.66421 12.3358 10 12.75 10H20V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V2.75C4 2.33579 4.33579 2 4.75 2ZM9.25 16.75C9.25 16.3358 8.91421 16 8.5 16C8.08579 16 7.75 16.3358 7.75 16.75V18.25C7.75 18.6642 8.08579 19 8.5 19C8.91421 19 9.25 18.6642 9.25 18.25V16.75ZM12 13C12.4142 13 12.75 13.3358 12.75 13.75V18.25C12.75 18.6642 12.4142 19 12 19C11.5858 19 11.25 18.6642 11.25 18.25V13.75C11.25 13.3358 11.5858 13 12 13ZM16.25 15.75C16.25 15.3358 15.9142 15 15.5 15C15.0858 15 14.75 15.3358 14.75 15.75V18.25C14.75 18.6642 15.0858 19 15.5 19C15.9142 19 16.25 18.6642 16.25 18.25V15.75Z" fill="currentColor"/><path d="M13.5 2.43934L19.5607 8.5H13.5V2.43934Z" fill="currentColor"/>`
  /** @private */
  static _name = 'file-chart'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}