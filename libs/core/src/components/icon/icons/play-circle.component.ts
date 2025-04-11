import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-play-circle
 */
@gdsCustomElement('gds-icon-play-circle')
export class IconPlayCircle extends GdsIcon {
  /** @private */
  static _regularSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 3.75C7.55558 3.75 3.75 7.55558 3.75 12.25C3.75 16.9444 7.55558 20.75 12.25 20.75C16.9444 20.75 20.75 16.9444 20.75 12.25C20.75 7.55558 16.9444 3.75 12.25 3.75ZM2.25 12.25C2.25 6.72715 6.72715 2.25 12.25 2.25C17.7728 2.25 22.25 6.72715 22.25 12.25C22.25 17.7728 17.7728 22.25 12.25 22.25C6.72715 22.25 2.25 17.7728 2.25 12.25Z" fill="currentColor"/><path d="M10.25 15.0539V9.44607C10.25 9.04436 10.6998 8.80666 11.0317 9.03295L15.1441 11.8369C15.4352 12.0354 15.4352 12.4646 15.1441 12.6631L11.0317 15.467C10.6998 15.6933 10.25 15.4556 10.25 15.0539Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.7817 8.78296C10.4498 8.55666 10 8.79436 10 9.19607V14.8039C10 15.2056 10.4498 15.4433 10.7817 15.217L14.8941 12.4131C15.1852 12.2146 15.1852 11.7854 14.8941 11.5869L10.7817 8.78296Z" fill="currentColor"/>`
  /** @private */
  static _name = 'play-circle'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}