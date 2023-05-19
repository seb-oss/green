import { TransitionalStyles } from '../../transitional-styles'
import styles from './listbox.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-listbox', styles.toString())
}

export default register
