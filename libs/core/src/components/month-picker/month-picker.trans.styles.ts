import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './month-picker.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-month-picker', styles.toString())
}

export default register
