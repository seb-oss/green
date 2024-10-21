import { property } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'
import { css, unsafeCSS } from 'lit'
import { watch } from '../../utils/decorators'

import { colorV2Dark, colorV2Light } from '../../tokens.style'

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
  static styles = css`
    :host {
      display: contents;
    }
  `
  /**
   * The theme mode. Can be `light`, `dark`, or `auto`.
   */
  @property({ reflect: true, attribute: 'color-scheme' })
  colorScheme: 'light' | 'dark' | 'auto' = 'light'

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-theme')
    this._dynamicStylesController.inject(
      'dark',
      unsafeCSS(`:host {${colorV2Dark}}`),
    )
  }

  render() {
    return html`<slot></slot>`
  }

  // TODO: Add prefers-color-scheme media query when `auto` is selected
  @watch('colorScheme')
  private _onColorSchemeChange() {
    if (this.colorScheme === 'dark') {
      this._dynamicStylesController.inject(
        'dark',
        unsafeCSS(`:host { ${colorV2Dark}}`),
      )
    } else {
      this._dynamicStylesController.inject(
        'light',
        unsafeCSS(`:host { ${colorV2Light}}`),
      )
    }
  }
}
