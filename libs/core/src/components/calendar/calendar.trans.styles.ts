import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './calendar.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-calendar', styles.toString())
}

export default register
