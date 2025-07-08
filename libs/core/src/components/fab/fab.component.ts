import { gdsCustomElement } from '../../scoping'
import { withPositioningProps } from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button'
import FABStyles from './fab.styles'

/**
 * @element gds-fab
 * @status stable
 *
 * The Floating Action Button is used for functions central to the user experience, such as
 * support and help features that needs to be accessible at all times.
 *
 * The button is always floating visible in the users viewport, typically in the lower right
 * corner. This button can be used with an icon only.
 *
 * @slot - Content of the FAB
 */
@gdsCustomElement('gds-fab')
export class GdsFab extends withPositioningProps(GdsButton) {
  connectedCallback() {
    super.connectedCallback()
    this._dynamicStylesController.inject('FAB_styles', FABStyles)
  }
}
