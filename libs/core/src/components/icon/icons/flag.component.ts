import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-flag
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-flag')
export class IconFlag extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 21.2498V15.0831M4.75 15.0831V3.77755C10.0003 1.18383 13.9997 6.37127 19.25 3.77755V15.0831C13.9997 17.6768 10.0003 12.4894 4.75 15.0831Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M11.7975 15.8054C9.60407 15.1904 7.66645 14.6672 5.5 15.5659V21.25C5.5 21.6642 5.16421 22 4.75 22C4.33579 22 4 21.6642 4 21.25V3.77775C4 3.49237 4.16195 3.23172 4.41781 3.10532C7.30137 1.68079 9.86003 2.39852 12.1345 3.03652L12.2025 3.0556C14.5359 3.70992 16.5799 4.2603 18.9178 3.10532C19.1503 2.99048 19.4256 3.00386 19.6458 3.14071C19.8661 3.27755 20 3.51845 20 3.77775V15.0833C20 15.3687 19.838 15.6293 19.5822 15.7557C16.6986 17.1803 14.14 16.4625 11.8655 15.8245L11.7975 15.8054Z" fill="currentColor"/>`
  /** @private */
  static _name = 'flag'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}