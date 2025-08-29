import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-emoji-sad
 */
@gdsCustomElement('gds-icon-emoji-sad')
export class IconEmojiSad extends GdsIcon {
  /** @private */
  static _regularSVG = `<circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17188 15.4216C10.734 13.8595 13.2666 13.8595 14.8287 15.4216" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 9.5H15M15.25 9.5C15.25 9.77614 15.0261 10 14.75 10C14.4739 10 14.25 9.77614 14.25 9.5C14.25 9.22386 14.4739 9 14.75 9C15.0261 9 15.25 9.22386 15.25 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9.5H9.5M9.75 9.5C9.75 9.77614 9.52614 10 9.25 10C8.97386 10 8.75 9.77614 8.75 9.5C8.75 9.22386 8.97386 9 9.25 9C9.52614 9 9.75 9.22386 9.75 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70221 15.9519C10.9714 14.6827 13.0292 14.6827 14.2984 15.9519C14.5913 16.2448 15.0662 16.2448 15.3591 15.9519C15.6519 15.659 15.6519 15.1841 15.3591 14.8912C13.5041 13.0363 10.4965 13.0363 8.64154 14.8912C8.34865 15.1841 8.34865 15.659 8.64154 15.9519C8.93444 16.2448 9.40931 16.2448 9.70221 15.9519ZM14.75 8.25C14.0596 8.25 13.5 8.80964 13.5 9.5C13.5 10.1904 14.0596 10.75 14.75 10.75C15.4404 10.75 16 10.1904 16 9.5C16 8.80964 15.4404 8.25 14.75 8.25ZM8 9.5C8 8.80964 8.55964 8.25 9.25 8.25C9.94036 8.25 10.5 8.80964 10.5 9.5C10.5 10.1904 9.94036 10.75 9.25 10.75C8.55964 10.75 8 10.1904 8 9.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'emoji-sad'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}