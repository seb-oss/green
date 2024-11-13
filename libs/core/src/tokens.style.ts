/* eslint-disable @nx/enforce-module-boundaries */
import { css, unsafeCSS } from 'lit'

import colorV2Dark from '../../../dist/libs/tokens/internal/dark.css?inline'
// V2
import colorV2Light from '../../../dist/libs/tokens/internal/light.css?inline'
import motionTokens from '../../../dist/libs/tokens/internal/motion.css?inline'
import palletCss from '../../../dist/libs/tokens/internal/pallet.css?inline'
import shadowTokens from '../../../dist/libs/tokens/internal/shadow.css?inline'
import sizeTokens from '../../../dist/libs/tokens/internal/size.css?inline'
import textTokens from '../../../dist/libs/tokens/internal/text.css?inline'
import viewportTokens from '../../../dist/libs/tokens/internal/viewport.css?inline'
import { GlobalStylesRegistry } from './utils/global-styles'

const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(sizeTokens),
  unsafeCSS(viewportTokens),
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
      ${unsafeCSS(colorV2Light)}
    }
    :root[gds-theme='dark'] {
      ${unsafeCSS(colorV2Dark)}
    }
  `,
)

export { tokens, colorV2Light, colorV2Dark }
