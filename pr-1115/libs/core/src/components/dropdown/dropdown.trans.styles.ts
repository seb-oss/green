import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './dropdown.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-dropdown', styles.toString())
}

export default register
