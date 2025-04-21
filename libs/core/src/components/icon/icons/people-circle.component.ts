import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-people-circle
 */
@gdsCustomElement('gds-icon-people-circle')
export class IconPeopleCircle extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M5.85697 18.9157C7.17056 16.9968 9.33203 15.75 12 15.75C14.668 15.75 16.8294 16.9968 18.143 18.9157M5.85697 18.9157C7.49061 20.3679 9.6423 21.25 12 21.25C14.3577 21.25 16.5094 20.3679 18.143 18.9157M5.85697 18.9157C3.95086 17.2214 2.75 14.7509 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 14.7509 20.0491 17.2214 18.143 18.9157M15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 14.897 3.23192 17.5063 5.20047 19.3326C6.98474 20.9879 9.37418 22 12 22C14.6258 22 17.0153 20.9879 18.7995 19.3326C20.7681 17.5063 22 14.897 22 12C22 6.47715 17.5228 2 12 2ZM5.97605 17.9968C7.29919 16.174 9.41114 15 12 15C14.5889 15 16.7008 16.174 18.0239 17.9968C16.4847 19.543 14.3541 20.5 12 20.5C9.64589 20.5 7.51531 19.543 5.97605 17.9968ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="currentColor"/>`
  /** @private */
  static _name = 'people-circle'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}