import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './button.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-button', styles.toString())
}

export default register
