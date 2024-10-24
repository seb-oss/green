import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-circles-three
 */
@gdsCustomElement('gds-icon-circles-three')
export class IconCirclesThree extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12.75 7.75C12.75 10.5114 10.5114 12.75 7.75 12.75C4.98858 12.75 2.75 10.5114 2.75 7.75C2.75 4.98858 4.98858 2.75 7.75 2.75C10.5114 2.75 12.75 4.98858 12.75 7.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M17.5 17.75C17.5 19.683 15.933 21.25 14 21.25C12.067 21.25 10.5 19.683 10.5 17.75C10.5 15.817 12.067 14.25 14 14.25C15.933 14.25 17.5 15.817 17.5 17.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M21.25 9.25C21.25 10.7688 20.0188 12 18.5 12C16.9812 12 15.75 10.7688 15.75 9.25C15.75 7.73122 16.9812 6.5 18.5 6.5C20.0188 6.5 21.25 7.73122 21.25 9.25Z" stroke="currentColor" stroke-width="1.5"/>`
  /** @private */
  static _solidSVG = `<path d="M7.75 2C4.57436 2 2 4.57436 2 7.75C2 10.9256 4.57436 13.5 7.75 13.5C10.9256 13.5 13.5 10.9256 13.5 7.75C13.5 4.57436 10.9256 2 7.75 2Z" fill="currentColor"/><path d="M14 13.5C11.6528 13.5 9.75 15.4028 9.75 17.75C9.75 20.0972 11.6528 22 14 22C16.3472 22 18.25 20.0972 18.25 17.75C18.25 15.4028 16.3472 13.5 14 13.5Z" fill="currentColor"/><path d="M15 9.25C15 7.317 16.567 5.75 18.5 5.75C20.433 5.75 22 7.317 22 9.25C22 11.183 20.433 12.75 18.5 12.75C16.567 12.75 15 11.183 15 9.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'circles-three'
}
