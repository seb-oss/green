import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-pencel-line')
export class IconPencelLine extends GdsIcon {
  static _regularSVG = `
<path d="M12.75 21.25H21.25M2.75 17V21.25H7L21.25 7L17 2.75L2.75 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}