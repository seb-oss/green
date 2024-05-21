import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-chevron-double-down')
export class IconChevronDoubleDown extends GdsIcon {
  static _regularSVG = `
<path d="M8 13.5L12 17.5L16 13.5M8 6.5L12 10.5L16 6.5" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}