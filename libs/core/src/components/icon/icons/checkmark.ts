import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-checkmark')
export class IconCheckmark extends GdsIcon {
  static _regularSVG = `
<path d="M4.75 12.7768L10 19.25L19.25 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

`
  static _solidSVG = `
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4299 4.20108C20.0092 4.57657 20.1744 5.35058 19.799 5.9299L11.049 19.4299C10.835 19.76 10.4782 19.9701 10.0858 19.9971C9.69333 20.0241 9.31109 19.8647 9.05399 19.5671L4.30399 14.0671C3.85276 13.5446 3.91052 12.7552 4.433 12.304C4.95547 11.8528 5.74482 11.9105 6.19605 12.433L9.85717 16.6722L17.7011 4.57016C18.0766 3.99084 18.8506 3.8256 19.4299 4.20108Z" fill="currentColor"/>

`
}