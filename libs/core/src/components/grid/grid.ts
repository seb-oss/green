import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import { tokens } from '../../tokens.style'
import grid from './grid.style.css'
const gridCSS = unsafeCSS(grid)

type GridSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'
type GridGap = GridSizes
type GridPadding = GridSizes

/**
 * @element gds-grid
 * The `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `fluid` attribute.
 *
 * @status beta
 *
 */

@gdsCustomElement('gds-grid')
export class GdsGrid extends LitElement {
  static styles = [tokens, gridCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * @property {string} columns - The number of columns for the grid. This can be a space-separated string of three numbers, specifying the number of columns for desktop, tablet, and mobile devices, respectively.
   * @example
   * ```html
   * <gds-grid columns="3 2 1"></gds-grid>
   * ```
   */
  @property({ attribute: 'columns', type: String })
  columns?: string

  /**
   * @property {string} gap - The size of the gap between grid items. This can be a space-separated string of three sizes ('none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'), specifying the gap size for desktop, tablet, and mobile devices, respectively.
   * @example
   * ```html
   * <gds-grid gap="m s xs"></gds-grid>
   * ```
   */
  @property({ attribute: 'gap', type: String })
  gap?: GridGap

  /**
   * @property {string} padding - The size of the padding around the grid. This can be a space-separated string of three sizes ('none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'), specifying the padding size for desktop, tablet, and mobile devices, respectively.
   * @example
   * ```html
   * <gds-grid padding="l m s"></gds-grid>
   * ```
   */
  @property({ attribute: 'padding', type: String })
  padding?: GridPadding

  /**
   * @property {boolean} fluid - A boolean indicating whether the grid should be fluid. If true, the grid will automatically adjust the column size based on the content.
   * @example
   * ```html
   * <gds-grid fluid></gds-grid>
   * ```
   */
  @property({ attribute: 'fluid', type: String })
  fluid?: boolean

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties)

    let cssVariables = ''

    if (changedProperties.has('columns')) {
      const [columnsDesktop, columnsTablet, columnsMobile] =
        this.columns?.split(' ').map(Number) || []

      const columnProperties = [
        { name: 'gds-columns-mobile', value: columnsMobile },
        { name: 'gds-columns-tablet', value: columnsTablet },
        { name: 'gds-columns-desktop', value: columnsDesktop },
      ]

      cssVariables += columnProperties
        .filter(({ value }) => value !== undefined)
        .map(({ name, value }) => `--${name}: ${value};`)
        .join(' ')
    }

    if (changedProperties.has('gap')) {
      const [gapDesktop, gapTablet, gapMobile] = this.gap?.split(' ') || []

      const gapProperties = [
        { name: 'gds-gap-desktop', value: gapDesktop },
        { name: 'gds-gap-tablet', value: gapTablet },
        { name: 'gds-gap-mobile', value: gapMobile },
      ]

      cssVariables += gapProperties
        .filter(({ value }) => value !== undefined)
        .map(
          ({ name, value }) => `--${name}: var(--gds-sys-grid-gap-${value});`
        )
        .join(' ')
    }

    if (changedProperties.has('padding')) {
      const [paddingDesktop, paddingTablet, paddingMobile] =
        this.padding?.split(' ') || []

      const paddingProperties = [
        { name: 'gds-padding-desktop', value: paddingDesktop },
        { name: 'gds-padding-tablet', value: paddingTablet },
        { name: 'gds-padding-mobile', value: paddingMobile },
      ]

      cssVariables += paddingProperties
        .filter(({ value }) => value !== undefined)
        .map(
          ({ name, value }) =>
            `--${name}: var(--gds-sys-grid-padding-${value});`
        )
        .join(' ')
    }

    if (changedProperties.has('fluid') && this.fluid) {
      cssVariables += `
        --gds-grid-col-count: var(--gds-c);
        --gds-grid-col-width: 200px;
        --gap-count: calc(var(--gds-grid-col-count) - 1);
        --total-gap-width: calc(var(--gap-count) * var(--gds-gap-column));
        --gds-grid-col-width-max: calc(
          (100% - var(--total-gap-width)) / var(--gds-grid-col-count)
        );
  
        grid-template-columns: repeat(
          auto-fill,
          minmax(max(var(--gds-grid-col-width), var(--gds-grid-col-width-max)), 1fr)
        );
        text-wrap: balance;
      `
    }

    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`:host {${cssVariables}}`)

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [
        ...this.shadowRoot.adoptedStyleSheets,
        sheet,
      ]
    }
  }

  render() {
    return html` <slot></slot> `
  }
}
