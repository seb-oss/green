import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-line-chart-two
 */
@gdsCustomElement('gds-icon-line-chart-two')
export class IconLineChartTwo extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 10.75V19.25M8.91602 4.75V19.25M15.082 13.75V19.25M21.248 7.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M9.66602 4.75C9.66602 4.33579 9.33023 4 8.91602 4C8.5018 4 8.16602 4.33579 8.16602 4.75V19.25C8.16602 19.6642 8.5018 20 8.91602 20C9.33023 20 9.66602 19.6642 9.66602 19.25V4.75Z" fill="currentColor"/><path d="M3.5 10.75C3.5 10.3358 3.16421 10 2.75 10C2.33579 10 2 10.3358 2 10.75V19.25C2 19.6642 2.33579 20 2.75 20C3.16421 20 3.5 19.6642 3.5 19.25V10.75Z" fill="currentColor"/><path d="M15.082 13C15.4962 13 15.832 13.3358 15.832 13.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V13.75C14.332 13.3358 14.6678 13 15.082 13Z" fill="currentColor"/><path d="M21.998 7.75C21.998 7.33579 21.6623 7 21.248 7C20.8338 7 20.498 7.33579 20.498 7.75V19.25C20.498 19.6642 20.8338 20 21.248 20C21.6623 20 21.998 19.6642 21.998 19.25V7.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'line-chart-two'
}
