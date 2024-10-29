import { TransitionalStyles } from '../../transitional-styles'
import styles from './dialog.trans.styles.scss'

// Remember to import and call register() for any child components here too!

export function register() {
  TransitionalStyles.instance.register('gds-dialog', styles.toString())
}

export default register
