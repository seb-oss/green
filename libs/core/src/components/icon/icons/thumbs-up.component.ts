import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-thumbs-up
 */
@gdsCustomElement('gds-icon-thumbs-up')
export class IconThumbsUp extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6.75 10.75H2.75V20.25H6.75M6.75 20.25V11L11 2.75H11.6156C12.843 2.75 13.7808 3.84535 13.5917 5.0581L13.0161 8.75H18.2589C20.0956 8.75 21.5011 10.3856 21.2248 12.2013L20.3878 17.7013C20.1648 19.167 18.9046 20.25 17.422 20.25H6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C10.7192 2 10.4619 2.15688 10.3333 2.40653L6.42148 10H2.75C2.33579 10 2 10.3358 2 10.75V20.25C2 20.6642 2.33579 21 2.75 21H17.422C19.2752 21 20.8505 19.6463 21.1293 17.8142L21.9663 12.3142C22.3117 10.0444 20.5548 8 18.2589 8H13.8921L14.3328 5.17364C14.5928 3.50611 13.3033 2 11.6156 2H11ZM6 11.5V19.5H3.5V11.5H6Z" fill="currentColor"/>`
  /** @private */
  static _name = 'thumbs-up'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}