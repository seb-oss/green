import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-settings-slider-ver
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-settings-slider-ver')
export class IconSettingsSliderVer extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M17 13.75V3.75M17 13.75C18.7956 13.75 20.25 15.2044 20.25 17C20.25 18.7956 18.7956 20.25 17 20.25C15.2044 20.25 13.75 18.7956 13.75 17C13.75 15.2044 15.2044 13.75 17 13.75ZM7 20.25V12.25M7 12.25C5.20438 12.25 3.75 10.7956 3.75 9C3.75 7.20438 5.20438 5.75 7 5.75M7 12.25C8.79562 12.25 10.25 10.7956 10.25 9C10.25 7.20438 8.79562 5.75 7 5.75M7 5.75V3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M17.75 13.0701C19.6011 13.421 21 15.0465 21 17C21 19.2098 19.2098 21 17 21C14.7902 21 13 19.2098 13 17C13 15.0465 14.3989 13.421 16.25 13.0701V3.75C16.25 3.33579 16.5858 3 17 3C17.4142 3 17.75 3.33579 17.75 3.75V13.0701Z" fill="currentColor"/><path d="M7 21C6.58579 21 6.25 20.6642 6.25 20.25V12.9299C4.3989 12.579 3 10.9535 3 9C3 7.04652 4.3989 5.421 6.25 5.07014V3.75C6.25 3.33579 6.58579 3 7 3C7.41421 3 7.75 3.33579 7.75 3.75V5.07014C9.6011 5.421 11 7.04652 11 9C11 10.9535 9.6011 12.579 7.75 12.9299V20.25C7.75 20.6642 7.41421 21 7 21Z" fill="currentColor"/>`
  /** @private */
  static _name = 'settings-slider-ver'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}