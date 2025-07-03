import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-code
 */
@gdsCustomElement('gds-icon-code')
export class IconCode extends GdsIcon {
  /** @private */
  static _regularSVG = `<g clip-path="url(#clip0_4963_194)"><path d="M10.25 9L7.25 12L10.25 15M13.75 9L16.75 12L13.75 15M3.75 3.75H20.25V20.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_4963_194"><rect width="24" height="24" fill="white"/></clipPath></defs>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM10.7803 8.46967C11.0732 8.76256 11.0732 9.23744 10.7803 9.53033L8.84099 11.4697C8.5481 11.7626 8.5481 12.2374 8.84099 12.5303L10.7803 14.4697C11.0732 14.7626 11.0732 15.2374 10.7803 15.5303C10.4874 15.8232 10.0126 15.8232 9.71967 15.5303L6.71967 12.5303C6.42678 12.2374 6.42678 11.7626 6.71967 11.4697L9.71967 8.46967C10.0126 8.17678 10.4874 8.17678 10.7803 8.46967ZM14.2803 8.46967C13.9874 8.17678 13.5126 8.17678 13.2197 8.46967C12.9268 8.76256 12.9268 9.23744 13.2197 9.53033L15.159 11.4697C15.4519 11.7626 15.4519 12.2374 15.159 12.5303L13.2197 14.4697C12.9268 14.7626 12.9268 15.2374 13.2197 15.5303C13.5126 15.8232 13.9874 15.8232 14.2803 15.5303L17.2803 12.5303C17.5732 12.2374 17.5732 11.7626 17.2803 11.4697L14.2803 8.46967Z" fill="currentColor"/>`
  /** @private */
  static _name = 'code'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}