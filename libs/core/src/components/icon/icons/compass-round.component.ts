import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-compass-round
 */
@gdsCustomElement('gds-icon-compass-round')
export class IconCompassRound extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15.5 8.5L10 10L8.5 15.5L14 14L15.5 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7652 8.23484C15.8603 8.33 15.8972 8.46885 15.8618 8.59868L14.3618 14.0987C14.3269 14.2268 14.2268 14.3269 14.0987 14.3618L8.59868 15.8618C8.46885 15.8972 8.33 15.8603 8.23484 15.7652C8.13969 15.67 8.10281 15.5312 8.13822 15.4013L9.63822 9.90134C9.67316 9.77324 9.77324 9.67316 9.90134 9.63822L15.4013 8.13822C15.5312 8.10281 15.67 8.13969 15.7652 8.23484Z" fill="currentColor"/>`
  /** @private */
  static _name = 'compass-round'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}