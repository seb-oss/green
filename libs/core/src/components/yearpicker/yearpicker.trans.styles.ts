import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './yearpicker.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-yearpicker', styles.toString())
}

export default register
