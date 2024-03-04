import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html as customElementHtml,
} from '../../utils/helpers/custom-element-scoping'
import { stripWhitespace } from '../../utils/helpers/strip-white-space'

import grid from './grid.style.css'
const gridCSS = unsafeCSS(grid)

type GridGap = 'none' | 'xd' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
type GridPadding = 'none' | 'xd' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

type GridJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
type GridAlign = 'start' | 'end' | 'center'

const html = stripWhitespace(customElementHtml)

@gdsCustomElement('gds-grid')
export class GdsGrid extends LitElement {
  static styles = [gridCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ attribute: 'columns-mobile', type: Number })
  columnsMobile?: number

  @property({ attribute: 'columns-tablet', type: Number })
  columnsTablet?: number

  @property({ attribute: 'columns-desktop', type: Number })
  columnsDesktop?: number

  // updated(changedProperties: Map<string | number | symbol, unknown>) {
  //   super.updated(changedProperties)

  //   if (
  //     changedProperties.has('columnsMobile') ||
  //     changedProperties.has('columnsTablet') ||
  //     changedProperties.has('columnsDesktop')
  //   ) {
  //     const columnProperties = [
  //       { name: 'gds-columns-mobile', value: this.columnsMobile },
  //       { name: 'gds-columns-tablet', value: this.columnsTablet },
  //       { name: 'gds-columns-desktop', value: this.columnsDesktop },
  //     ]

  //     const cssVariables = columnProperties
  //       .filter(({ value }) => value !== undefined)
  //       .map(({ name, value }) => `--${name}: ${value};`)
  //       .join(' ')

  //     const sheet = new CSSStyleSheet()
  //     sheet.replaceSync(`:host {${cssVariables}}`)

  //     if (this.shadowRoot) {
  //       this.shadowRoot.adoptedStyleSheets = [
  //         ...this.shadowRoot.adoptedStyleSheets,
  //         sheet,
  //       ]
  //     }
  //   }
  // }

  @property({ attribute: 'columns', type: String })
  columns?: string

  @property({ attribute: 'gap', type: String })
  gap?: GridGap

  @property({ attribute: 'padding', type: String })
  padding?: GridPadding

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
        .map(({ name, value }) => `--${name}: var(--gds-gap-${value});`)
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
        .map(({ name, value }) => `--${name}: var(--gds-padding-${value});`)
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
