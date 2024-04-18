import { property } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../transitional-styles'

/**
 * @element gds-theme
 *
 * A component that provides CSS variables for a part of the DOM tree.
 * Every descendant of this component will inherit the CSS variables
 * provided by the theme set on this component.
 *
 * @slot - The content to apply the theme to.
 *
 * @status beta
 */
@gdsCustomElement('gds-theme')
export class GdsTheme extends GdsElement {

  /**
   * The theme mode. Can be `light`, `dark`, or `auto`.
   */
  @property({ reflect: true, attribute: 'color-scheme'})
  colorScheme: 'light' | 'dark' | 'auto' = 'light'

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-theme')
  }

  render() {
    return html`
      <slot></slot>
    `
  }
}
