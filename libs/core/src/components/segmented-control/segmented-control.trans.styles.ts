import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './segmented-control.trans.styles.css'

export function register() {
  TransitionalStyles.instance.register(
    'gds-segmented-control',
    styles.toString()
  )
}

export default register
