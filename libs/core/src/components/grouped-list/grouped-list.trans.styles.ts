import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './grouped-list.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-grouped-list', styles.toString())
}

export default register
