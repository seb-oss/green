import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-zoom-out
 */
@gdsCustomElement('gds-icon-zoom-out')
export class IconZoomOut extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265ZM14.25 11L7.75 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C12.9388 19 14.7174 18.3096 16.1017 17.1624L19.4701 20.5307C19.763 20.8236 20.2379 20.8236 20.5307 20.5307C20.8236 20.2379 20.8236 19.763 20.5307 19.4701L17.1624 16.1017C18.3096 14.7174 19 12.9388 19 11C19 6.58172 15.4183 3 11 3ZM15 11C15 11.4142 14.6642 11.75 14.25 11.75H7.75C7.33579 11.75 7 11.4142 7 11C7 10.5858 7.33579 10.25 7.75 10.25L14.25 10.25C14.6642 10.25 15 10.5858 15 11Z" fill="currentColor"/>`
  /** @private */
  static _name = 'zoom-out'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}