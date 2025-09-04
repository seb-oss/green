import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-solar-panel
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-solar-panel')
export class IconSolarPanel extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.75 20.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.75 3.75H18.25L20.25 14.25H3.75L5.75 3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 9H4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12.75 15H20.25C20.4735 15 20.6853 14.9003 20.8278 14.7281C20.9703 14.556 21.0286 14.3292 20.9868 14.1097L20.1563 9.75H12.75V15Z" fill="currentColor"/><path d="M11.25 15V19.5H4.75C4.33579 19.5 4 19.8358 4 20.25C4 20.6642 4.33579 21 4.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H12.75V15H11.25Z" fill="currentColor"/><path d="M11.25 15V9.75H3.84366L3.01325 14.1097C2.97143 14.3292 3.02971 14.556 3.17219 14.7281C3.31467 14.9003 3.52652 15 3.75001 15H11.25Z" fill="currentColor"/><path d="M12.75 8.25H19.8706L18.9868 3.60967C18.9194 3.25593 18.6101 3 18.25 3H12.75V8.25Z" fill="currentColor"/><path d="M11.25 3V8.25H4.12938L5.01325 3.60967C5.08063 3.25593 5.38991 3 5.75001 3H11.25Z" fill="currentColor"/>`
  /** @private */
  static _name = 'solar-panel'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}