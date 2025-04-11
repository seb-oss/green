import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-folder-upload
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-folder-upload')
export class IconFolderUpload extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 19.25V13M12 13L14.5 15.5M12 13L9.5 15.5M7.375 19.25H2.75V3.75H10L12 6.75H21.25V19.25H16.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M2 3.75C2 3.33579 2.33579 3 2.75 3H10C10.2508 3 10.4849 3.12533 10.624 3.33397L12.4014 6H21.25C21.6642 6 22 6.33579 22 6.75V19.25C22 19.6642 21.6642 20 21.25 20H12.75V14.8107L13.9697 16.0303C14.2626 16.3232 14.7374 16.3232 15.0303 16.0303C15.3232 15.7374 15.3232 15.2626 15.0303 14.9697L12.5303 12.4697C12.2374 12.1768 11.7626 12.1768 11.4697 12.4697L8.96967 14.9697C8.67678 15.2626 8.67678 15.7374 8.96967 16.0303C9.26256 16.3232 9.73744 16.3232 10.0303 16.0303L11.25 14.8107V20H2.75C2.33579 20 2 19.6642 2 19.25V3.75Z" fill="currentColor"/>`
  /** @private */
  static _name = 'folder-upload'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}