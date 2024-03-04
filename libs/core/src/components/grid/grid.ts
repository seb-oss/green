import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html as customElementHtml,
} from '../../utils/helpers/custom-element-scoping'
import { stripWhitespace } from '../../utils/helpers/strip-white-space'

import grid from './grid.style.css'
const gridCSS = unsafeCSS(grid)

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
  gap?: string

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties)

    if (changedProperties.has('columns')) {
      const [columnsDesktop, columnsTablet, columnsMobile] =
        this.columns?.split(' ').map(Number) || []

      const columnProperties = [
        { name: 'gds-columns-mobile', value: columnsMobile },
        { name: 'gds-columns-tablet', value: columnsTablet },
        { name: 'gds-columns-desktop', value: columnsDesktop },
      ]

      const cssVariables = columnProperties
        .filter(({ value }) => value !== undefined)
        .map(({ name, value }) => `--${name}: ${value};`)
        .join(' ')

      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`:host {${cssVariables}}`)

      if (this.shadowRoot) {
        this.shadowRoot.adoptedStyleSheets = [
          ...this.shadowRoot.adoptedStyleSheets,
          sheet,
        ]
      }
    }
  }

  render() {
    return html` <slot></slot> `
  }
}
