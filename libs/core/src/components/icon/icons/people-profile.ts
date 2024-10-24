import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-people-profile
 */
@gdsCustomElement('gds-icon-people-profile')
export class IconPeopleProfile extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 13.25C7.8098 13.25 4.86894 16.3254 4.5 20.25H19.5C19.1311 16.3254 16.1902 13.25 12 13.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/><path d="M12 12.5C7.38412 12.5 4.15473 15.9097 3.7533 20.1798C3.73354 20.39 3.80328 20.5988 3.94541 20.7549C4.08754 20.911 4.28888 21 4.5 21H19.5C19.7111 21 19.9125 20.911 20.0546 20.7549C20.1967 20.5988 20.2665 20.39 20.2467 20.1798C19.8453 15.9097 16.6159 12.5 12 12.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'people-profile'
}
