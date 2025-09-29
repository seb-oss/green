import { css, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { colorsDark, colorsLight, tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators'

/**
 * @element gds-theme
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
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
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
  designVersion: '2016' | '2023' = '2023'

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
    switch (this.colorScheme) {
      case 'dark':
        this._dynamicStylesController.inject(
          'color-scheme',
          unsafeCSS(`:host { ${colorsDark}}`),
        )
        break
      case 'light':
        this._dynamicStylesController.inject(
          'color-scheme',
          unsafeCSS(`:host { ${colorsLight}}`),
        )
        break
      case 'auto':
      default:
        this._dynamicStylesController.inject(
          'color-scheme',
          unsafeCSS(
            `:host { ${colorsLight}} @media (prefers-color-scheme: dark) { :host { ${colorsDark} } }`,
          ),
        )
        break
    }

    this.dispatchCustomEvent('gds-color-scheme-changed', {
      detail: { colorScheme: this.colorScheme },
    })
  }

  @watch('designVersion')
  private _onDesignVersionChange() {
    this.dispatchCustomEvent('gds-design-version-changed', {
      detail: { designVersion: this.designVersion },
    })
  }
}
