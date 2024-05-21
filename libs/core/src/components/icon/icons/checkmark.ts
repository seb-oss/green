import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-checkmark')
export class IconCheckmark extends GdsIcon {
  static _regularSVG = `
<path d="M4.75 12.7768L10 19.25L19.25 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

`
  static _solidSVG = ``
}