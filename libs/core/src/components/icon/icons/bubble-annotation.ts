import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubble-annotation
 */
@gdsCustomElement('gds-icon-bubble-annotation')
export class IconBubbleAnnotation extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M6.75 11C6.75 11.4142 7.08579 11.75 7.5 11.75C7.91421 11.75 8.25 11.4142 8.25 11C8.25 10.5858 7.91421 10.25 7.5 10.25C7.08579 10.25 6.75 10.5858 6.75 11ZM11.25 11C11.25 11.4142 11.5858 11.75 12 11.75C12.4142 11.75 12.75 11.4142 12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11ZM15.75 11C15.75 11.4142 16.0858 11.75 16.5 11.75C16.9142 11.75 17.25 11.4142 17.25 11C17.25 10.5858 16.9142 10.25 16.5 10.25C16.0858 10.25 15.75 10.5858 15.75 11Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="square"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M22.002 3.75C22.002 3.33579 21.6662 3 21.252 3H2.75195C2.33774 3 2.00195 3.33579 2.00195 3.75V18.25C2.00195 18.6642 2.33774 19 2.75195 19H6.25195V21C6.25195 21.2652 6.39198 21.5106 6.62023 21.6456C6.84849 21.7806 7.13105 21.785 7.36339 21.6572L12.1946 19H21.252C21.6662 19 22.002 18.6642 22.002 18.25V3.75ZM6.49976 11C6.49976 11.5523 6.94747 12 7.49976 12C8.05204 12 8.49976 11.5523 8.49976 11C8.49976 10.4477 8.05204 10 7.49976 10C6.94747 10 6.49976 10.4477 6.49976 11ZM10.9998 11C10.9998 11.5523 11.4475 12 11.9998 12C12.552 12 12.9998 11.5523 12.9998 11C12.9998 10.4477 12.552 10 11.9998 10C11.4475 10 10.9998 10.4477 10.9998 11ZM16.4998 12C15.9475 12 15.4998 11.5523 15.4998 11C15.4998 10.4477 15.9475 10 16.4998 10C17.052 10 17.4998 10.4477 17.4998 11C17.4998 11.5523 17.052 12 16.4998 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubble annotation'
}