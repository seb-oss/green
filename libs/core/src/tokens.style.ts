import { unsafeCSS } from 'lit'

import palletCss from '../../../dist/libs/tokens/internal/pallet.css'
import lightThemeCss from '../../../dist/libs/tokens/internal/theme/light.css'
import sizeCSS from '../../../dist/libs/tokens/css/size.css'

const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(lightThemeCss),
  unsafeCSS(sizeCSS),
]

export { tokens }
