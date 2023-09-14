import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './popover.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-popover', styles.toString())
}

export default register
