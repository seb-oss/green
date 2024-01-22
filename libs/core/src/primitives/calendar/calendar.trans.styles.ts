import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './calendar.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-calendar', styles.toString())
}

export default register
