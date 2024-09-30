import { gdsCustomElement } from '../../../scoping'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'
import { GdsButton } from '../button'

import styles from './fab.styles'

/**
 * @element gds-fab
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
export class GdsFab extends GdsButton {
  /**
   * Supports all valid CSS position values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="_button"]',
  })
  position?: string

  /**
   * The transform of the FAB. Use this to tweak the position of the element on the screen.
   *
   * Accepts any valid CSS transform value.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  transform?: string

  /**
   * The inset postion of the FAB.
   *
   * Accepts any valid CSS inset values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="_button"]',
  })
  inset?: string

  connectedCallback() {
    super.connectedCallback()
    this._dynamicStylesController.inject('FAB_styles', styles)
  }
}
