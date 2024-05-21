import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-bell')
export class IconBell extends GdsIcon {
  static _regularSVG = `
<path d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25M3.75 17.25H20.25V16L18.7031 13L18.4965 8.90897C18.3234 5.45882 15.4661 2.75 12 2.75C8.53386 2.75 5.6766 5.45882 5.50351 8.90897L5.29688 13L3.75 16V17.25Z" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}