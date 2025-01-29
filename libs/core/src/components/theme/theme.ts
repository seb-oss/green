import { css, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { colorsDark, colorsLight, tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators'

/**
 * @element gds-theme
 * @status beta
 *
 * A component that provides CSS variables for a part of the DOM tree.
 * Every descendant of this component will inherit the CSS variables
 * provided by the theme set on this component.
 *
 * @slot - The content to apply the theme to.
 *
 * @event gds-color-scheme-changed - Fired when the color scheme changes.
 * @event gds-design-version-changed - Fired when the design version changes.
 *
 */
@gdsCustomElement('gds-theme')
export class GdsTheme extends GdsElement {
  static styles = [
    tokens,
    css`
      :host {
        display: contents;
      }
    `,
  ]
  /**
   * The theme mode. Can be `light`, `dark`, or `auto`.
   */
  @property({ reflect: true, attribute: 'color-scheme' })
  colorScheme: 'light' | 'dark' | 'auto' = 'light'

  /**
   * The design version to use. Can be `16` or `23`.
   */
  @property({ reflect: true, attribute: 'design-version' })
  designVersion: '2016' | '2023' = '2016'

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-theme')
    this._dynamicStylesController.inject(
      'dark',
      unsafeCSS(`:host {${colorsDark}}`),
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
        'color-scheme',
        unsafeCSS(`:host { ${colorsDark}}`),
      )
    } else {
      this._dynamicStylesController.inject(
        'color-scheme',
        unsafeCSS(`:host { ${colorsLight}}`),
      )
    }

    this.dispatchEvent(
      new CustomEvent('gds-color-scheme-changed', {
        detail: { colorScheme: this.colorScheme },
      }),
    )
  }

  @watch('designVersion')
  private _onDesignVersionChange() {
    this.dispatchEvent(
      new CustomEvent('gds-design-version-changed', {
        detail: { designVersion: this.designVersion },
      }),
    )
  }
}
