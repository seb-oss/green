import { css } from 'lit'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div/div.component'

/**
 *  A container for content representing a single entity. e.g. a contact, article, or task.
 *
 * `gds-card` inherits all properties from `gds-div`, but comes with some predefined defaults
 * and a shortcut property for specifiying different card variants.
 *
 * @element gds-card
 *
 */
@gdsCustomElement('gds-card')
export class GdsCard extends GdsDiv {
  static styles = [
    tokens,
    css`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-5xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `,
  ]

  /**
   * Shortcut for setting the border, background and text color of the card to the specified color variant, such as 'primary', 'secondary', 'tertiary', etc.
   *
   * You can find all available variants in the L2 section of the [Color System documentation page](./?path=/docs/style-colors--docs)
   *
   * Supports Style Expression syntax for setting the value responsively.
   *
   */
  @styleExpressionProperty({
    styleTemplate: function (_prop, variant) {
      let border, background, color

      switch (variant[0]) {
        case 'primary':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-01)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'secondary':
          border = 'var(--gds-sys-color-border-subtle-01)'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-02)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'tertiary':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-02)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'neutral-01':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-01)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'neutral-01-2':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-01-2)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'neutral-02':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-02)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'neutral-02-2':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-02-2)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break

        case 'brand-01':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-brand-01)`
          color = 'var(--gds-sys-color-content-inversed)'
          break

        case 'brand-02':
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-brand-02)`
          color = 'var(--gds-sys-color-content-brand-02)'
          break

        case 'positive':
        case 'negative':
        case 'warning':
        case 'information':
        case 'notice':
          border = `var(--gds-sys-color-border-${variant[0]}-02)`
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-${variant[0]}-01)`
          color = `var(--gds-sys-color-content-${variant[0]}-01)`
          break

        default:
          border = 'transparent'
          background = `var(--gds-sys-color-l${(this as GdsCard).level}-neutral-01)`
          color = 'var(--gds-sys-color-content-neutral-01)'
          break
      }

      return `
      --_border-color: ${border};
      --_background-color: ${background};
      --_color: ${color};
      `
    },
  })
  variant = 'primary' /// This sets variables that are used in the default styles. Any other SEPs will override.

  constructor() {
    super()
    this.padding = 'm;m{xl}'
    this['border-radius'] = 's'
    this['gap'] = 'm;m{l}'
  }

  render() {
    return html`<slot></slot>`
  }
}
