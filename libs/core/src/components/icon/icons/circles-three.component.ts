import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-circles-three
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-circles-three')
export class IconCirclesThree extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M14.6766 7.38126C13.686 5.23749 11.5167 3.75 9 3.75C5.54822 3.75 2.75 6.54822 2.75 10C2.75 13.3961 5.45873 16.1596 8.83359 16.2478M21.25 14C21.25 17.4518 18.4518 20.25 15 20.25C12.3406 20.25 10.0691 18.589 9.16641 16.2478C8.89745 15.5503 8.75 14.7924 8.75 14C8.75 10.6039 11.4587 7.84038 14.8336 7.75217C14.8889 7.75073 14.9444 7.75 15 7.75C18.4518 7.75 21.25 10.5482 21.25 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>`
  /** @private */
  static _solidSVG = `<path d="M22 14C22 17.866 18.866 21 15 21C11.134 21 8 17.866 8 14C8 10.134 11.134 7 15 7C18.866 7 22 10.134 22 14Z" fill="currentColor"/><path d="M14.3807 5.52222C9.9754 5.83942 6.5 9.51385 6.5 14C6.5 14.9402 6.65266 15.8448 6.93455 16.6903C4.07675 15.809 2 13.147 2 10C2 6.13401 5.13401 3 9 3C11.1629 3 13.0967 3.98095 14.3807 5.52222Z" fill="currentColor"/>`
  /** @private */
  static _name = 'circles-three'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}