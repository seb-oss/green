import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-sort-down
 */
@gdsCustomElement('gds-icon-sort-down')
export class IconSortDown extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M3.75 5.75H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 12H11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 18.25H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 10.75V18.5M14.75 15.75L18 19L21.25 15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.75C3 5.33579 3.33579 5 3.75 5H18.25C18.6642 5 19 5.33579 19 5.75C19 6.16421 18.6642 6.5 18.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25C11.6642 11.25 12 11.5858 12 12C12 12.4142 11.6642 12.75 11.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 18.25C3 17.8358 3.33579 17.5 3.75 17.5H9.25C9.66421 17.5 10 17.8358 10 18.25C10 18.6642 9.66421 19 9.25 19H3.75C3.33579 19 3 18.6642 3 18.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18.4142 10 18.75 10.3358 18.75 10.75V17.1893L20.7197 15.2197C21.0126 14.9268 21.4874 14.9268 21.7803 15.2197C22.0732 15.5126 22.0732 15.9874 21.7803 16.2803L18.5303 19.5303C18.2374 19.8232 17.7626 19.8232 17.4697 19.5303L14.2197 16.2803C13.9268 15.9874 13.9268 15.5126 14.2197 15.2197C14.5126 14.9268 14.9874 14.9268 15.2803 15.2197L17.25 17.1893V10.75C17.25 10.3358 17.5858 10 18 10Z" fill="currentColor"/>`
  /** @private */
  static _name = 'sort-down'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}