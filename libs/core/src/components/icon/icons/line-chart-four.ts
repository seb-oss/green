import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-line-chart-four
 */
@gdsCustomElement('gds-icon-line-chart-four')
export class IconLineChartFour extends GdsIcon {
  /** @private */
  static _regularSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25V4.75C2 4.33579 2.33579 4 2.75 4ZM8.91602 8C9.33023 8 9.66602 8.33579 9.66602 8.75V19.25C9.66602 19.6642 9.33023 20 8.91602 20C8.5018 20 8.16602 19.6642 8.16602 19.25V8.75C8.16602 8.33579 8.5018 8 8.91602 8ZM15.082 12C15.4962 12 15.832 12.3358 15.832 12.75V19.25C15.832 19.6642 15.4962 20 15.082 20C14.6678 20 14.332 19.6642 14.332 19.25V12.75C14.332 12.3358 14.6678 12 15.082 12ZM21.248 16C21.6623 16 21.998 16.3358 21.998 16.75V19.25C21.998 19.6642 21.6623 20 21.248 20C20.8338 20 20.498 19.6642 20.498 19.25V16.75C20.498 16.3358 20.8338 16 21.248 16Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path d="M21.248 16.75V19.25M15.082 12.75V19.25M8.91602 8.75V19.25M2.75 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _name = 'line-chart-four'
}
