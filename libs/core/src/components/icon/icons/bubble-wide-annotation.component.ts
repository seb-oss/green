import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bubble-wide-annotation
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-bubble-wide-annotation')
export class IconBubbleWideAnnotation extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 3.75H21.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H2.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.625 11C6.625 11.4832 7.01675 11.875 7.5 11.875C7.98325 11.875 8.375 11.4832 8.375 11C8.375 10.5168 7.98325 10.125 7.5 10.125C7.01675 10.125 6.625 10.5168 6.625 11ZM11.125 11C11.125 11.4832 11.5168 11.875 12 11.875C12.4832 11.875 12.875 11.4832 12.875 11C12.875 10.5168 12.4832 10.125 12 10.125C11.5168 10.125 11.125 10.5168 11.125 11ZM15.625 11C15.625 11.4832 16.0168 11.875 16.5 11.875C16.9832 11.875 17.375 11.4832 17.375 11C17.375 10.5168 16.9832 10.125 16.5 10.125C16.0168 10.125 15.625 10.5168 15.625 11Z" fill="currentColor" stroke="currentColor" stroke-width="0.75" stroke-linecap="square"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 3.33579 2.33579 3 2.75 3H21.25C21.6642 3 22 3.33579 22 3.75V18.25C22 18.6642 21.6642 19 21.25 19H15.2858L12.4764 21.3275C12.1976 21.5585 11.7936 21.5574 11.5161 21.3248L8.74274 19H2.75C2.33579 19 2 18.6642 2 18.25V3.75ZM6.5 11C6.5 11.5523 6.94772 12 7.5 12C8.05228 12 8.5 11.5523 8.5 11C8.5 10.4477 8.05228 10 7.5 10C6.94772 10 6.5 10.4477 6.5 11ZM11 11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11ZM16.5 12C15.9477 12 15.5 11.5523 15.5 11C15.5 10.4477 15.9477 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11C17.5 11.5523 17.0523 12 16.5 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bubble-wide-annotation'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}