import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './ordered-list.trans.styles.scss'

export function register() {
  console.log(styles.toString())
  TransitionalStyles.instance.register('gds-ordered-list', styles.toString())
}

export default register
