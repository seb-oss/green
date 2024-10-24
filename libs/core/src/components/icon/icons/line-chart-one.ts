import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-line-chart-one
 */
@gdsCustomElement('gds-icon-line-chart-one')
export class IconLineChartOne extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.25 10.75V16.25M14.25 4.75V16.25M19.25 12.75V16.25M3.75 3.75V20.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H21.25C21.6642 21 22 20.6642 22 20.25C22 19.8358 21.6642 19.5 21.25 19.5H4.5V3.75Z" fill="currentColor"/><path d="M15 4.75C15 4.33579 14.6642 4 14.25 4C13.8358 4 13.5 4.33579 13.5 4.75V16.25C13.5 16.6642 13.8358 17 14.25 17C14.6642 17 15 16.6642 15 16.25V4.75Z" fill="currentColor"/><path d="M10 10.75C10 10.3358 9.66421 10 9.25 10C8.83579 10 8.5 10.3358 8.5 10.75V16.25C8.5 16.6642 8.83579 17 9.25 17C9.66421 17 10 16.6642 10 16.25V10.75Z" fill="currentColor"/><path d="M20 12.75C20 12.3358 19.6642 12 19.25 12C18.8358 12 18.5 12.3358 18.5 12.75V16.25C18.5 16.6642 18.8358 17 19.25 17C19.6642 17 20 16.6642 20 16.25V12.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'line-chart-one'
}
