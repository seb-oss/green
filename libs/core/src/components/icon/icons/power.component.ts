import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-power
 */
@gdsCustomElement('gds-icon-power')
export class IconPower extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M7.5 3.9165C4.66638 5.49732 2.75 8.52488 2.75 12C2.75 17.1087 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1087 21.25 12C21.25 8.54872 19.3598 5.53888 16.5582 3.94924M12 1.75V5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.4142 1 12.75 1.33579 12.75 1.75V5.75C12.75 6.16421 12.4142 6.5 12 6.5C11.5858 6.5 11.25 6.16421 11.25 5.75V1.75C11.25 1.33579 11.5858 1 12 1ZM8.15497 3.55111C8.35677 3.91284 8.22713 4.36967 7.8654 4.57147C5.25959 6.0252 3.5 8.80764 3.5 12C3.5 16.6945 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6945 20.5 12C20.5 8.82953 18.7645 6.06341 16.1881 4.60155C15.8278 4.39714 15.7015 3.93938 15.9059 3.57912C16.1103 3.21886 16.568 3.09252 16.9283 3.29693C19.9552 5.01436 22 8.26792 22 12C22 17.5229 17.5228 22 12 22C6.47715 22 2 17.5229 2 12C2 8.24212 4.07317 4.96944 7.1346 3.26153C7.49634 3.05973 7.95317 3.18938 8.15497 3.55111Z" fill="currentColor"/>`
  /** @private */
  static _name = 'power'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}