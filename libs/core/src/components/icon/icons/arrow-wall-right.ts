import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-arrow-wall-right')
export class IconArrowWallRight extends GdsIcon {
  static _regularSVG = `
<path d="M13 7.75L17.25 12M17.25 12L13 16.25M17.25 12H2.75M21.25 4.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}