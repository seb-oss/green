import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-line-chart-three
 */
@gdsCustomElement('gds-icon-line-chart-three')
export class IconLineChartThree extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 16.75V19.25M8.91602 12.75L8.91602 19.25M15.082 8.75V19.25M21.248 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M21.998 4.75C21.998 4.33579 21.6623 4 21.248 4C20.8338 4 20.498 4.33579 20.498 4.75V19.25C20.498 19.6642 20.8338 20 21.248 20C21.6623 20 21.998 19.6642 21.998 19.25V4.75Z" fill="currentColor"/><path d="M15.082 8C15.4962 8 15.832 8.33579 15.832 8.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V8.75C14.332 8.33579 14.6678 8 15.082 8Z" fill="currentColor"/><path d="M9.66602 12.75C9.66602 12.3358 9.33023 12 8.91602 12C8.5018 12 8.16602 12.3358 8.16602 12.75L8.16602 19.25C8.16602 19.6642 8.5018 20 8.91602 20C9.33023 20 9.66602 19.6642 9.66602 19.25L9.66602 12.75Z" fill="currentColor"/><path d="M3.5 16.75C3.5 16.3358 3.16421 16 2.75 16C2.33579 16 2 16.3358 2 16.75V19.25C2 19.6642 2.33579 20 2.75 20C3.16421 20 3.5 19.6642 3.5 19.25V16.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'line-chart-three'
}
