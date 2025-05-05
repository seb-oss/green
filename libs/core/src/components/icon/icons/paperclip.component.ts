import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-paperclip
 */
@gdsCustomElement('gds-icon-paperclip')
export class IconPaperclip extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M5.75 10.75V15.25C5.75 18.5637 8.43629 21.25 11.75 21.25H12.25C15.5637 21.25 18.25 18.5637 18.25 15.25V7C18.25 4.65279 16.3472 2.75 14 2.75C11.6528 2.75 9.75 4.65279 9.75 7V14.875C9.75 16.0486 10.7014 17 11.875 17C13.0486 17 14 16.0486 14 14.875V7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`
  /** @private */
  static _solidSVG = `<path d="M14 2C11.2386 2 9 4.23858 9 7V14.875C9 16.4628 10.2872 17.75 11.875 17.75C13.4628 17.75 14.75 16.4628 14.75 14.875V7.75C14.75 7.33579 14.4142 7 14 7C13.5858 7 13.25 7.33579 13.25 7.75V14.875C13.25 15.6344 12.6344 16.25 11.875 16.25C11.1156 16.25 10.5 15.6344 10.5 14.875V7C10.5 5.067 12.067 3.5 14 3.5C15.933 3.5 17.5 5.067 17.5 7V15.25C17.5 18.1495 15.1495 20.5 12.25 20.5H11.75C8.85051 20.5 6.5 18.1495 6.5 15.25V10.75C6.5 10.3358 6.16421 10 5.75 10C5.33579 10 5 10.3358 5 10.75V15.25C5 18.9779 8.02208 22 11.75 22H12.25C15.9779 22 19 18.9779 19 15.25V7C19 4.23858 16.7614 2 14 2Z" fill="currentColor"/>`
  /** @private */
  static _name = 'paperclip'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}