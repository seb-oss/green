import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './datepicker.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-datepicker', styles.toString())
}

export default register
