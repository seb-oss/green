import { unsafeCSS } from 'lit'

import palletCss from '../../../dist/libs/tokens/internal/pallet.css'
import lightThemeCss from '../../../dist/libs/tokens/internal/theme/light.css'
import darkThemeCss from '../../../dist/libs/tokens/internal/theme/dark.css'

// These are here temporarliy until we can get them from the tokens package
import localTokens from './tokens/tokens.css'
import localA11yTokens from './tokens/a11y.css'

// Put all the tokens in a CSSResult instance and export it
const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(lightThemeCss),
  //unsafeCSS(darkThemeCss),
  unsafeCSS(localTokens),
  unsafeCSS(localA11yTokens),
]

export { tokens }
