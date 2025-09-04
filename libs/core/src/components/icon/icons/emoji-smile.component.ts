import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-emoji-smile
 */
@gdsCustomElement('gds-icon-emoji-smile')
export class IconEmojiSmile extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M14.8287 14.8284C13.2666 16.3905 10.734 16.3905 9.17188 14.8284" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9.5H15M15.25 9.5C15.25 9.77614 15.0261 10 14.75 10C14.4739 10 14.25 9.77614 14.25 9.5C14.25 9.22386 14.4739 9 14.75 9C15.0261 9 15.25 9.22386 15.25 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><path d="M9 9.5H9.5M9.75 9.5C9.75 9.77614 9.52614 10 9.25 10C8.97386 10 8.75 9.77614 8.75 9.5C8.75 9.22386 8.97386 9 9.25 9C9.52614 9 9.75 9.22386 9.75 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/><circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13.5 9.5C13.5 8.80964 14.0596 8.25 14.75 8.25C15.4404 8.25 16 8.80964 16 9.5C16 10.1904 15.4404 10.75 14.75 10.75C14.0596 10.75 13.5 10.1904 13.5 9.5ZM9.25 8.25C8.55964 8.25 8 8.80964 8 9.5C8 10.1904 8.55964 10.75 9.25 10.75C9.94036 10.75 10.5 10.1904 10.5 9.5C10.5 8.80964 9.94036 8.25 9.25 8.25ZM9.70221 14.2981C9.40931 14.0052 8.93444 14.0052 8.64155 14.2981C8.34865 14.591 8.34865 15.0659 8.64154 15.3588C10.4965 17.2138 13.5041 17.2138 15.3591 15.3588C15.6519 15.0659 15.6519 14.591 15.3591 14.2981C15.0662 14.0052 14.5913 14.0052 14.2984 14.2981C13.0292 15.5673 10.9714 15.5673 9.70221 14.2981Z" fill="currentColor"/>`
  /** @private */
  static _name = 'emoji-smile'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}