/* eslint-disable @nx/enforce-module-boundaries */
import { css, unsafeCSS } from 'lit'

import colorsDark from '../../../dist/libs/tokens/internal/dark.css?inline'
import colorsLight from '../../../dist/libs/tokens/internal/light.css?inline'
import motionTokens from '../../../dist/libs/tokens/internal/motion.css?inline'
import shadowTokens from '../../../dist/libs/tokens/internal/shadow.css?inline'
import sizeTokens from '../../../dist/libs/tokens/internal/size.css?inline'
import textTokens from '../../../dist/libs/tokens/internal/text.css?inline'
import { GlobalStylesRegistry } from './utils/global-styles'

const tokens = [
  unsafeCSS(sizeTokens),
  unsafeCSS(textTokens),
  unsafeCSS(motionTokens),
  unsafeCSS(shadowTokens),
]

// Apply a set of default tokens to the root element
GlobalStylesRegistry.instance.injectGlobalStyles(
  'root-tokens',
  css`
    :root,
    :root[gds-theme='light'] {
      ${unsafeCSS(colorsLight)}
    }
    :root[gds-theme='dark'] {
      ${unsafeCSS(colorsDark)}
    }
  `,
)

export { tokens, colorsLight, colorsDark }
