import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chart-two
 */
@gdsCustomElement('gds-icon-chart-two')
export class IconChartTwo extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.25 20.25V13.75H3.75V20.25H9.25ZM9.25 20.25H14.75M9.25 20.25V3.75H14.75V20.25M14.75 20.25H20.25V8.75H14.75V20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M10.75 3.00098C10.3358 3.00098 10 3.33676 10 3.75098V20.2539C10 20.6681 10.3358 21.0039 10.75 21.0039H14.25C14.6642 21.0039 15 20.6681 15 20.2539V3.75098C15 3.33676 14.6642 3.00098 14.25 3.00098H10.75Z" fill="currentColor"/><path d="M3.75 13.0039C3.33579 13.0039 3 13.3397 3 13.7539V20.2539C3 20.6681 3.33579 21.0039 3.75 21.0039H7.25C7.66421 21.0039 8 20.6681 8 20.2539V13.7539C8 13.3397 7.66421 13.0039 7.25 13.0039H3.75Z" fill="currentColor"/><path d="M17 8.75C17 8.33579 17.3358 8 17.75 8H21.25C21.6642 8 22 8.33579 22 8.75V20.2539C22 20.6681 21.6642 21.0039 21.25 21.0039H17.75C17.3358 21.0039 17 20.6681 17 20.2539V8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chart-two'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}