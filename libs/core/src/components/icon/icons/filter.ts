import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-filter')
export class IconFilter extends GdsIcon {
  static _regularSVG = `
<path d="M2.75 4.75H21.25M8.75 19.25H15.25M5.75 12H18.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

`
  static _solidSVG = ``
}