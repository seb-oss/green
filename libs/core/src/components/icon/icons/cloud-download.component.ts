import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-cloud-download
 */
@gdsCustomElement('gds-icon-cloud-download')
export class IconCloudDownload extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M16.75 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H7.25M12 11.75V19.25M12 19.25L14.5 16.75M12 19.25L9.5 16.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.77996 8.12427C6.80396 5.70153 9.20241 4 12 4C15.5725 4 18.4969 6.77542 18.7344 10.2877C21.1392 10.5876 23 12.639 23 15.125C23 17.8174 20.8174 20 18.125 20H7C3.68629 20 1 17.3137 1 14C1 11.1041 3.05102 8.68825 5.77996 8.12427ZM11.25 8.75C11.25 8.33579 11.5858 8 12 8C12.4142 8 12.75 8.33579 12.75 8.75V14.4393L13.9697 13.2197C14.2626 12.9268 14.7374 12.9268 15.0303 13.2197C15.3232 13.5126 15.3232 13.9874 15.0303 14.2803L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L8.96967 14.2803C8.67678 13.9874 8.67678 13.5126 8.96967 13.2197C9.26256 12.9268 9.73744 12.9268 10.0303 13.2197L11.25 14.4393V8.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'cloud-download'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}