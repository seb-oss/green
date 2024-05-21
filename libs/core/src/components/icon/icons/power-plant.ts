import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-power-plant')
export class IconPowerPlant extends GdsIcon {
  static _regularSVG = `
<path d="M5.75 7.75H10.25L12.25 20.25H3.75L5.75 7.75Z" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.25V5.25C8 4.14543 8.89543 3.25 10 3.25H19.25" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4286 13.25L15 11.5V14L20.25 11.5V20.25H12" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}