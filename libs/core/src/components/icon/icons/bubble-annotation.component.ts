import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubble-annotation
 */
@gdsCustomElement('gds-icon-bubble-annotation')
export class IconBubbleAnnotation extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M7.5 10.25C7.91421 10.25 8.25 10.5858 8.25 11C8.25 11.4142 7.91421 11.75 7.5 11.75C7.08579 11.75 6.75 11.4142 6.75 11C6.75 10.5858 7.08579 10.25 7.5 10.25ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75C11.5858 11.75 11.25 11.4142 11.25 11C11.25 10.5858 11.5858 10.25 12 10.25ZM16.5 10.25C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11C15.75 10.5858 16.0858 10.25 16.5 10.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="square"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0022 3.75C22.0022 3.33579 21.6664 3 21.2522 3H2.7522C2.33798 3 2.0022 3.33579 2.0022 3.75V18.25C2.0022 18.6642 2.33798 19 2.7522 19H6.2522V21C6.2522 21.2652 6.39222 21.5106 6.62048 21.6456C6.84873 21.7806 7.13129 21.785 7.36364 21.6572L12.1948 19H21.2522C21.6664 19 22.0022 18.6642 22.0022 18.25V3.75ZM6.5 11C6.5 11.5523 6.94772 12 7.5 12C8.05228 12 8.5 11.5523 8.5 11C8.5 10.4477 8.05228 10 7.5 10C6.94772 10 6.5 10.4477 6.5 11ZM11 11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11ZM16.5 12C15.9477 12 15.5 11.5523 15.5 11C15.5 10.4477 15.9477 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11C17.5 11.5523 17.0523 12 16.5 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubble-annotation'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}