/* eslint-disable @nx/enforce-module-boundaries */
import { unsafeCSS } from 'lit'
import palletCss from '../../../dist/libs/tokens/internal/pallet.css?inline'
import lightThemeCss from '../../../dist/libs/tokens/internal/theme/light.css?inline'
import sizeCSS from '../../../dist/libs/tokens/internal/size.css?inline'
import motionCSS from '../../../dist/libs/tokens/internal/motion.css?inline'

const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(lightThemeCss),
  unsafeCSS(sizeCSS),
  unsafeCSS(motionCSS),
]

export { tokens }
