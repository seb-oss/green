import { TransitionalStyles } from '../../transitional-styles'
import styles from './checkbox.trans.styles.scss'

// Remember to import and call register() for any child components here too!

export function register() {
  TransitionalStyles.instance.register('gds-checkbox', styles.toString())
}

export default register
