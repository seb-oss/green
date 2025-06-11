import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './year-picker.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-year-picker', styles.toString())
}

export default register
