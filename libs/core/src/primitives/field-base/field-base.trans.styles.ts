import { TransitionalStyles } from '../../transitional-styles'
import styles from './field-base.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-field-base', styles.toString())
}

export default register
