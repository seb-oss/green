import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-graduate-cap
 */
@gdsCustomElement('gds-icon-graduate-cap')
export class IconGraduateCap extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M23.25 9L12 14.25L0.75 9L12 3.75L23.25 9ZM23.25 9V15.25M4.75002 10.9688V16.6406L12 20.25L19.25 16.6406V10.9688" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.3172 3.07026C12.1161 2.97658 11.8839 2.97658 11.6828 3.07026L0.432836 8.31251C0.16878 8.43555 0 8.70018 0 8.99114C0 9.2821 0.16878 9.54673 0.432836 9.66978L11.6828 14.912C11.8839 15.0057 12.1161 15.0057 12.3172 14.912L22.5 10.167V15.2319C22.5 15.6455 22.8358 15.9808 23.25 15.9808C23.6642 15.9808 24 15.6455 24 15.2319V8.99114C24 8.70018 23.8312 8.43555 23.5672 8.31251L12.3172 3.07026Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12.7156V16.8199C4.5 17.1016 4.65832 17.3595 4.90974 17.4873L11.6597 20.9185C11.8735 21.0272 12.1264 21.0272 12.3402 20.9185L19.0903 17.4873C19.3417 17.3595 19.5 17.1016 19.5 16.8199V12.7156L12.2288 16.4523C12.0852 16.5261 11.9148 16.5261 11.7712 16.4523L4.5 12.7156Z" fill="currentColor"/>`
  /** @private */
  static _name = 'graduate-cap'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}