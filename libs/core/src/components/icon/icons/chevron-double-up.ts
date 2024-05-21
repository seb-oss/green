import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-chevron-double-up')
export class IconChevronDoubleUp extends GdsIcon {
  static _regularSVG = `
<path d="M8 10.5L12 6.5L16 10.5M8 17.5L12 13.5L16 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}