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
    :root,
    :root[gds-theme='light'] {
      ${unsafeCSS(base)}
      ${unsafeCSS(shadows)}
      ${unsafeCSS(colorsLight)}
    }
    :root[gds-theme='dark'] {
      ${unsafeCSS(colorsDark)}
    }
  `,
)

export { tokens, colorsLight, colorsDark }
