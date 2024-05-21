import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-people')
export class IconPeople extends GdsIcon {
  static _regularSVG = `
<path d="M3.75 20.25V18.75C3.75 16.5409 5.54086 14.75 7.75 14.75H16.25C18.4591 14.75 20.25 16.5409 20.25 18.75V20.25M16.75 7.5C16.75 10.1234 14.6234 12.25 12 12.25C9.37665 12.25 7.25 10.1234 7.25 7.5C7.25 4.87665 9.37665 2.75 12 2.75C14.6234 2.75 16.75 4.87665 16.75 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/>
<path d="M12 12.5C7.38412 12.5 4.15473 15.9097 3.7533 20.1798C3.73354 20.39 3.80328 20.5988 3.94541 20.7549C4.08754 20.911 4.28888 21 4.5 21H19.5C19.7111 21 19.9125 20.911 20.0546 20.7549C20.1967 20.5988 20.2665 20.39 20.2467 20.1798C19.8453 15.9097 16.6159 12.5 12 12.5Z" fill="currentColor"/>

`
}