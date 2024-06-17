import { TransitionalStyles } from '../../transitional-styles'
import chlorophyllTokens from './chlorophyll-tokens.scss?inline'

export function register() {
  TransitionalStyles.instance.register(
    'gds-theme',
    chlorophyllTokens.toString(),
  )
}

export default register
