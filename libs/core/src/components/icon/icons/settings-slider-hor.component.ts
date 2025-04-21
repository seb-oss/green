import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-settings-slider-hor
 */
@gdsCustomElement('gds-icon-settings-slider-hor')
export class IconSettingsSliderHor extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M13.75 7H3.75M13.75 7C13.75 5.20437 15.2044 3.75 17 3.75C18.7956 3.75 20.25 5.20437 20.25 7C20.25 8.79563 18.7956 10.25 17 10.25C15.2044 10.25 13.75 8.79563 13.75 7ZM20.25 17H12.25M12.25 17C12.25 18.7956 10.7956 20.25 9 20.25C7.20438 20.25 5.75 18.7956 5.75 17M12.25 17C12.25 15.2044 10.7956 13.75 9 13.75C7.20438 13.75 5.75 15.2044 5.75 17M5.75 17H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M17 3C15.0465 3 13.421 4.3989 13.0701 6.25H3.75C3.33579 6.25 3 6.58579 3 7C3 7.41421 3.33579 7.75 3.75 7.75H13.0701C13.421 9.6011 15.0465 11 17 11C19.2098 11 21 9.20984 21 7C21 4.79016 19.2098 3 17 3Z" fill="currentColor"/><path d="M9 13C7.04652 13 5.421 14.3989 5.07014 16.25H3.75C3.33579 16.25 3 16.5858 3 17C3 17.4142 3.33579 17.75 3.75 17.75H5.07014C5.421 19.6011 7.04652 21 9 21C10.9535 21 12.579 19.6011 12.9299 17.75H20.25C20.6642 17.75 21 17.4142 21 17C21 16.5858 20.6642 16.25 20.25 16.25H12.9299C12.579 14.3989 10.9535 13 9 13Z" fill="currentColor"/>`
  /** @private */
  static _name = 'settings-slider-hor'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}