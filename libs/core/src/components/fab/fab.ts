import { html, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { msg } from '@lit/localize'
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  Placement,
  Middleware,
} from '@floating-ui/dom'

import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators'
import { gdsCustomElement } from '../../scoping'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import styles from './fab.styles'
import { GdsButton } from '../button'

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
   * Optional way to assign an anchor element for the popover. When using Lit, this can take a value from a `@queryAsync` decorator in order to set the anchor element programatically.
   */
  @property({ attribute: false })
  anchorRef?: Promise<HTMLElement>

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

  /**
   * An array of middleware for the Floating UI positioning algorithm. Here you can pass in an array
   * of middleware to customize positioning to your needs. This array is passed directly to Floting UI,
   * so you can just follow the documentation here: https://floating-ui.com/docs/middleware
   *
   * This property does not have a corresponding attribute, so it can only be set in JavaScript.
   *
   * Defaults to `[offset(8), flip()]`
   */
  @property({ attribute: false })
  floatingUIMiddleware: Middleware[] = [offset(8), flip()]

  @state()
  private _anchor: HTMLElement | undefined = undefined

  @query('slot:not([name])')
  private _elDefaultSlot: HTMLSlotElement | undefined

  connectedCallback() {
    super.connectedCallback()
    this._dynamicStylesController.inject('FAB_styles', styles)
  }

  @watch('anchorRef')
  private _handleAnchorRefChanged() {
    this.anchorRef?.then((el) => {
      if (el) this._anchor = el
    })
  }

  @watch('_anchor')
  private _handleAnchorChanged() {
    this.#registerAutoPositioning()
  }

  // A function that removes the Floating UI auto positioning. This gets called when we switch to mobile view layout.
  #autoPositionCleanupFn: (() => void) | undefined

  #registerAutoPositioning() {
    if (!this._anchor) {
      return
    }

    const referenceEl = this._anchor

    if (this.#autoPositionCleanupFn) {
      this.#autoPositionCleanupFn()
    }

    this.#autoPositionCleanupFn = autoUpdate(referenceEl, this, () => {
      computePosition(referenceEl, this, {
        middleware: this.floatingUIMiddleware,
        strategy: 'fixed',
      }).then(({ x, y }) =>
        Object.assign(this.style, {
          left: `${x}px`,
          top: `${y}px`,
        }),
      )
    })
  }
}
