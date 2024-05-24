import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bookmark-remove
 */
@gdsCustomElement('gds-icon-bookmark-remove')
export class IconBookmarkRemove extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M1.75 15.25L4.75 14.1524M22.25 7.75L19.25 8.84756M19.25 8.84756V2.75H4.75V14.1524M19.25 8.84756L4.75 14.1524M19.25 12.75V21.25L12 17.25L4.75 21.25V18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M4.75018 2C4.33597 2 4.00018 2.33579 4.00018 2.75V13.6282L1.49252 14.5456C1.10352 14.688 0.903546 15.1187 1.04586 15.5077C1.18818 15.8967 1.61889 16.0966 2.00789 15.9543L22.5079 8.45433C22.8969 8.31202 23.0969 7.8813 22.9545 7.4923C22.8122 7.10331 22.3815 6.90333 21.9925 7.04565L20.0002 7.77455V2.75C20.0002 2.33579 19.6644 2 19.2502 2H4.75018Z" fill="currentColor"/><path d="M4.00018 21.25V16.8227L20.0002 10.969V21.25C20.0002 21.5153 19.86 21.7609 19.6315 21.8958C19.403 22.0307 19.1202 22.0349 18.8879 21.9067L12.0002 18.1066L5.11249 21.9067C4.88016 22.0349 4.59739 22.0307 4.36889 21.8958C4.14039 21.7609 4.00018 21.5153 4.00018 21.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bookmark remove'
}