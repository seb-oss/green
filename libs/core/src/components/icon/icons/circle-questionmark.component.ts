import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-circle-questionmark
 */
@gdsCustomElement('gds-icon-circle-questionmark')
export class IconCircleQuestionmark extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M9.75 9.25V7.75H14.25V10.5L12 12V13.25M12 16V15.99M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12ZM12.25 16C12.25 16.1381 12.1381 16.25 12 16.25C11.8619 16.25 11.75 16.1381 11.75 16C11.75 15.8619 11.8619 15.75 12 15.75C12.1381 15.75 12.25 15.8619 12.25 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM9 7.75C9 7.33579 9.33579 7 9.75 7H14.25C14.6642 7 15 7.33579 15 7.75V10.5C15 10.7508 14.8747 10.9849 14.666 11.124L12.75 12.4014V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V12C11.25 11.7492 11.3753 11.5151 11.584 11.376L13.5 10.0986V8.5H10.5V9.25C10.5 9.66421 10.1642 10 9.75 10C9.33579 10 9 9.66421 9 9.25V7.75ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15Z" fill="currentColor"/>`
  /** @private */
  static _name = 'circle-questionmark'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}