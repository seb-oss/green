import { TransitionalStyles } from '../../transitional-styles'
import styles from './button.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-button', styles.toString())
}

export default register
