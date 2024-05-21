import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-todos')
export class IconTodos extends GdsIcon {
  static _regularSVG = `
<path d="M15.75 20.25H20.25V3.75H3.75V20.25H8.25M9 13.0929L11.2327 15.0599L15.14 9.43994" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}