import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import styles from './segmented-control.trans.styles.scss'

export function register() {
  console.log(styles.toString())
  TransitionalStyles.instance.register(
    'gds-segmented-control',
    styles.toString()
  )
}

export default register
