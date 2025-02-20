import { TransitionalStyles } from '../../transitional-styles'
import styles from './radio.trans.styles.scss'

// Remember to import and call register() for any child components here too!

export function register() {
  TransitionalStyles.instance.register('gds-radio', styles.toString())
}

export default register
