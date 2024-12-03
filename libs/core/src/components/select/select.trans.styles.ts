import { TransitionalStyles } from '../../transitional-styles'
import styles from './select.trans.styles.scss'

// Remember to import and call register() for any child components here too!

export function register() {
  TransitionalStyles.instance.register('gds-select', styles.toString())
}

export default register
