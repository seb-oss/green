import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './monthpicker.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-monthpicker', styles.toString())
}

export default register
