import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-checkmark')
export class IconCheckmark extends GdsIcon {
  static _regularSVG = `
<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99442C22.2979 3.40452 22.4157 4.18717 22.0056 4.74251L10.0056 20.9925C9.80433 21.2651 9.50107 21.4442 9.16524 21.489C8.82942 21.5338 8.4898 21.4403 8.22417 21.23L2.22417 16.48C1.6829 16.0515 1.59149 15.2654 2.01999 14.7241C2.4485 14.1828 3.23466 14.0914 3.77593 14.5199L8.76241 18.4675L19.9945 3.2574C20.4046 2.70206 21.1873 2.58432 21.7426 2.99442Z" fill="currentColor"/>

`
}