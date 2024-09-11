import { TransitionalStyles } from '../../../utils/transitional-styles/transitional-styles'
import styles from './segment.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-segmented', styles.toString())
}

export default register
