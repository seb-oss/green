import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-arrow-left')
export class IconArrowLeft extends GdsIcon {
  static _regularSVG = `
<path d="M10 5.75L3.75 12L10 18.25M4.5 12H20.25" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}