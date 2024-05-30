/* eslint-disable @nx/enforce-module-boundaries */
import { unsafeCSS } from 'lit'
import palletCss from '../../../dist/libs/tokens/internal/pallet.css'
import lightThemeCss from '../../../dist/libs/tokens/internal/theme/light.css'
import sizeCSS from '../../../dist/libs/tokens/internal/size.css'
import motionCSS from '../../../dist/libs/tokens/internal/motion.css'

const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(lightThemeCss),
  unsafeCSS(sizeCSS),
  unsafeCSS(motionCSS),
]

export { tokens }
