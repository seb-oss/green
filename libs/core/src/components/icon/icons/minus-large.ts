import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-minus-large')
export class IconMinusLarge extends GdsIcon {
  static _regularSVG = `
<path d="M3.75 12H20.25" stroke="#353531" stroke-width="1.5" stroke-linecap="round"/>

`
  static _solidSVG = `
<path d="M3.75 12H20.25" stroke="#353531" stroke-width="1.5" stroke-linecap="round"/>

`
}