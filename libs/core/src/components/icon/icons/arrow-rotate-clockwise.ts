import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-rotate-clockwise
 */
@gdsCustomElement('gds-icon-arrow-rotate-clockwise')
export class IconArrowRotateClockwise extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.7596 14.75C18.627 17.9543 15.5711 20.25 11.979 20.25C7.42266 20.25 3.729 16.5563 3.729 12C3.729 7.44365 7.42266 3.75 11.979 3.75C14.7962 3.75 16.6791 4.95438 18.5 7.00891M19.25 4V8H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.47852 12C4.47852 7.85786 7.83638 4.5 11.9785 4.5C13.4412 4.5 14.601 4.85088 15.634 5.4849C16.3541 5.92693 17.0281 6.51595 17.7063 7.25H15.25C14.8358 7.25 14.5 7.58579 14.5 8C14.5 8.41421 14.8358 8.75 15.25 8.75H19.25C19.6642 8.75 20 8.41421 20 8V4C20 3.58579 19.6642 3.25 19.25 3.25C18.8358 3.25 18.5 3.58579 18.5 4V5.90758C17.8486 5.24074 17.166 4.66521 16.4186 4.20651C15.1414 3.42256 13.7085 3 11.9785 3C7.00795 3 2.97852 7.02944 2.97852 12C2.97852 16.9706 7.00795 21 11.9785 21C15.8983 21 19.2311 18.4945 20.4662 14.9999C20.6042 14.6094 20.3995 14.1809 20.009 14.0429C19.6185 13.9048 19.19 14.1095 19.0519 14.5001C18.022 17.4141 15.2429 19.5 11.9785 19.5C7.83638 19.5 4.47852 16.1421 4.47852 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-rotate-clockwise'
}
