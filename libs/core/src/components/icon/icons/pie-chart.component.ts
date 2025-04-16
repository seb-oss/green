import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-pie-chart
 */
@gdsCustomElement('gds-icon-pie-chart')
export class IconPieChart extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21.25 9.25C20.7693 5.88913 18.1109 3.23074 14.75 2.75V9.25H21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 13C19.25 17.5563 15.5563 21.25 11 21.25C6.44365 21.25 2.75 17.5563 2.75 13C2.75 8.44365 6.44365 4.75 11 4.75C11.085 4.75 11.1697 4.75129 11.2541 4.75384V12.7502H19.2463C19.2488 12.8332 19.25 12.9164 19.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M14.2586 2.18337C14.4229 2.04092 14.6409 1.97677 14.8562 2.00756C18.5469 2.53548 21.4645 5.45306 21.9924 9.14381C22.0232 9.35906 21.9591 9.57708 21.8166 9.74136C21.6742 9.90564 21.4674 10 21.25 10H14.75C14.3358 10 14 9.66422 14 9.25001V2.75C14 2.53256 14.0944 2.32582 14.2586 2.18337Z" fill="currentColor"/><path d="M2 13C2 8.02944 6.02944 4 11 4C11.0926 4 11.1849 4.0014 11.2768 4.00418C11.682 4.01644 12.0041 4.34846 12.0041 4.75384V12.0002H19.2463C19.6518 12.0002 19.9839 12.3226 19.996 12.7279C19.9986 12.8183 20 12.909 20 13C20 17.9706 15.9706 22 11 22C6.02944 22 2 17.9706 2 13Z" fill="currentColor"/>`
  /** @private */
  static _name = 'pie-chart'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}