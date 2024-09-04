/* eslint-disable @nx/enforce-module-boundaries */
import { unsafeCSS } from 'lit'
import palletCss from '../../../dist/libs/tokens/internal/pallet.css?inline'
import lightThemeCss from '../../../dist/libs/tokens/internal/theme/light.css?inline'
import sizeTokens from '../../../dist/libs/tokens/internal/size.css?inline'
import textTokens from '../../../dist/libs/tokens/internal/text.css?inline'
import motionTokens from '../../../dist/libs/tokens/internal/motion.css?inline'
import shadowTokens from '../../../dist/libs/tokens/internal/shadow.css?inline'

// V2
import colorV2Light from '../../../dist/libs/tokens/internal/light.css?inline'
import colorV2Dark from '../../../dist/libs/tokens/internal/dark.css?inline'

const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(lightThemeCss),
  unsafeCSS(sizeTokens),
  unsafeCSS(textTokens),
  unsafeCSS(motionTokens),
  unsafeCSS(shadowTokens),
  // v2
  unsafeCSS(colorV2Light),
  unsafeCSS(colorV2Dark),
]

export { tokens }
