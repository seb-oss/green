/* eslint-disable @nx/enforce-module-boundaries */
import { css, unsafeCSS } from 'lit'

import base from '../../../dist/libs/tokens/2023/internal/variables.base.css?inline'
import colorsDark from '../../../dist/libs/tokens/2023/internal/variables.dark.css?inline'
import colorsLight from '../../../dist/libs/tokens/2023/internal/variables.light.css?inline'
import shadows from '../../../dist/libs/tokens/2023/internal/variables.shadows.css?inline'
import { GlobalStylesRegistry } from './utils/global-styles'

const tokens = [
  css`
    :host {
      ${unsafeCSS(base)}
      ${unsafeCSS(shadows)}
    }
  `,
]

// Apply a set of default tokens to the root element
GlobalStylesRegistry.instance.injectGlobalStyles(
  'root-tokens',
  css`
    :root {
      ${unsafeCSS(base)}
      ${unsafeCSS(shadows)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${unsafeCSS(colorsLight)}
    }
    :root[gds-theme='dark'] {
      ${unsafeCSS(colorsDark)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${unsafeCSS(colorsDark)}
      }
      @media (prefers-color-scheme: light) {
        ${unsafeCSS(colorsLight)}
      }
    }
  `,
)

export { tokens, colorsLight, colorsDark }
