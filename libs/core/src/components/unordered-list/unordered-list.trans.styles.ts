import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './unordered-list.trans.styles.scss'

export function register() {
  console.log(styles.toString())
  TransitionalStyles.instance.register('gds-unordered-list', styles.toString())
}

export default register
