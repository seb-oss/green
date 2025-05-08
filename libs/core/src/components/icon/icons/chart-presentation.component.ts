import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-chart-presentation
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-chart-presentation')
export class IconChartPresentation extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M16 21.75L15.1431 18.7507M8 21.75L8.85694 18.7507M7.75 12.75V14.25M12 7.75V14.25M16.25 10.75V14.25M21.25 3.75V18.25H2.75V3.75H21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V18.25C22 18.6642 21.6642 19 21.25 19H15.9943L16.7211 21.544C16.8349 21.9422 16.6043 22.3573 16.206 22.4711C15.8078 22.5849 15.3927 22.3543 15.2789 21.956L14.4343 19H9.56573L8.72114 21.956C8.60735 22.3543 8.19224 22.5849 7.79396 22.4711C7.39568 22.3573 7.16506 21.9422 7.27886 21.544L8.0057 19H2.75C2.33579 19 2 18.6642 2 18.25V3.75ZM8.5 12.75C8.5 12.3358 8.16421 12 7.75 12C7.33579 12 7 12.3358 7 12.75V14.25C7 14.6642 7.33579 15 7.75 15C8.16421 15 8.5 14.6642 8.5 14.25V12.75ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V7.75C11.25 7.33579 11.5858 7 12 7ZM17 10.75C17 10.3358 16.6642 10 16.25 10C15.8358 10 15.5 10.3358 15.5 10.75V14.25C15.5 14.6642 15.8358 15 16.25 15C16.6642 15 17 14.6642 17 14.25V10.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'chart-presentation'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}