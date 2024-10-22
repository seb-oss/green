import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-arrow-rotate-counter-clockwise
 */
@gdsCustomElement('gds-icon-arrow-rotate-counter-clockwise')
export class IconArrowRotateCounterClockwise extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M4.24023 14.75C5.37278 17.9543 8.42869 20.25 12.0208 20.25C16.5771 20.25 20.2708 16.5563 20.2708 12C20.2708 7.44365 16.5771 3.75 12.0208 3.75C8.82811 3.75 6.83534 5.29688 4.77284 7.875M4.7498 4V8H8.7498" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M19.5215 12C19.5215 7.85786 16.1636 4.5 12.0215 4.5C10.5588 4.5 9.39898 4.85088 8.36602 5.4849C7.64586 5.92693 6.97194 6.51595 6.29372 7.25H8.75C9.16422 7.25 9.5 7.58579 9.5 8C9.5 8.41421 9.16422 8.75 8.75 8.75H4.75C4.33579 8.75 4 8.41421 4 8V4C4 3.58579 4.33579 3.25 4.75 3.25C5.16422 3.25 5.5 3.58579 5.5 4V5.90758C6.15142 5.24074 6.83402 4.66521 7.58136 4.20651C8.85858 3.42256 10.2915 3 12.0215 3C16.992 3 21.0215 7.02944 21.0215 12C21.0215 16.9706 16.992 21 12.0215 21C8.10166 21 4.76895 18.4945 3.5338 14.9999C3.39576 14.6094 3.60046 14.1809 3.99099 14.0429C4.38153 13.9048 4.81002 14.1095 4.94806 14.5001C5.97801 17.4141 8.75711 19.5 12.0215 19.5C16.1636 19.5 19.5215 16.1421 19.5215 12Z" fill="currentColor"/>`
  /** @private */
  static _name = 'arrow-rotate-counter-clockwise'
}
