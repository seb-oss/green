import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './context-menu.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-context-menu', styles.toString())
}

export default register
