import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-run-shortcut
 */
@gdsCustomElement('gds-icon-run-shortcut')
export class IconRunShortcut extends GdsIcon {
  /** @private */
  static _regularSVG = `<g clip-path="url(#clip0_4963_339)"><path d="M9.75 16.75L14.25 7.25M3.75 3.75H20.25V20.25H3.75V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_4963_339"><rect width="24" height="24" fill="white"/></clipPath></defs>`
  /** @private */
  static _solidSVG = `<g clip-path="url(#clip0_4963_344)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM14.5711 6.5722C14.9454 6.74952 15.1051 7.19672 14.9278 7.57106L10.4278 17.0711C10.2505 17.4454 9.80328 17.6051 9.42894 17.4278C9.05459 17.2505 8.89488 16.8033 9.0722 16.4289L13.5722 6.92894C13.7495 6.55459 14.1967 6.39488 14.5711 6.5722Z" fill="currentColor"/></g><defs><clipPath id="clip0_4963_344"><rect width="24" height="24" fill="white"/></clipPath></defs>`
  /** @private */
  static _name = 'run-shortcut'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}