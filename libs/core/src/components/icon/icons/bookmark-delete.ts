import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bookmark-delete
 */
@gdsCustomElement('gds-icon-bookmark-delete')
export class IconBookmarkDelete extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.25 2.75H20C20 2.33579 19.6642 2 19.25 2V2.75ZM19.25 21L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21H19.25ZM4.75 21H4C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L4.75 21ZM4.75 2.75V2C4.33579 2 4 2.33579 4 2.75H4.75ZM12 17L12.3623 16.3433C12.1368 16.2189 11.8632 16.2189 11.6377 16.3433L12 17ZM14.8284 8.23678C15.1213 7.94389 15.1213 7.46901 14.8284 7.17612C14.5355 6.88323 14.0607 6.88323 13.7678 7.17612L14.8284 8.23678ZM9.17157 11.7723C8.87868 12.0652 8.87868 12.5401 9.17157 12.833C9.46447 13.1259 9.93934 13.1259 10.2322 12.833L9.17157 11.7723ZM13.7678 12.833C14.0607 13.1259 14.5355 13.1259 14.8284 12.833C15.1213 12.5401 15.1213 12.0652 14.8284 11.7723L13.7678 12.833ZM10.2322 7.17612C9.93934 6.88323 9.46447 6.88323 9.17157 7.17612C8.87868 7.46901 8.87868 7.94389 9.17157 8.23678L10.2322 7.17612ZM18.5 2.75V21H20V2.75H18.5ZM5.5 21V2.75H4V21H5.5ZM4.75 3.5H19.25V2H4.75V3.5ZM19.6123 20.3433L12.3623 16.3433L11.6377 17.6567L18.8877 21.6567L19.6123 20.3433ZM11.6377 16.3433L4.38769 20.3433L5.11231 21.6567L12.3623 17.6567L11.6377 16.3433ZM13.7678 7.17612L9.17157 11.7723L10.2322 12.833L14.8284 8.23678L13.7678 7.17612ZM14.8284 11.7723L10.2322 7.17612L9.17157 8.23678L13.7678 12.833L14.8284 11.7723Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C4.33579 2 4 2.33579 4 2.75V21C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L12 17.8566L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21V2.75C20 2.33579 19.6642 2 19.25 2H4.75ZM14.8284 7.17612C15.1213 7.46901 15.1213 7.94389 14.8284 8.23678L13.0607 10.0045L14.8284 11.7723C15.1213 12.0652 15.1213 12.5401 14.8284 12.833C14.5355 13.1259 14.0607 13.1259 13.7678 12.833L12 11.0652L10.2322 12.833C9.93934 13.1259 9.46446 13.1259 9.17157 12.833C8.87868 12.5401 8.87868 12.0652 9.17157 11.7723L10.9393 10.0045L9.17157 8.23678C8.87868 7.94389 8.87868 7.46901 9.17157 7.17612C9.46447 6.88322 9.93934 6.88322 10.2322 7.17612L12 8.94389L13.7678 7.17612C14.0607 6.88323 14.5355 6.88323 14.8284 7.17612Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bookmark delete'
}