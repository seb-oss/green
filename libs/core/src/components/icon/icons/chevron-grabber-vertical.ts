import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-chevron-grabber-vertical')
export class IconChevronGrabberVertical extends GdsIcon {
  static _regularSVG = `
<path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}