import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-up
 */
@gdsCustomElement('gds-icon-arrow-up')
export class IconArrowUp extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M5.75 10L12 3.75L18.25 10M12 20.25V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.3315 3 12.6494 3.1317 12.8839 3.36612L18.6339 9.11612C19.122 9.60427 19.122 10.3957 18.6339 10.8839C18.1457 11.372 17.3543 11.372 16.8661 10.8839L13.25 7.26776V19.75C13.25 20.4404 12.6903 21 12 21C11.3096 21 10.75 20.4404 10.75 19.75V7.26777L7.13388 10.8839C6.64573 11.372 5.85427 11.372 5.36612 10.8839C4.87796 10.3957 4.87796 9.60427 5.36612 9.11612L11.1161 3.36612C11.3505 3.1317 11.6685 3 12 3Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-up'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}