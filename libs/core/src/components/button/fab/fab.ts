import { gdsCustomElement } from '../../../scoping'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'
import { GdsButton } from '../button'

import styles from './fab.styles'

/**
 * @element gds-fab
 *
 * A FAB is a floating action button that is used to trigger a primary action in the UI.
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
  })
  inset?: string

  connectedCallback() {
    super.connectedCallback()
    this._dynamicStylesController.inject('FAB_styles', styles)
  }
}
