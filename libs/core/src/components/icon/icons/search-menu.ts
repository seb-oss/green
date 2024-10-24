import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-search-menu
 */
@gdsCustomElement('gds-icon-search-menu')
export class IconSearchMenu extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M2.75 12H5.25M2.75 6.75H6.25M2.75 17.25H6.25M19.5 16.5L22.25 19.25M21.25 12C21.25 15.4518 18.4518 18.25 15 18.25C11.5482 18.25 8.75 15.4518 8.75 12C8.75 8.54822 11.5482 5.75 15 5.75C18.4518 5.75 21.25 8.54822 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 8.13401 11.134 5 15 5C18.866 5 22 8.13401 22 12C22 13.6628 21.4202 15.1902 20.4518 16.3911L22.7803 18.7197C23.0732 19.0126 23.0732 19.4874 22.7803 19.7803C22.4874 20.0732 22.0126 20.0732 21.7197 19.7803L19.3911 17.4518C18.1902 18.4202 16.6628 19 15 19C11.134 19 8 15.866 8 12Z" fill="currentColor"/><path d="M2 12C2 11.5858 2.33579 11.25 2.75 11.25H5.25C5.66421 11.25 6 11.5858 6 12C6 12.4142 5.66421 12.75 5.25 12.75H2.75C2.33579 12.75 2 12.4142 2 12Z" fill="currentColor"/><path d="M2.75 6C2.33579 6 2 6.33579 2 6.75C2 7.16421 2.33579 7.5 2.75 7.5H6.25C6.66421 7.5 7 7.16421 7 6.75C7 6.33579 6.66421 6 6.25 6H2.75Z" fill="currentColor"/><path d="M2 17.25C2 16.8358 2.33579 16.5 2.75 16.5H6.25C6.66421 16.5 7 16.8358 7 17.25C7 17.6642 6.66421 18 6.25 18H2.75C2.33579 18 2 17.6642 2 17.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'search-menu'
}
