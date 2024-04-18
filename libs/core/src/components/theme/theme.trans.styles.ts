import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import chlorophyllTokens from './chlorophyll-tokens.scss'

export function register() {
  TransitionalStyles.instance.register(
    'gds-theme',
    chlorophyllTokens.toString()
  )
}

export default register
