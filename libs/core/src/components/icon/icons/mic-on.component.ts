import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-mic-on
 */
@gdsCustomElement('gds-icon-mic-on')
export class IconMicOn extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 19C15.0754 19 17.7186 17.1489 18.8759 14.5M12 19C8.92448 19 6.28136 17.1489 5.12402 14.5M12 19V21.25M12 15.75C9.65274 15.75 7.74995 13.8472 7.74995 11.5V7C7.74995 4.65279 9.65274 2.75 12 2.75C14.3472 2.75 16.25 4.65279 16.25 7V11.5C16.25 13.8472 14.3472 15.75 12 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5V7Z" fill="currentColor"/><path d="M5.81123 14.1997C5.64539 13.8201 5.20326 13.6468 4.82369 13.8127C4.44412 13.9785 4.27087 14.4207 4.4367 14.8002C5.61403 17.4948 8.19054 19.4406 11.2499 19.7163V21.2499C11.2499 21.6642 11.5857 21.9999 11.9999 21.9999C12.4141 21.9999 12.7499 21.6642 12.7499 21.2499V19.7163C15.8093 19.4406 18.3858 17.4948 19.5631 14.8002C19.7289 14.4207 19.5557 13.9785 19.1761 13.8127C18.7966 13.6468 18.3544 13.8201 18.1886 14.1997C17.1463 16.5852 14.7667 18.2499 11.9999 18.2499C9.23314 18.2499 6.85352 16.5852 5.81123 14.1997Z" fill="currentColor"/>`
  /** @private */
  static _name = 'mic-on'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}