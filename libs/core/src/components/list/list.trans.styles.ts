import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './list.trans.styles.scss'

export function register() {
  console.log(styles.toString())
  TransitionalStyles.instance.register('gds-list', styles.toString())
}

export default register
