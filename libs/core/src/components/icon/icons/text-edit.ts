import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-text-edit')
export class IconTextEdit extends GdsIcon {
  static _regularSVG = `
<path d="M1.75 5.75H9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 9.75H6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.75 8.38793L18.6121 4.25L7.75 15.1121V19.25H11.8879L22.75 8.38793Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}